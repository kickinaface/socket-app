/*jshint bitwise: false*/
(function () {
    'use strict';
    angular
        .module('socket-app')
        .factory('SocketFactory', function SocketFactory() {
            function getSocket() {
                return io();
            }
            return {
                getSocket: getSocket
            };

        });
})();
