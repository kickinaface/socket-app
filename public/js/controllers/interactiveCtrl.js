(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('InteractiveCtrl', InteractiveCtrl);

        function InteractiveCtrl ($scope, SocketFactory, MessagesFactory) {
            var vm = this;
            var socket = SocketFactory.getSocket();
            $scope.myUserName = '';
            $scope.chatMessage = '';
            $scope.chatMessages = [];
            socket.emit('getUsers');
            socket.on('updateUsers', function (users) {
                $scope.users = users.users;
                $scope.$apply();
                if ($scope.myUserName == '') {
                    setMyUserName($scope.users);
                }
            });
            socket.on('chatMessageReceived', function(data) {
                $scope.chatMessages.push(data);
                $scope.$apply();
            });

            $scope.sendChatMessage = function() {
                var newMessage = {
                    chatMessage: $scope.chatMessage,
                    from: $scope.myUserName
                }
                socket.emit('sendChatMessage', newMessage);
                $scope.chatMessage = '';
            }

            $scope.moveDirection = function (direction) {
                if (direction === 'left') {
                    socket.emit('changeUserDirection', {
                        id: $scope.clientId,
                        x: -10,
                        y: 0
                    });
                } else if (direction === 'up') {
                    socket.emit('changeUserDirection', {
                        id: $scope.clientId,
                        x: 0,
                        y: -10
                    });
                } else if (direction === 'down') {
                    socket.emit('changeUserDirection', {
                        id: $scope.clientId,
                        x: 0,
                        y: 10
                    });
                } else if (direction === 'right') {
                    socket.emit('changeUserDirection', {
                        id: $scope.clientId,
                        x: 10,
                        y: 0
                    });
                }
            };

            // Keyboard events
            $('body').keydown(function (e) {
                if (e.which === 38) {
                    $scope.moveDirection('up');
                } else if (e.which === 40) {
                    $scope.moveDirection('down');
                } else if (e.which === 37) {
                    $scope.moveDirection('left');
                } else if (e.which === 39) {
                    $scope.moveDirection('right');
                }
            });

            // Bring up message dialog
            $scope.sendMessage = function (id) {
                MessagesFactory.openMessageDialog(id);
            }

            function setMyUserName(users) {
                for(var i in users) {
                    if(users[i].id == $scope.clientId) {
                        $scope.myUserName = users[i].name;
                    }
                }
            }
        }
})();
