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
