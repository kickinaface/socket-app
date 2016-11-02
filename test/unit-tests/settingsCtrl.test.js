(function () {
    'use strict';
    describe('Controller: SettingsCtrl "no local storage"', function () {

        var scope, direction;

        beforeEach(module('socket-app'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            $controller('SettingsCtrl', {
                $scope: scope
            });
            clearStorage();
            console.log(scope.fnamePlaceholder);
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

        // it('should set the values if localstorage is available', function () {
        //     setStorage();
        //     expect(scope.fnamePlaceholder).toEqual('Bob');
        //     expect(scope.lnamePlaceholder).toEqual('Bobby');
        //     expect(scope.emailPlaceholder).toEqual('bob@bobby.com');
        // });
    });

    describe('Controller: SettingsCtrl, "Local storage used"', function () {
        var scope, direction;

        beforeEach(module('socket-app'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            $controller('SettingsCtrl', {
                $scope: scope
            });
            clearStorage();
            console.log(scope.fnamePlaceholder);
        }));

        it('should show the modal to confirm changes', function () {
            scope.changeSettings();
        });

        it('should save the changes when confirmed', function () {
            //clearStorage();
            scope.settings = {
                firstName: 'Kayla',
                lastName: 'Evans',
                email: 'youremail@email.com',
                id: 'somefakeid13242424'
            }
            scope.saveChanges();
            var newSettings = localStorage.getItem('settings');
            newSettings = JSON.parse(newSettings);
            console.log(newSettings.name);
            expect(newSettings.name).toEqual('Kayla Evans');
        });
    });

    function setStorage() {
        localStorage.setItem('settings', '{"name":"Bob Bobby","email":"bob@bobby.com"}');
    }

    function clearStorage() {
        localStorage.clear();
    }

})();
