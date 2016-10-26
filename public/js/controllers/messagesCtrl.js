(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('MessagesCtrl', MessagesCtrl);

        function MessagesCtrl ($scope, MessagesFactory) {
            var vm = this;

            $scope.sendMessage = function (id) {
                MessagesFactory.openMessageDialog(id);
            }

            $scope.submitSendMessage = function () {
                MessagesFactory.sendMessageTo($scope.messageform.message, $scope.clientId);
            };

            $scope.resetTextArea = function () {
                $scope.messageform.message = '';
            };
        }
})();
