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
                socket.emit('new message', {
                    to: clientToSendTo,
                    from: fromId,
                    message: message
                });
                closeMessageDialog();
            };
            return {
                openMessageDialog: openMessageDialog,
                sendMessageTo: sendMessageTo
            };

        });
})();
