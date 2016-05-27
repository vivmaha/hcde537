﻿var indexApp = angular.module('indexApp', [
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
                templateUrl: 'views/pages/home/home.html',
                controller: 'home'
            });
    }
]);