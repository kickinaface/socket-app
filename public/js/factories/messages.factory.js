/*jshint bitwise: false*/
(function () {
    'use strict';
    angular
        .module('socket-app')
        .factory('MessagesFactory', function MessagesFactory(SocketFactory) {

            var socket = SocketFactory.getSocket();
            var clientToSendTo;

            function openMessageDialog(id) {
                clientToSendTo = id;
                $('#messageDialog').modal('show');
            };

            function closeMessageDialog() {
                $('#messageDialog').modal('hide');
            }

            function sendMessageTo(message, fromId) {
                var savedPerson = localStorage.getItem('settings');
                var preparedMessage = {};

                if (!savedPerson) {
                    savedPerson = {
                        name: 'No name'
                    }
                } else {
                    savedPerson = JSON.parse(savedPerson);
                }

                preparedMessage = {
                    to: clientToSendTo,
                    from: fromId,
                    fromName: savedPerson.name,
                    message: message
                }

                socket.emit('new message', preparedMessage);
                closeMessageDialog();
            };
            return {
                openMessageDialog: openMessageDialog,
                sendMessageTo: sendMessageTo
            };

        });
})();
