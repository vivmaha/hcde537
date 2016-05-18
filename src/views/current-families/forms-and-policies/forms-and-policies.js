controllers.controller('formsAndPolicies', ['$scope',
    function($scope) {
        $scope.data = {
            paragraphAndImageSection : {
                heading: 'forms and policies',
            },
            subPoints : [ {
                heading : 'update child records',                
            }, {
                heading : 'parent handbook',
            }, ]
        }
    }
]);
