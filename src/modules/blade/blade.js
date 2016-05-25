directives.directive('tltBlade', [
    function () {
        return {
            controller: function ($scope) {
            },
            replace: true,
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'modules/blade/blade.html',
        };
    }
]);