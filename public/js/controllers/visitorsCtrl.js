(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('VisitorsCtrl', VisitorsCtrl);

        function VisitorsCtrl ($scope, SocketFactory, MessagesFactory) {
            var vm = this;
            var socket = SocketFactory.getSocket();
            socket.emit('getUsers');
            socket.on('updateUsers', function (users) {
                $scope.users = users.users;
                $scope.$apply();
            });

            $scope.sendMessage = function (id) {
                MessagesFactory.openMessageDialog(id);
            }
        }
})();
