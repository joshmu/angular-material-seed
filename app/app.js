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
            .when('/shop/:productIndex', {
                templateUrl: 'shop/shop.html',
                controller: 'ShopCtrl',
                controllerAs: 'shop',
                resolve: {
                    product: function($route, Products) {
                        var productIndex = $route.current.params.productIndex;
                        return Products.get(productIndex);
                    }
                }
            })
            .when('/cubes', {
                templateUrl: 'cubes/cubes.html'
            })
            .otherwise({
                redirectTo: '/'
            });

    })

    .controller('GlobalCtrl', function(Auth, $mdToast, $mdBottomSheet, ToastPreset, $mdSidenav) {
        this.auth = Auth;

        this.showToast = function() {
            $mdToast.show(ToastPreset.locals({
                msg: 'Yo yo yo!'
            }));
        };

        this.toggleSidenav = function() {
            $mdSidenav('sidenav').toggle();
        };

        this.showSheet = function() {
            $mdBottomSheet.show({
                controller: 'SheetCtrl',
                controllerAs: 'sheet',
                templateUrl: 'components/sheet/sheet.html'
            });
        };

    });

})();
