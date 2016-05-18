directives.directive('tltHeader', ['throttledEventListener',
    function(throttledEventListener) {
        return {
            controller : function($scope) {
                $scope.items = [ {
                    title : 'our school',
                    link : '/#/our-school',
                    items : [ {
                        title : 'about',
                        link : '/#/our-school/about'
                    }, {
                        title : 'reviews',
                        link : '/#/our-school/reviews',
                    }, {
                        title : 'enroll',
                        link : '/#/our-school/enroll',
                    } ],
                }, {
                    title : 'experience education',
                    link : '/#/experience-education',
                    items: [ {
                        title : 'principles',
                        link : '/#/experience-education/principles',
                    }, {
                        title : 'teaching',
                        link : '/#/experience-education/teaching',
                    }, {
                        title : 'offerings',
                        link : '/#/experience-education/offerings',
                    } ],
                }, {
                    title : 'contact',
                    link : '/#/contact',
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