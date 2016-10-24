(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('MainCtrl', MainCtrl);

        function MainCtrl ($scope, SocketFactory) {
            var vm = this;
            var socket = SocketFactory.getSocket();
            // At first page load, get the client id from socket.io
            // store the client id for later and then send back the
            // data to socket.io to store for list update
            socket.emit('getClientId');
            socket.on('clientId', function (data) {
                $scope.clientId = data;
                var savedPerson = localStorage.getItem('settings');

                if (!savedPerson) {
                    savedPerson = {
                        name: 'No name',
                        id: $scope.clientId,
                        x: 0,
                        y: 0
                    }
                } else {
                    // otherwise, use what is in local storage
                    savedPerson = JSON.parse(savedPerson);
                    savedPerson.id = $scope.clientId;
                    savedPerson.x = 0;
                    savedPerson.y = 0;
                }

                socket.emit('user joined', savedPerson );
            });
        }
})();
