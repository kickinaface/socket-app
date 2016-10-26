(function() {
    'use strict';
    angular
        .module('socket-app', ['ngRoute', 'angular.filter'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
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
            })
            .when('/messages', {
                templateUrl: 'partials/messages.html',
                controller: 'MessagesCtrl'
            });

            $locationProvider.html5Mode(true);
        });

})();
