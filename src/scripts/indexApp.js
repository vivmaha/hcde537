var indexApp = angular.module('indexApp', [
    'ngRoute',
    'ngAnimate',
    'services',
    'controllers',
    'directives',
]);

indexApp.config(['$routeProvider',
    function ($routeProvider, $sceProvider) {
        
        function createRoute(level, page) {            
            var levelString = 'level-' + level;
            var templateString = 'page' + page;
            return {                
                templateUrl: 'views/templates/' + levelString + '/' + levelString + '.html',
                controller: templateString,
            }
        }
        
        $routeProvider
            .when('/', createRoute(0, 'Home'))
            .when('/home/what-makes-us-different', createRoute(1, 'WhatMakesUsDifferent'));
    }
]);