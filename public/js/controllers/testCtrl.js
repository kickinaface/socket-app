(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('TestCtrl', TestCtrl);

        function TestCtrl ($scope) {
            var vm = this;
            vm.introTitle = 'Welcome to socket-app';
            vm.subHeaderText = 'Use this document as a way to quickly start any new project.';
            vm.list = [
                {
                    from: 'Jason Bob',
                    message: 'Hello this is my message.'
                },
                {
                    from: 'Sherry Terry',
                    message: 'Hey Jason! Thanks for your message. Please leave more comments.'
                },
                {
                    from: 'Billy Leaf',
                    message: 'I dont know what to say in my message.'
                },
                {
                    from: 'Nita Jill',
                    message: 'Hey there folks, here is my message.'
                }

            ];

        }
})();