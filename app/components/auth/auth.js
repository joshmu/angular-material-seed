(function() {
        'use strict';

        angular.module('starterTemplate')

        .factory('Auth', function() {
                var auth = {};

                auth.user = {};

                auth.login = function(user) {
                        var deferred = $q.defer();
                        if(user.name === 'test' && user.password === 'test') {
                                auth.user = user;
                                defer.resolve('Login successful', user);
                        } else {
                                auth.user = {};
                                defer.reject();
                        }
                        return defer.promise;
                };

                auth.logout = function() {
                        var deferred = $q.defer();
                        auth.user = {};
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


