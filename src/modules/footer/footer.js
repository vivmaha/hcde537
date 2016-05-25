directives.directive('tltFooter', [
    function () {
        return {
            controller: function ($scope) {
            },
            replace: true,
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'modules/footer/footer.html',
        };
    }
]);