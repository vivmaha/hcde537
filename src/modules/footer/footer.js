directives.directive('tltFooter', [
    function () {
        return {
            controller: function ($scope) {
                $scope.items = [ { 
                        title: "our school", 
                        link: "/#/our-school" 
                    }, { 
                        title: "experience education", 
                        link: "/#/experience-education" 
                    }, { 
                        title: "contact", 
                        link: "/#/contact" 
                    }, { 
                        title: "current families", 
                        link: "/#/current-families" 
                    }, {
                        title: "schedule tour",
                        link: "/#/schedule-tour" 
                    }, { 
                        title: "facebook", 
                        link: "https://www.facebook.com/childsjourney" 
                    }, { 
                        title: "yelp", 
                        link: "http://www.yelp.com/biz/a-childs-journey-school-kirkland" 
                    }, { 
                        title: "sitemap", 
                        link: "/#/sitemap" 
                    }, { 
                        title: "login", 
                        link: "/#/login" 
                    }, ];
            },
            replace: true,
            restrict: 'E',
            scope: {
                data: '='
            },
            templateUrl: 'modules/footer/footer.html',
        };
    }
]);