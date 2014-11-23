(function() {
'use strict';

angular.module('starterTemplate', ['ngRoute', 'ngMaterial'])

.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    // routes
    $routeProvider
        .when('/', {
            templateUrl: 'components/home/homeView.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .when('/cubes', {
            templateUrl: 'components/cubes/cubesView.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})

.controller('GlobalCtrl', function($mdSidenav, $mdToast, $mdBottomSheet) {
    this.showToast = function() {
        $mdToast.show({
            templateUrl: 'components/toast/toastView.html',
            hideDelay: 5000,
            position: 'bottom right'
        });
    };

    this.showSheet = function() {
        $mdBottomSheet.show({
            controller: 'SheetCtrl',
            controllerAs: 'sheet',
            templateUrl: 'components/sheet/sheetView.html'
        });
    };

    this.toggleSidenav = function() {
        $mdSidenav('sidenav').toggle();
    };
});

})();

(function() {
'use strict';

angular.module('starterTemplate')

.controller('HomeCtrl', function() {
    this.title = 'Welcome home.';
});
})();

(function() {
'use strict';

angular.module('starterTemplate')

.controller('SheetCtrl', function($scope, $mdBottomSheet) {
  var sheet = this;

  sheet.items = [
    { name: 'Plane', icon: 'plane' },
    { name: 'Lock', icon: 'lock' },
    { name: 'Tree', icon: 'tree' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Twitter', icon: 'twitter' },
  ];

  sheet.listItemClick = function($index) {
    var clickedItem = sheet.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };

});
})();

