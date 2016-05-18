controllers.controller('ourSchool', ['$scope',
    function($scope) {
        $scope.data = {
            jumpPoints: [ {
                heading: 'about',
                items : [ {
                    title: 'mission & philosophy',
                    link: '/#/our-school/about',  
                }, {
                    title: 'fast facts',
                    link: '/#/our-school/about',  
                }, {
                    title: 'learning environment',
                    link: '/#/our-school/about',  
                }, {
                    title: 'our staff',
                    link: '/#/our-school/about',  
                }, ],
            },  {
                heading: 'reviews',
                items : [ {
                    title: 'testimonials from parents',
                    link: '/#/TODO',  
                }, {
                    title: 'stories about current families',
                    link: '/#/TODO',  
                }, {
                    title: 'yelp reviews',
                    link: '/#/TODO',  
                }, {
                    title: 'facebook reviews',
                    link: '/#/TODO',  
                }, ],
            }, {
                heading: 'enroll',
                items : [ {
                    title: 'admissions',
                    link: '/#/TODO',  
                }, {
                    title: 'request enrollment information',
                    link: '/#/TODO',  
                }, {
                    title: 'schedule visit',
                    link: '/#/TODO',  
                }, {
                    title: 'download form for registering a new child',
                    link: '/#/TODO',  
                }, ],
            },],
        }
    }
]);
