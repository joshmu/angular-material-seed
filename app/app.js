'use strict';

angular.module('starterTemplate', ['ngRoute', 'ngMaterial'])

.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    // routes
    $routeProvider
        .when('/', {
            templateUrl: 'home/homeView.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .when('/cubes', {
            templateUrl: 'cubes/cubesView.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})

.controller('GlobalCtrl', function($mdSidenav, $mdToast, $mdBottomSheet) {
    this.showToast = function() {
        $mdToast.show({
            templateUrl: 'toast/toastView.html',
            hideDelay: 5000,
            position: 'bottom right'
        });
    };

    this.showSheet = function() {
        $mdBottomSheet.show({
            controller: 'SheetCtrl',
            controllerAs: 'sheet',
            templateUrl: 'sheet/sheetView.html'
        });
    };

    this.toggleSidenav = function() {
        $mdSidenav('sidenav').toggle();
    };
});
