directives.directive('tltHeader', ['throttledEventListener',
    function(throttledEventListener) {
        return {
            controller : function($scope) {
                $scope.items = [ {
                    title : 'our school',
                    link : '/#/our-school' ,
                    items : [ {
                        title : 'about',
                        link : '/#/our-school/about'
                    }, {
                        title : 'reviews',
                    }, {
                        title : 'enroll',
                    } ],
                }, {
                    title : 'experience education',
                    items: [ {
                        title : 'principles',
                    }, {
                        title : 'teaching',
                    }, {
                        title : 'offering'
                    } ],
                }, {
                    title : 'contact'
                } ];        
            },
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