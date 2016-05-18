controllers.controller('currentFamilies', ['$scope',
    function($scope) {
        $scope.data = {
            heading : 'current families',
            sectionTwoHeading: 'learn more about what\'s happening',
            jumpPoints: [ {
                heading: 'schedule',
                link : '/#/current-families/schedule',
                items : [ {
                    title: 'calendar',
                    link : '/#/current-families/schedule',  
                }, {
                    title: 'weekly menu',
                    link : '/#/current-families/schedule',  
                }, {
                    title: 'holidays and closures',
                    link : '/#/current-families/schedule',  
                }, ],
            },  {
                heading: 'newsletter',
                link : '/#/current-families/newsletter',
                items : [ {
                    title: 'current newsletter',
                    link: '/#/current-families/newsletter/current',  
                }, {
                    title: 'previous newsletters',
                    link: '/#/current-families/newsletter/previous',  
                }, ],
            }, {
                heading: 'forms and policies',
                link: '/#/current-families/forms-and-policies',
                items : [ {
                    title: 'update child records',
                    link: '/#/current-families/forms-and-policies/update-records',  
                }, {
                    title: 'parent handbook',
                    link: '/#/current-families/forms-and-policies/parent-handbook',  
                }, ],
            },],
        }
    }
]);
