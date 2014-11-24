(function() {
        'use strict';

        angular.module('starterTemplate')

        .controller('LoginCtrl', function(Auth, $mdToast, $location) {
                var loginCtrl = this;

                loginCtrl.auth = Auth;

                loginCtrl.user = undefined;

                loginCtrl.login = function() {
                    loginCtrl.auth.login(loginCtrl.user)
                        .then(function(data, user) {
                            $mdToast.show({
                                    templateUrl: 'components/toast/toast.html',
                                    hideDelay: 5000,
                                    position: 'bottom right',
                                    controller: 'ToastCtrl',
                                    controllerAs: 'toast',
                                    locals: {
                                            msg: data
                                    }
                            });
                        }, function() {
                                console.log('login failed....');
                                loginCtrl.user = undefined;
                        })
                        .then(function() {
                                $location.path('#!/home');
                        });
                };

        });
})();
