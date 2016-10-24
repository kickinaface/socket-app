(function () {
    'use strict';
    describe('Controller: MainCtrl', function () {

        var scope, savedPerson, socketFactory, clientId, fakeClientId;

        beforeEach(module('socket-app'));

        beforeEach(inject(function ($rootScope, $controller, $q) {
            scope = $rootScope.$new();
            fakeClientId = '1928282jsjslfj3';

            socketFactory = {
                getSocket: function () {
                    return {
                        io: function () {},
                        emit: function (type, data) {
                            console.log(type);
                            console.log(data);
                            if (type === 'getClientId') {
                                scope.clientId = fakeClientId;
                            }

                        },
                        on: function (type, data) {
                            if (type === 'clientId') {
                                //console.log(data);
                                clientId = data.id;
                            }
                        }
                    }
                }
            }

            //spyOn(socketFactory, 'getSocket');
            $controller('MainCtrl', {
                $scope: scope,
                SocketFactory: socketFactory
            });

        }));

        it('should get the clientId', function () {
            console.log(scope.clientId);
            //expect(clientId).toEqual('fakeID1238381');
        });



    });

})();
