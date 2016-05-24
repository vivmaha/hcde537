directives.directive('tltHero', [
    function () {
        return {
            controller: function ($scope) {
               
            },
            replace: true,
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'modules/hero/hero.html',
        };
    }
]);