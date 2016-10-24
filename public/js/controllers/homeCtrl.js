(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('HomeCtrl', HomeCtrl);

        function HomeCtrl ($scope) {
            var vm = this;
            $scope.introTitle = 'Welcome';
            $scope.subHeaderText = 'Click on the navigation items to exlplore.';
            $scope.numMessages = 0;
        }
})();
