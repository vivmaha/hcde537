controllers.controller('fastFacts', ['$scope',
    function($scope) {
         $scope.data = {
            section01 : {
                heading: 'age range',
            },
            section02 : {
                heading: 'class size',
            },
            section03 : {
                heading: 'student to teacher ratio',
            },
            section04 : {
                heading: 'accreditations',
            },
            section05 : {
                heading: 'teacher qualifications',
            },
        }
    }
]);
