(function() {
    'use strict';

    function NavigationComponent($scope, $element, $location) {
        var ctrl = this;
        var toggleBtn = $element[0].children[0].children[0].children[0].children[0];
        $scope.navbarItems = [
            {
                linkName: 'Interactive',
                linkLocation: '/interactive'
            },
            {
                linkName: 'Visitors',
                linkLocation: '/visitors',
            },
            {
                linkName: 'Profile Settings',
                linkLocation: '/settings'
            },
            {
                linkName: 'Messages',
                linkLocation: '/messages'
            }
        ];

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.closeDrawer = function () {
            if ($(toggleBtn).css('display') != 'none') {
                $(toggleBtn).trigger('click');
            }
        };
    }
    angular.module('socket-app').component('navigation', {
        templateUrl: 'js/components/navigation.tpl.html',
        controller: NavigationComponent,
        bindings: {
            numMessages: '='
        }
    });
}());
