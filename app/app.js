(function() {
'use strict';

angular.module('starterTemplate', ['ngRoute', 'ngMaterial'])

.config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    // routes
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .when('/login', {
            templateUrl: 'login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
        })
        .when('/cubes', {
            templateUrl: 'cubes/cubes.html'
        })
        .otherwise({
            redirectTo: '/'
        });

})

.controller('GlobalCtrl', function(Auth, $mdSidenav, $mdToast, $mdBottomSheet, ToastPreset) {
        this.auth = Auth;

        this.logout = function() {
            this.auth.logout()
                .then(function(data) {
                        console.log(data);
                }, function() {
                    console.log('logout failed...');
                });
        };

    this.showToast = function() {
        $mdToast.show(ToastPreset.locals({msg: 'Yo yo yo!'}));
    };

    this.showSheet = function() {
        $mdBottomSheet.show({
            controller: 'SheetCtrl',
            controllerAs: 'sheet',
            templateUrl: 'components/sheet/sheet.html'
        });
    };

    this.toggleSidenav = function() {
        $mdSidenav('sidenav').toggle();
    };
});

})();
