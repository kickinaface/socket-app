(function () {
    'use strict';
    describe('Controller: SettingsCtrl', function () {

        var scope, direction;

        beforeEach(module('socket-app'));

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            // localStorage = {
            //     getItem: function (lsType) {
            //         if (lsType === 'settings') {
            //             return true;
            //         }
            //     },
            //     setItem: function (lsType, something) {
            //         console.log(something);
            //         // this.getItem(lsType, something);
            //         return (lsType + something);
            //     }
            // };

            $controller('SettingsCtrl', {
                $scope: scope
            });
            console.log(scope.fnamePlaceholder);
        }));

        it('should set the default First Name', function () {
            clearStorage();
            expect(scope.fnamePlaceholder).toEqual('John');
        });

        it('should set the default Last Name', function () {
            expect(scope.lnamePlaceholder).toEqual('Doe');
        });

        it('should set the default email', function () {
            expect(scope.emailPlaceholder).toEqual('jdoe@someemail.com');
        });

        it('should set the values if localstorage is available', function () {
            setStorage();
            expect(scope.fnamePlaceholder).toEqual('Bob');
            expect(scope.lnamePlaceholder).toEqual('Bobby');
            expect(scope.emailPlaceholder).toEqual('bob@bobby.com');
        });



    });

    function setStorage() {
        localStorage.setItem('settings', '{"name":"Bob Bobby","email":"bob@bobby.com"}');
    }

    function clearStorage() {
        localStorage.clear();
    }

})();
