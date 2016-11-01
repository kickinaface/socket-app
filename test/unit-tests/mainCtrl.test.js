(function () {
    'use strict';
    describe('Controller: MainCtrl', function () {

        var scope, socketFactory, fakeClientId, mockedMessages, socket;

        beforeEach(module('socket-app'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            fakeClientId = '1928282jsjslfj3';
            mockedMessages = [
                {
                    from: 'RznxgbK-_BDhRMowAAAJ',
                    fromName: 'No name',
                    message: 'This is the test message',
                    to: 'EmV-3fFXeO6EbBQqAAAG'
                },
                {
                    from: 'Ku2PCIVlWmsIj7cRAAAP',
                    fromName: 'John Doe',
                    message: 'Hello message from John',
                    to: 'EmV-3fFXeO6EbBQqAAAG'
                }
            ];

            socketFactory = {
                getSocket: function () {
                    return {
                        io: function () {},
                        emit: function (type, data) {
                            if (type === 'getClientId') {
                                this.on('clientId', fakeClientId);
                            } else if (type === 'get messages') {
                                this.on('get messages', data);
                            }

                        },
                        on: function (type, data) {
                            if (type === 'clientId') {
                                scope.clientId = data;
                            } else if (type === 'get messages') {
                                scope.messages = data;
                            }
                        }
                    }
                }
            };

            socket = socketFactory.getSocket();

            $controller('MainCtrl', {
                $scope: scope,
                SocketFactory: socketFactory,
                socket: socket
            });

        }));

        it('should get the clientId', function () {
            socket.emit('getClientId', fakeClientId);
            expect(scope.clientId).toEqual(fakeClientId);
        });

        it('should get the messages', function () {
            socket.emit('get messages', mockedMessages);
            expect(scope.messages).toEqual(mockedMessages);
        });

    });

})();
