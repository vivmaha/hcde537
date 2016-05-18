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
                heading: 'teaching',
                link : '/#/experience-education/teaching',
                items : [ {
                    title: 'joyful approach to learning',
                    link : '/#/experience-education/teaching',  
                }, {
                    title: 'teaching social skills',
                    link : '/#/experience-education/teaching',  
                }, {
                    title: 'fundamentals of quality child care',
                    link : '/#/experience-education/teaching',  
                }, {
                    title: 'interaction between teachers and kids',
                    link : '/#/experience-education/teaching',  
                }, {
                    title: 'individualized instruction',
                    link : '/#/experience-education/teaching',  
                }, ],
            }, {
                heading: 'offerings',
                link: '/#/experience-education/offerings',
                items : [ {
                    title: 'fresh, organic meals',
                    link: '/#/experience-education/offerings',  
                }, {
                    title: 'extra sensory integration work',
                    link: '/#/experience-education/offerings',  
                }, {
                    title: 'weekly yoga',
                    link: '/#/experience-education/offerings',  
                }, {
                    title: 'drama classes',
                    link: '/#/experience-education/offerings',  
                }, ],
            },],
        }
    }
]);

function createLevelThreeController(name, items) {
    controllers.controller(name, ['$scope',
        function($scope) {
            $scope.data = {};
            for (var i = 0; i < items.length; i++) {
                $scope.data['section0' + (i + 1)] = {
                    heading: items[i] 
                };                
            }
        }
    ]);
}

createLevelThreeController(
    'teaching', 
    [
        'Joyful approach to learning',
        'Teaching social skills',
        'Fundamentals of quality child care',
        'Interaction between teachers and kids',
        'Individualized instruction'
    ]
);

createLevelThreeController(
    'offerings', 
    [
        'Fresh, organic meals',
        'Extra sensory integration work',
        'Weekly yoga',
        'Drama classes'
    ]
);


createLevelThreeController(
    'contact', 
    [
        'Hours of operation',
        'Physical address',
        'Phone number',
        'Email address'
    ]
);

createLevelThreeController(
    'schedule', 
    [
        'Calendar',
        'Weekly Menu',
        'Holidays and closures',
    ]
);

createLevelThreeController(
    'currentNewsletter', 
    [
        'Current newsletter',
    ]
);

createLevelThreeController(
    'previousNewsletters', 
    [
        'Previous newsletters',
    ]
);

createLevelThreeController(
    'updateRecords', 
    [
        'Update child records',
    ]
);

createLevelThreeController(
    'parentHandBook', 
    [
        'parent handbook',
    ]
);
