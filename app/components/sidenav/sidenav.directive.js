(function() {
  'use strict';

  angular.module('starterTemplate')

  .directive('sidenav', function() {
    return {
      restrtict: 'E',
      templateUrl: 'components/sidenav/sidenav.html',
      controller: 'SidenavCtrl',
      controllerAs: 'sidenav',
      bindToController: true,
      scope: {
        close: '&'
      },
      link: function(scope, elem, attrs) {
      }
    };
  });

})();