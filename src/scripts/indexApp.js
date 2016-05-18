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
        var templateUrlPageTemplateLevelTwo = 'page-templates/level-two/level-two.html';
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
                templateUrl: templateUrlPageTemplateLevelTwo,
                controller: 'about'
            })
            .when('/our-school/enroll', {
                templateUrl: templateUrlPageTemplateLevelTwo,
                controller: 'enroll'
            })
            .when('/our-school/about/mission-and-philosophy', {
                templateUrl: 'views/our-school/about/mission-and-philosophy/mission-and-philosophy.html',
                controller: 'missionAndPhilosophy'
            })
            .when('/experience-education', {
                templateUrl: templateUrlPageTemplateLevelOne,
                controller: 'experienceEducation',
            })
            .when('/experience-education/principles', {
                templateUrl: templateUrlPageTemplateLevelTwo,
                controller: 'principles'
            })
            .when('/current-families', {
                templateUrl: templateUrlPageTemplateLevelOne,
                controller: 'currentFamilies',
            })
    }
]);