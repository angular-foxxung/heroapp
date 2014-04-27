angular.module("HeroApp", [])
    .controller("HeroAppController", [ '$scope', function($scope) {
        $scope.hero = {"name": "Ironman"};
    }])
;
