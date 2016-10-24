(function () {
    'use strict';
    describe('Controller: InteractiveCtrl', function () {

        var scope, direction;

        beforeEach(module('socket-app'));

        beforeEach(inject(function ($rootScope, $controller, $q) {
            var defer = $q.defer();
            scope = $rootScope.$new();

            scope.clientId = 'fakeId12344';
            $controller('InteractiveCtrl', {
                $scope: scope,
                SocketFactory: {
                    getSocket: function () {
                        return {
                            io: function () {},
                            emit: function (type, data) {
                                if (type === 'getUsers') {

                                    //console.log('getUsers', type, data);
                                } else if (type === 'changeUserDirection') {
                                    direction = data;
                                }

                            },
                            on: function (type, data) {
                                var defer = $q.defer();
                                if (type === 'updateUsers') {
                                    scope.users = [{
                                        email: 'chris@ccarteronline.com',
                                        name: 'Chris Carter',
                                        id: '9KHLVYeWLINp7JBrAAAE'
                                    }];
                                }
                            }
                        }
                    }
                }
            });

        }));

        it('should update the user', function () {
            expect(scope.users).toEqual([{
                email: 'chris@ccarteronline.com',
                name: 'Chris Carter',
                id: '9KHLVYeWLINp7JBrAAAE'
            }]);
        });

        it('should change directions with the scope method', function () {
            // Mock out if an event triggered the moveDirection method
            scope.moveDirection('left');
            expect(direction.x).toEqual(-10);
            expect(direction.y).toEqual(0);

            scope.moveDirection('up');
            expect(direction.x).toEqual(0);
            expect(direction.y).toEqual(-10);

            scope.moveDirection('down');
            expect(direction.x).toEqual(0);
            expect(direction.y).toEqual(10);

            scope.moveDirection('right');
            expect(direction.x).toEqual(10);
            expect(direction.y).toEqual(0);
        });

        it('should change directions with keyboard events', function () {
            // simulate a keyboard press then test the direction change
            simulateKeyPress(38);
            expect(direction.x).toEqual(0);
            expect(direction.y).toEqual(-10);

            simulateKeyPress(40);
            expect(direction.x).toEqual(0);
            expect(direction.y).toEqual(10);

            simulateKeyPress(37);
            expect(direction.x).toEqual(-10);
            expect(direction.y).toEqual(0);

            simulateKeyPress(39);
            expect(direction.x).toEqual(10);
            expect(direction.y).toEqual(0);

        });

    });

    function simulateKeyPress(keynum) {
        var e = $.Event('keydown');
        e.which = keynum;
        $('body').trigger(e);
    }
})();
