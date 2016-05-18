controllers.controller('experienceEducation', ['$scope',
    function($scope) {
        $scope.data = {
            heading : 'experience education',
            sectionTwoHeading: 'Learn more about experience education',
            jumpPoints: [ {
                heading: 'principles',
                link : '/#/experience-education/principles',
                items : [ {
                    title: 'the journey from infancy to kindergarten',
                    link: '/#/experience-education/principles/journey',  
                }, {
                    title: 'the montessori approach',
                    link: '/#/experience-education/principles/montessori',  
                }, {
                    title: 'the reggio program',
                    link: '/#/experience-education/principles/reggio',  
                }, ],
            },  {
                heading: 'teachings',
                link : '/#/experience-education/teachings',
                items : [ {
                    title: 'joyful approach to learning',
                    link: '/#/experience-education/teachings/joyful-approach-to-learning',  
                }, {
                    title: 'teaching social skills',
                    link: '/#/experience-education/teachings/teaching-social-skills',  
                }, {
                    title: 'fundamentals of quality child care',
                    link: '/#/experience-education/teachings/Fundamentals-of-quality-child-care',  
                }, {
                    title: 'interaction between teachers and kids',
                    link: '/#/experience-education/teachings/interaction-between-teachers-and-kids',  
                }, {
                    title: 'individualized instruction',
                    link: '/#/experience-education/teachings/individualized-instruction',  
                }, ],
            }, {
                heading: 'offerings',
                link: '/#/experience-education/offerings',
                items : [ {
                    title: 'fresh, organic meals',
                    link: '/#/experience-education/offerings/fresh-organic-meals',  
                }, {
                    title: 'extra sensory integration work',
                    link: '/#/experience-education/offerings/extra-sensory-integration-work',  
                }, {
                    title: 'weekly yoga',
                    link: '/#/experience-education/offerings/weekly-yoga',  
                }, {
                    title: 'drama classes',
                    link: '/#/experience-education/offerings/drama-classes',  
                }, ],
            },],
        }
    }
]);
