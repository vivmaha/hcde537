controllers.controller('about', ['$scope',
    function($scope) {
        
        $scope.data = {
            paragraphAndImageSection : {
                heading: 'About',
            },
            subPoints : [ {
                heading : 'mission and philosophy',
                link: '/#/our-school/about/mission-and-philosophy',
            }, {
                heading : 'fast facts',
                link: '/#/our-school/about/fast-facts',  
            },  {
                heading : 'learning and environment',
                link: '/#/our-school/about/learning-environment',  
            },  {
                heading : 'our staff',
                link: '/#/our-school/about/our-staff',  
            }, ]
        }
    }
]);
