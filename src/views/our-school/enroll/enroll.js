controllers.controller('enroll', ['$scope',
    function($scope) {
        
        $scope.data = {
            paragraphAndImageSection : {
                heading: 'Enrollment',
            },
            subPoints : [ {
                heading : 'admissions',                
            }, {
                heading : 'request enrollment information',
            },  {
                heading : 'schedule a visit',
            },  {
                heading : 'download forms for registering a new child',
            }, ]
        }
    }
]);
