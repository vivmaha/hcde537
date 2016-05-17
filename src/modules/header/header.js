directives.directive('tltHeader', ['throttledEventListener',
    function(throttledEventListener) {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                data : '='
            },
            templateUrl: 'modules/header/header.html',
            link : function($scope, $element) {
                $scope.element = $element[0];
                window.addEventListener('scroll', function(event) {
                    $scope.isScrolled = (window.scrollY != 0);
                    $scope.$apply();
                });
            },
        };
    }
]);