controllers.controller('about', ['$scope',
    function($scope) {
        
        $scope.data = {
            header : {
                isSignedIn : false,
            },
            paragraphAndImageSection : {
                heading: 'About',
            },
            subPoints : [ {
                heading : 'mission and philosophy',
                link: '/#/our-school/about/mission-and-philosophy',
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
