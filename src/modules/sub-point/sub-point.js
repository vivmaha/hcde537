directives.directive('tltSubPoint',
    function() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                data : '='
            },
            templateUrl: 'modules/sub-point/sub-point.html'
        };
    }
);