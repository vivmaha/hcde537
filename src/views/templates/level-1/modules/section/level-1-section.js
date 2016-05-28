directives.directive('tltLevel1Section', [
    function () {
        return {
            controller: function ($scope) {
            },
            replace: true,
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'views/templates/level-1/modules/section/level-1-section.html',
        };
    }
]);