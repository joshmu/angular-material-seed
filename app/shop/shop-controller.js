(function() {
  'use strict';

  angular.module('starterTemplate')

  .controller('ShopCtrl', function(product) {
    this.product = product;
  });

})();