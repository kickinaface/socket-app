(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('HomeCtrl', HomeCtrl);

        function HomeCtrl ($scope) {
            var vm = this;
            $scope.introTitle = 'Welcome';
            $scope.subHeaderText = 'Click on the menu items to exlplore.';
        }
})();
