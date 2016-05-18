var indexApp = angular.module('indexApp', [
    'ngRoute',
    'ngAnimate',
    'services',
    'controllers',
    'directives',
]);

indexApp.config(['$routeProvider',
    function ($routeProvider, $sceProvider) {
        var templateUrlPageTemplateLevelOne = 'page-templates/level-one/level-one.html';
        $routeProvider
            .when('/', {
                templateUrl: 'views/home/home.html',
                controller: 'home'
            })            
            .when('/our-school', {
                templateUrl: templateUrlPageTemplateLevelOne,
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
            .when('/experience-education', {
                templateUrl: templateUrlPageTemplateLevelOne,
                controller: 'experienceEducation',
            })
            .when('/current-families', {
                templateUrl: templateUrlPageTemplateLevelOne,
                controller: 'currentFamilies',
            })
    }
]);