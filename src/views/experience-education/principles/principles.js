controllers.controller('principles', ['$scope',
    function($scope) {
        $scope.data = {
            paragraphAndImageSection : {
                heading: 'principles',
            },
            subPoints : [ {
                heading : 'the journey from infancy to kindergarten',                
            }, {
                heading : 'the montessori approach',
            },  {
                heading : 'the reggio program',
            }, ]
        }
    }
]);
