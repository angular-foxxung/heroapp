angular.module("HeroApp", ["ngResource"])
    .controller("HeroAppController", [ '$scope', "Hero", function($scope, Hero) {
        $scope.hero = Hero.get({"_key": "ironmantonystark"});
    }])
    .service("Hero", ["$resource", function($resource) {
        return $resource("hero/:_key", {}, {
            "update": {"method": "PUT", "url":'hero/:_key', 'params': {'_key': '@_key'}}
        });
    }])
;
