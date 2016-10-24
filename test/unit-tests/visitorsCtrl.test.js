// (function () {
//     describe('Controller: VisitorsCtrl', function () {
//
//         var ctrl, scope, socketFactory;
//
//         beforeEach(module('socket-app'));
//
//         beforeEach(inject(function ($rootScope, $controller) {
//             scope = $rootScope.$new();
//             socketFactory = {
//                 getSocket: function () {
//                     return function emit(val) {
//                         return val;
//                     }
//                 }
//             };
//             console.log(socketFactory);
//
//             //spyOn(socketFactory, 'getSocket');
//
//             ctrl = $controller('VisitorsCtrl', {
//                 $scope: scope,
//                 SocketFactory: socketFactory
//             });
//         }));
//
//         it('should have an intro title', function () {
//             console.log(ctrl);
//             //expect(vm.introTitle).toEqual('Welcome to socket-app');
//         });
//
//     });
// })();
