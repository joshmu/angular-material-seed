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

(function() {
        'use strict';

        angular.module('starterTemplate')

        .factory('Auth', function($q) {
                var auth = {};

                // undefined whenever user is not logged in
                auth.user = undefined; 

                auth.login = function(user) {
                        var deferred = $q.defer();
                        // auth set to true when 'test' used in pass (development)
                        if(user.password === 'test') {
                                auth.user = user;
                                deferred.resolve('Login successful', user);
                        } else {
                                auth.user = {};
                                deferred.reject();
                        }
                        return deferred.promise;
                };

                auth.logout = function() {
                        var deferred = $q.defer();
                        auth.user = undefined;
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

        .controller('LoginCtrl', function(Auth, $mdToast, $location) {

                this.auth = Auth;

                this.user = {};

                this.login = function() {
                    this.auth.login(this.user)
                        .then(function(data, user) {
                            $mdToast.show({
                                    templateUrl: 'components/toast/toastView.html',
                                    hideDelay: 5000,
                                    position: 'bottom right',
                                    controller: 'ToastCtrl',
                                    controllerAs: 'toast',
                                    locals: {
                                            msg: data
                                    }
                            });
                        }, function() {
                                console.log('login failed....');
                        })
                        .then(function() {
                                $location.path('#!/home');
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


(function() {
        'use strict';

        angular.module('starterTemplate')

        .controller('ToastCtrl', function(msg) {
                this.msg = msg;
        });
})();
