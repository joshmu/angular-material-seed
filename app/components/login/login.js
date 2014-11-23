(function() {
        'use strict';

        angular.module('starterTemplate')

        .controller('LoginCtrl', function(Auth, $mdToast) {

                this.auth = Auth;

                this.user = {};

                this.login = function() {
                    this.auth.login(this.user)
                        .then(function(data, user) {
                            $mdToast.show({
                                    templateUrl: 'app/components/toast/toastView.html',
                                    hideDelay: 5000,
                                    position: 'bottom right'
                            });
                        }, function() {
                                console.log('login failed....');
                        });   
                };

        });
})();
