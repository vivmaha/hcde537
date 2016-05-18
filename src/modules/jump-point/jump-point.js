directives.directive('tltJumpPoint',
    function() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                data : '='
            },
            templateUrl: 'modules/jump-point/jump-point.html'
        };
    }
);