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

        .factory('Auth', function() {
                var auth = {};

                auth.user = {};

                auth.login = function(user) {
                        var deferred = $q.defer();
                        if(user.name === 'test' && user.password === 'test') {
                                auth.user = user;
                                defer.resolve('Login successful', user);
                        } else {
                                auth.user = {};
                                defer.reject();
                        }
                        return defer.promise;
                };

                auth.logout = function() {
                        var deferred = $q.defer();
                        auth.user = {};
                        if(!auth.user) {
                                deferred.resolve('Logged out.');
                        } else {
                                deferred.reject();
                        }
                        return deferred.promise;
                };

                return auth;
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

        .controller('LoginCtrl', function(Auth, $mdToast) {

                this.auth = Auth;

                this.user = {};

                this.login = function() {
                    this.auth.login(this.user)
                        .then(function(data, user) {
                            $mdToast.show({
                                    templateUrl: 'app/components/toast/toastView.html',
                                    hideDelay: 5000,
                                    position: 'bottom right'
                            });
                        }, function() {
                                console.log('login failed....');
                        });   
                };

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

