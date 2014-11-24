(function() {
        'use strict';

        angular.module('starterTemplate')

        .controller('LoginCtrl', function(Auth, $mdToast, $location, ToastPreset) {
                var loginCtrl = this;

                loginCtrl.auth = Auth;

                loginCtrl.user = undefined;

                loginCtrl.login = function() {
                    loginCtrl.auth.login(loginCtrl.user)
                        .then(function(data, user) {
                            $mdToast.show(ToastPreset.locals({msg: data}));
                            $location.path('#!/home');
                        }, function() {
                            $mdToast.show(ToastPreset.locals({msg: 'login failed...'}));
                                loginCtrl.user = undefined;
                        });
                };

        });
})();
