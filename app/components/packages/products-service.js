(function() {
    'use strict';

    angular.module('starterTemplate')

    .factory('Products', function($q) {
        var p = {};

        var digitalPosters = {
            title: 'Digital Posters'
        };

        var eventranet = {
            title: 'Eventranet'
        };

        var speakersPrep = {
            title: 'Speakers Prep'
        };

        var products = [digitalPosters, eventranet, speakersPrep];

        /*==========  public methods  ==========*/
        p.all = function() {
          return products;
        };

        p.get = function(productIndex) {
            var deferred = $q.defer();
            deferred.resolve(products[productIndex]);
            return deferred.promise;
        };

        return p;
    });

})();
