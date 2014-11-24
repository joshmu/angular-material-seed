(function() {
  'use strict';

  angular.module('starterTemplate')

  .directive('sidenav', function() {
    return {
      restrtict: 'E',
      scope: {
        close: '&'
      },
      templateUrl: 'components/sidenav/sidenav.html',
      link: function(scope, elem, attrs) {
      }
    };
  });

})();