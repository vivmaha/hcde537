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
            .when('/', {
                templateUrl: 'views/home/home.html',
                controller: 'home'
            })            
            .when('/our-school', {
                templateUrl: 'views/our-school/our-school.html',
                controller: 'ourSchool'
            })            
            .when('/our-school/about', {
                templateUrl: 'views/our-school/about/about.html',
                controller: 'about'
            })
            .when('/our-school/about/mission-and-philosophy', {
                templateUrl: 'views/our-school/about/mission-and-philosophy/mission-and-philosophy.html',
                controller: 'missionAndPhilosophy'
            })
    }
]);