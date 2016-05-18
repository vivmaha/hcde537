controllers.controller('reviews', ['$scope',
    function($scope) {
         $scope.data = {
            section01 : {
                heading: 'Testimonials from parents',
            },
            section02 : {
                heading: 'Stories about current families',
            },
            section03 : {
                heading: 'Yelp',
            },
            section04 : {
                heading: 'Facebook',
            },
        }
    }
]);
