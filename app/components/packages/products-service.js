(function() {
    'use strict';

    angular.module('starterTemplate')

    .factory('Products', function($q) {
        var p = {};

        var digitalPosters = {
            title: 'Digital Posters',
            description: 'Looking for a new way to open up your event program? Want to offer something interactive to your delegates? Ready to break new ground in program formatting? Take something old and make it new again and you have Digitalposter.com.au.',
            theme: 'deep-purple'
        };

        var eventranet = {
            title: 'Eventranet',
            description: 'As the name suggests, Eventranet is designed to bring all related technology driven components of an event together to give users one direct point of access. Not unlike an organisations internal intranet, this product is an events intranet and onsite interactive service for delegates to access all their event digital needs.',
            theme: 'blue'
        };

        var speakersPrep = {
            title: 'Speakers Prep',
            description: 'Speakersprep.com, hosted and run by Lucien Mark, is suited to speaker and presentation management of an event. Its purpose is to remove the manual process of presentation upload and editing on site.',
            theme: 'green'
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
