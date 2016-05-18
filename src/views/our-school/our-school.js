controllers.controller('ourSchool', ['$scope',
    function($scope) {
        $scope.data = {
            header : {
                isSignedIn : false,
            },
            heading: 'our school',
            sectionTwoHeading : 'Learn more about our school',
            jumpPoints: [ {
                heading: 'about',
                link : '/#/our-school/about',
                items : [ {
                    title: 'mission & philosophy',
                    link: '/#/our-school/about/mission-and-philosophy',  
                }, {
                    title: 'fast facts',
                    link: '/#/our-school/about/fast-facts',  
                }, {
                    title: 'learning environment',
                    link: '/#/our-school/about/learning-environment',  
                }, {
                    title: 'our staff',
                    link: '/#/our-school/about/our-staff',  
                }, ],
            },  {
                heading: 'reviews',
                link : '/#/our-school/reviews',
                items : [ {
                    title: 'testimonials from parents',
                    link: '/#/our-school/reviews/testimonials-from-parents',  
                }, {
                    title: 'stories about current families',
                    link: '/#/our-school/reviews/stories-about-current-families',  
                }, {
                    title: 'yelp reviews',
                    link: 'http://www.yelp.com/biz/a-childs-journey-school-kirkland',  
                }, {
                    title: 'facebook reviews',
                    link: 'https://www.facebook.com/childsjourney',  
                }, ],
            }, {
                heading: 'enroll',
                link: '/#/our-school/enroll',
                items : [ {
                    title: 'admissions',
                    link: '/#/our-school/enroll/admissions',  
                }, {
                    title: 'request enrollment information',
                    link: '/#/our-school/enroll/request-enrollment-information',  
                }, {
                    title: 'schedule visit',
                    link: '/#/our-school/enroll/schedule-visit',  
                }, {
                    title: 'download forms for registering a new child',
                    link: '/#/our-school/enroll/download-forms-for-registering-a-new-child',  
                }, ],
            },],
        }
    }
]);
