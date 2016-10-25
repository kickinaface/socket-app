(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('MessagesCtrl', MessagesCtrl);

        function MessagesCtrl ($scope, MessagesFactory) {
            var vm = this;

            $scope.submitSendMessage = function () {
                MessagesFactory.sendMessageTo($scope.messageform.message, $scope.clientId);
            };

            $scope.resetTextArea = function () {
                $scope.messageform.message = '';
            };
        }
})();
