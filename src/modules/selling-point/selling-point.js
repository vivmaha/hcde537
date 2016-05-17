directives.directive('tltSellingPoint',
    function() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                data : '='
            },
            templateUrl: 'modules/selling-point/selling-point.html'
        };
    }
);