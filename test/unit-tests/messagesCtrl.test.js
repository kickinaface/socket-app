(function () {
    'use strict';
    describe('Controller: MessagesCtrl', function () {

        var scope, vm, openModal, toId, message, clientId;

        beforeEach(module('socket-app'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            $controller('MessagesCtrl', {
                $scope: scope,
                MessagesFactory: {
                    openMessageDialog: function (id) {
                        openModal = true;
                        toId = id;
                    },
                    sendMessageTo: function (msg, id) {
                        message = msg;
                        clientId = id;
                    }
                }
            });
        }));

        it('should open the "MessagesFactory" modal', function () {
            scope.sendMessage('fakeId12344');
            expect(openModal).toEqual(true);
            expect(toId).toEqual('fakeId12344');
        });

        it('should submit a message to the "MessagesFactory"', function () {
            scope.messageform = {
                message: 'This is my message'
            };
            scope.clientId = 'fakeId12344';
            scope.submitSendMessage(scope.messageform.message, scope.clientId);

            expect(scope.messageform.message).toEqual(message);
            expect(scope.clientId).toEqual(clientId);
        });

        it('should be able to reset the text area', function () {
            scope.messageform = {
                message: 'This is my message'
            };
            scope.resetTextArea();
            expect(scope.messageform.message).toEqual('');
        });

    });
})();
