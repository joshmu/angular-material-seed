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
        .when('/login', {
            templateUrl: 'components/login/loginView.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
        })
        .when('/cubes', {
            templateUrl: 'components/cubes/cubesView.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})

.controller('GlobalCtrl', function(Auth, $mdSidenav, $mdToast, $mdBottomSheet) {
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
        $mdToast.show({
            templateUrl: 'components/toast/toastView.html',
            hideDelay: 5000,
            position: 'bottom right',
            controller: 'ToastCtrl',
            controllerAs: 'toast',
            locals: {
                msg: 'Hello there!'
            }
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
