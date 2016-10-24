(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('MessagesCtrl', MessagesCtrl);

        function MessagesCtrl ($scope, SocketFactory) {
            var vm = this;
            console.log('load messages');
        }
})();
