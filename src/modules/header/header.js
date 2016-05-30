directives.directive('tltHeader', ['$location',
    function($location) {
        return {
            controller : function($scope) {
                $scope.items = [ {
                    title : 'our school',
                    link : '/#/todo',
                    items: [ {
                        title : 'classes',
                        link : '/#/our-school/classes'                        
                    }, {
                        title : 'facilities',
                        link : '/#/our-school/facilities'                        
                    }, {
                        title : 'organic food',
                        link : '/#/our-school/organic-food'                        
                    }, {
                        title : 'academic enrichment',
                        link : '/#/our-school/academic-enrichment'                        
                    }, ],
                }, {
                    title : 'learning approach',
                    link : '/#/todo',
                }, {
                    title : 'staff',
                    link : '/#/todo',
                }, {
                    title : 'enrollment',
                    link : '/#/todo',
                }, {
                    title : 'tuition & fees',
                    link : '/#/todo',
                }, ];   
                
                $scope.isSignedIn = ($location.path().indexOf("/current-families") == 0);
                if ($scope.isSignedIn) {                
                    $scope.callToAction = 'pay tuition';         
                    $scope.callToActionLink = '/#/todo';                               
                } else {
                    $scope.callToAction = 'schedule a tour';
                    $scope.callToActionLink = '/#/todo'
                }
                
                $scope.onCallToActionClick = function() {
                      location.href = $scope.callToActionLink;
                };      
                
                function unselectItem() {
                    for (var i = 0; i < $scope.items.length; i++) {                        
                        $scope.items[i].isSelected = false;
                    }
                }  
                
                function selectItem(item) {
                    unselectItem();
                    item.isSelected = true;
                }
                
                $scope.onItemClick = function(item) {
                    selectItem(item);
                };
                
                $scope.onItemUnClick = function(item) {
                    item.isSelected = false;
                };
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