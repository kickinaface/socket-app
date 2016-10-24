(function () {
    'use strict';
    angular
        .module('socket-app')
        .controller('SettingsCtrl', SettingsCtrl);

        function SettingsCtrl ($scope, $location) {
            var vm = this;


            // check to see if there is something already in storage
            if (!localStorage.getItem('settings')) {
                $scope.fnamePlaceholder = 'John';
                $scope.lnamePlaceholder = 'Doe';
                $scope.emailPlaceholder = 'jdoe@someemail.com';
            } else {
                var savedPerson = localStorage.getItem('settings');
                savedPerson = JSON.parse(savedPerson);
                var name = savedPerson.name.split(' ');
                $scope.fnamePlaceholder = name[0];
                $scope.lnamePlaceholder = name[1];
                $scope.emailPlaceholder = savedPerson.email;
            }

            $scope.changeSettings = function () {
                $('#myModal').modal('show');
            };

            $scope.saveChanges = function () {
                var newSettings = $scope.settings;
                // Send the data back into localStorage
                var preparedSettings = {
                    name: newSettings.firstName + ' ' + newSettings.lastName,
                    email: newSettings.email,
                    id: newSettings.id
                }
                preparedSettings = JSON.stringify(preparedSettings);
                localStorage.setItem('settings', preparedSettings);
                window.location = '/';
            };
        }
})();
