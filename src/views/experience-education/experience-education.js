controllers.controller('experienceEducation', ['$scope',
    function($scope) {
        $scope.data = {
            header : {
                isSignedIn : false,
            },
            heading : 'experience education',
            sectionTwoHeading: 'Learn more about experience education',
            jumpPoints: [ {
                heading: 'principles',
                link : '/#/our-school/principles',
                items : [ {
                    title: 'the journey from infancy to kindergarten',
                    link: '/#/our-school/principles/the-journey-from-infancy-to-kindergarten',  
                }, {
                    title: 'the montessori approach',
                    link: '/#/our-school/principles/the-montessori-approach',  
                }, {
                    title: 'the reggio program',
                    link: '/#/our-school/principles/the-reggio-program',  
                }, ],
            },  {
                heading: 'teachings',
                link : '/#/our-school/teachings',
                items : [ {
                    title: 'joyful approach to learning',
                    link: '/#/our-school/teachings/joyful-approach-to-learning',  
                }, {
                    title: 'teaching social skills',
                    link: '/#/our-school/teachings/teaching-social-skills',  
                }, {
                    title: 'fundamentals of quality child care',
                    link: '/#/our-school/teachings/Fundamentals-of-quality-child-care',  
                }, {
                    title: 'interaction between teachers and kids',
                    link: '/#/our-school/teachings/interaction-between-teachers-and-kids',  
                }, {
                    title: 'individualized instruction',
                    link: '/#/our-school/teachings/individualized-instruction',  
                }, ],
            }, {
                heading: 'offerings',
                link: '/#/our-school/offerings',
                items : [ {
                    title: 'fresh, organic meals',
                    link: '/#/our-school/offerings/fresh-organic-meals',  
                }, {
                    title: 'extra sensory integration work',
                    link: '/#/our-school/offerings/extra-sensory-integration-work',  
                }, {
                    title: 'weekly yoga',
                    link: '/#/our-school/offerings/weekly-yoga',  
                }, {
                    title: 'drama classes',
                    link: '/#/our-school/offerings/drama-classes',  
                }, ],
            },],
        }
    }
]);
