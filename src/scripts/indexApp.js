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
            .otherwise({
                templateUrl: 'views/home/home.html',
                controller: 'home'
            });
    }
]);