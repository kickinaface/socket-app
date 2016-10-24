(function () {
    'use strict';
    describe('Controller: HomeCtrl', function () {

        var scope, vm;

        beforeEach(module('socket-app'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            vm = $controller('HomeCtrl', {
                $scope: scope
            });
        }));

        it('should have an intro title', function () {
            expect(scope.introTitle).toEqual('Welcome');
        });

        it('should have a sub header text', function () {
            expect(scope.subHeaderText).toEqual('Click on the menu items to exlplore.');
        });

    });
})();
