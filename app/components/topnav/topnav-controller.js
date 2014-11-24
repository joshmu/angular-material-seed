(function() {
    'use strict';

    angular.module('starterTemplate')

    .controller('TopnavCtrl', function(Auth, $mdSidenav, $location) {
        this.auth = Auth;

        this.logout = function() {
            this.auth.logout()
                .then(function(data) {
                    console.log(data);
                }, function() {
                    console.log('logout failed...');
                });
        };

        this.currentPath = function() {
            return $location.path();
        };
    });

})();
