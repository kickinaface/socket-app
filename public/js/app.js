(function() {
    'use strict';
    angular
        .module('socket-app', ['ngRoute', 'angular.filter'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html'
            })
            .when('/settings', {
                templateUrl: 'partials/settings.html',
                controller: 'SettingsCtrl'
            })
            .when('/visitors', {
                templateUrl: 'partials/visitors.html',
                controller: 'VisitorsCtrl'
            })
            .when('/interactive', {
                templateUrl: 'partials/interactive.html',
                controller: 'InteractiveCtrl'
            });

            $locationProvider.html5Mode(true);
        });

})();
