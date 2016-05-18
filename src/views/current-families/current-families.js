controllers.controller('currentFamilies', ['$scope',
    function($scope) {
        $scope.data = {
            header: {
                isSignedIn : true,
            },
            heading : 'current families',
            sectionTwoHeading: 'learn more about what\'s happening',
            jumpPoints: [ {
                heading: 'schedule',
                link : '/#/current-families/schedule',
                items : [ {
                    title: 'calendar',
                    link: '/#/current-families/schedule/calendar',  
                }, {
                    title: 'weekly menu',
                    link: '/#/current-families/schedule/weekly menu',  
                }, {
                    title: 'holidays and closures',
                    link: '/#/current-families/schedule/holidays-and-closures',  
                }, ],
            },  {
                heading: 'newsletter',
                link : '/#/current-families/newsletter',
                items : [ {
                    title: 'current newsletter',
                    link: '/#/current-families/newsletter/current newsletter',  
                }, {
                    title: 'previous newsletters',
                    link: '/#/current-families/newsletter/previous newsletters',  
                }, ],
            }, {
                heading: 'forms and policies',
                link: '/#/current-families/forms-and-policies',
                items : [ {
                    title: 'update child records',
                    link: '/#/current-families/forms-and-policies/update-child-records',  
                }, {
                    title: 'parent handbook',
                    link: '/#/current-families/forms-and-policies/parent-handbook',  
                }, ],
            },],
        }
    }
]);
