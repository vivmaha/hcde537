directives.directive('tltLevel1Hero', [
    function () {
        return {
            controller: function ($scope) {
               $scope.style = {
                   backgroundImage : 'url(\'' + $scope.data.image + '\')',
               };
            },
            replace: true,
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'views/templates/level-1/modules/hero/level-1-hero.html',
        };
    }
]);