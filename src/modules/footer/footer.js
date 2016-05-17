directives.directive('tltFooter', [
    function() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                data : '='
            },
            templateUrl: 'modules/footer/footer.html',
        };
    }
]);