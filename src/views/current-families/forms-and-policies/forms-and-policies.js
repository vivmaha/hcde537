controllers.controller('formsAndPolicies', ['$scope',
    function($scope) {
        $scope.data = {
            paragraphAndImageSection : {
                heading: 'forms and policies',
            },
            subPoints : [ {
                heading : 'update child records',
                link: '/#/current-families/forms-and-policies/update-records',
            }, {
                heading : 'parent handbook',
                link: '/#/current-families/forms-and-policies/parent-handbook',
            }, ]
        }
    }
]);
