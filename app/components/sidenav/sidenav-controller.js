(function() {
  'use strict';

  angular.module('starterTemplate')

  .controller('SidenavCtrl', function(Products) {

    this.products = Products.all();

  });

})();