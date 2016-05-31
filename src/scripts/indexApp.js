var indexApp = angular.module('indexApp', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'services',
    'controllers',
    'directives',
]);

indexApp.config(['$routeProvider',
    function ($routeProvider, $sceProvider) {
        
        function createRoute(level, prefix, title) {
            
            function getRoutePath(prefix, title) {
                if (title == 'home') {
                    title = '';
                }
                return prefix + '/' + title.replace(/ /g, '-');
            };
            
            function getSentenceCaseTitle(title) {
                function toSentenceCase(str) {
                    return str.substring(0,1).toUpperCase() + str.substring(1);
                }
                return title.split(' ').map(toSentenceCase).join('');
            }
            
            function getControllerName(title) {
                return 'page' + getSentenceCaseTitle(title);
            }
            
            function getTemplateUrl(level) {
                var levelString = 'level-' + level;
                return 'views/templates/' + levelString + '/' + levelString + '.html';
            }
            
            var routePath = getRoutePath(prefix, title);
            var routeDescription = {
                templateUrl: getTemplateUrl(level),
                controller: getControllerName(title),
            };
            
            $routeProvider.when(routePath, routeDescription);
        }

        createRoute(0, '', 'home');
        createRoute(1, '/home', 'what makes us different');
        createRoute(1, '/home', 'our commitment to learning and growing');
        createRoute(1, '/home', 'why families love us');
        createRoute(1, '/home', 'fast facts for new families');
        createRoute(1, '', 'learning approach');
        createRoute(1, '/learning-approach', 'montessori');
        createRoute(1, '/learning-approach', 'reggio');
        createRoute(1, '', 'our school');
        createRoute(1, '', 'staff');
        
        $routeProvider.when('/tuition', {
            templateUrl: 'views/pages/tuition/tuition.html',
            controller: 'pageTuition', 
        });
                
        $routeProvider.when('/schedule-tour', {
            templateUrl: 'views/pages/tour/tour.html',
            controller: 'pageScheduleTour', 
        });        
        
        $routeProvider.when('/parents-portal', {
            templateUrl: 'views/pages/parents-portal/parents-portal.html',
            controller: 'pageParentsPortal', 
        });
    }
]);