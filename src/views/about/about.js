controllers.controller('about', ['$scope',
    function($scope) {
        
        $scope.data = {
            subPoints : [ {
                heading : 'mission and philosophy',
            }, {
                heading : 'fast facts',
            },  {
                heading : 'learning and environment',
            },  {
                heading : 'our staff',
            }, ]
        }
    }
]);
