angular.module("HeroApp", ["ngResource"])
    .controller("HeroAppController", [ '$scope', "$http", function($scope, $http) {
        $scope.heroIds = ["catking"];
        
        $scope.summon = function() {
            $http.get("random").success(function(id) {
                $scope.heroIds.push(angular.fromJson(id));
            });
        }
    }])
    .service("Hero", ["$resource", function($resource) {
        return $resource("hero/:_key", {}, {
            "update": {"method": "PUT", "url":'hero/:_key', 'params': {'_key': '@_key'}}
        });
    }])
    .directive("hero", ["$resource", "Hero", function($resource, Hero) {
        var HeroController = function($scope) {
            $scope.$watch("id", function(value) {
                $scope.hero = Hero.get({"_key": $scope.id});
            });
        };
        HeroController.$inject = ["$scope"];
        return {
            controller: HeroController,
            scope: {
                id: "@"
            },
            restrict: "E",
            templateUrl: "partials/hero.html"
        };
    }]);
