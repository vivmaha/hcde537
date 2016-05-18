controllers.controller('newsletter', ['$scope',
    function($scope) {
        $scope.data = {
            paragraphAndImageSection : {
                heading: 'newsletter',
            },
            subPoints : [ {
                heading : 'current newsletter',                
            }, {
                heading : 'previous newsletters',
            }, ]
        }
    }
]);
