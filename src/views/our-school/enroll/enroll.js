controllers.controller('enroll', ['$scope',
    function($scope) {
        
        $scope.data = {
            paragraphAndImageSection : {
                heading: 'Enrollment',
            },
            subPoints : [ {
                heading : 'admissions',
                link: '/#/our-school/enroll/admissions',                  
            }, {
                heading : 'request enrollment information',
                link: '/#/our-school/enroll/enrollment-information',  
            },  {
                heading : 'schedule a visit',
                link: '/#/our-school/enroll/schedule-visit',
            },  {
                heading : 'download forms for registering a new child',
                link: '/#/our-school/enroll/enrollment-forms',
            }, ]
        }
    }
]);
