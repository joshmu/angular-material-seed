(function() {
        'use strict';

        angular.module('starterTemplate')

        .controller('LoginCtrl', function(Auth, $mdToast, $location) {

                this.auth = Auth;

                this.user = {};

                this.login = function() {
                    this.auth.login(this.user)
                        .then(function(data, user) {
                            $mdToast.show({
                                    templateUrl: 'components/toast/toastView.html',
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
                        })
                        .then(function() {
                                $location.path('#!/home');
                        });   
                };

        });
})();
