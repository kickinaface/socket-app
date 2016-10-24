(function () {
    'use strict';
    describe('Controller: SettingsCtrl', function () {

        var scope, direction, stored;

        beforeEach(module('socket-app'));

        beforeEach(inject(function ($rootScope, $controller, $q) {
            stored = {};
            scope = $rootScope.$new();

            // spyOn(localStorage, 'getItem').andCallFake(function (key) {
            //     return stored[key];
            // });

            $controller('SettingsCtrl', {
                $scope: scope
            });
        }));

        it('should set the default First Name', function () {
            expect(scope.fnamePlaceholder).toEqual('John');
        });

        it('should set the default Last Name', function () {
            expect(scope.lnamePlaceholder).toEqual('Doe');
        });

        it('should set the default email', function () {
            expect(scope.emailPlaceholder).toEqual('jdoe@someemail.com');
        });

        it('should set the values if localstorage is available', function () {


        });

    });

})();
