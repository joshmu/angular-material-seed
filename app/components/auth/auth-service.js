(function() {
        'use strict';

        angular.module('starterTemplate')

        .factory('Auth', function($q) {
                var auth = {};

                // undefined whenever user is not logged in
                auth.user = undefined;

                auth.login = function(user) {
                        var deferred = $q.defer();
                        // auth set to true when 'test' used in pass (development)
                        if(user.password === 'test') {
                                auth.user = user;
                                deferred.resolve('Login successful', user);
                        } else {
                                auth.user = undefined;
                                deferred.reject();
                        }
                        return deferred.promise;
                };

                auth.logout = function() {
                        var deferred = $q.defer();
                        auth.user = undefined;
                        if(!auth.user) {
                                deferred.resolve('Logged out.');
                        } else {
                                deferred.reject();
                        }
                        return deferred.promise;
                };

                return auth;
        });

})();


