var indexApp = angular.module('indexApp', [
    'ngRoute',
    'ngAnimate',
    'services',
    'controllers',
    'directives',
]);

indexApp.config(['$routeProvider',
    function ($routeProvider, $sceProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home/home.html',
                controller: 'home'
            })
            .when('/about', {
                templateUrl: 'views/about/about.html',
                controller: 'about'
            })
            .otherwise({
                templateUrl: 'views/home/home.html',
                controller: 'home'
            });
    }
]);