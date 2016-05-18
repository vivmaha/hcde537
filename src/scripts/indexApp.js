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
        var templateUrlPageTemplateLevelThree = 'page-templates/level-three/level-three.html';
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
            .when('/our-school/about/mission-and-philosophy', {
                templateUrl: templateUrlPageTemplateLevelThree,
                controller: 'missionAndPhilosophy'
            })
            .when('/our-school/about/fast-facts', {
                templateUrl: templateUrlPageTemplateLevelThree,
                controller: 'fastFacts'
            })
            .when('/our-school/about/learning-environment', {
                templateUrl: templateUrlPageTemplateLevelThree,
                controller: 'learningEnvironment'
            })
            .when('/our-school/about/our-staff', {
                templateUrl: templateUrlPageTemplateLevelThree,
                controller: 'ourStaff'
            })
            .when('/our-school/enroll', {
                templateUrl: templateUrlPageTemplateLevelTwo,
                controller: 'enroll'
            })
            .when('/our-school/enroll/admissions', {
                templateUrl: templateUrlPageTemplateLevelThree,
                controller: 'admissions'
            })
            .when('/our-school/enroll/enrollment-forms', {
                templateUrl: templateUrlPageTemplateLevelThree,
                controller: 'enrollmentForms'
            })
            .when('/our-school/enroll/enrollment-information', {
                templateUrl: templateUrlPageTemplateLevelThree,
                controller: 'enrollmentInformation'
            })
            .when('/our-school/enroll/schedule-visit', {
                templateUrl: templateUrlPageTemplateLevelThree,
                controller: 'scheduleVisit'
            })
            .when('/our-school/reviews', {
                templateUrl: templateUrlPageTemplateLevelThree,
                controller: 'reviews'
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
            .when('/current-families/newsletter', {
                templateUrl: templateUrlPageTemplateLevelTwo,
                controller: 'newsletter',
            })
            .when('/current-families/forms-and-policies', {
                templateUrl: templateUrlPageTemplateLevelTwo,
                controller: 'formsAndPolicies',
            })
    }
]);