directives.directive('tltHeader', ['throttledEventListener',
    function(throttledEventListener) {
        return {
            controller : function($scope) {
                $scope.items = [ {
                    title : 'our school',
                    items : [ {
                        title : 'about',
                        link : '/#/about'
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
                
                function closeMenus() {
                    for (var i = 0; i < $scope.items.length; i++) {
                        $scope.items[i].isHidden = true;
                    }
                }
                closeMenus();
                
                $scope.onClick = function(item) {                     
                    if (item.isHidden) {
                        closeMenus();                    
                        item.isHidden = false;    
                    } else {
                        closeMenus();
                    }
                }
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