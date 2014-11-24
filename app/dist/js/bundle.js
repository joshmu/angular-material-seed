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

        .controller('LoginCtrl', function(Auth, $mdToast, $location, ToastPreset) {
                var loginCtrl = this;

                loginCtrl.auth = Auth;

                loginCtrl.user = undefined;

                loginCtrl.login = function() {
                    loginCtrl.auth.login(loginCtrl.user)
                        .then(function(data, user) {
                            $mdToast.show(ToastPreset.locals({msg: data}));
                            $location.path('#!/home');
                        }, function() {
                            $mdToast.show(ToastPreset.locals({msg: 'login failed...'}));
                                loginCtrl.user = undefined;
                        });
                };

        });
})();

(function() {
  'use strict';

  angular.module('starterTemplate')

  .controller('ShopCtrl', function(product) {
    this.product = product;
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
                                auth.user = undefined;
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

    .factory('Products', function($q) {
        var p = {};

        var digitalPosters = {
            title: 'Digital Posters'
        };

        var eventranet = {
            title: 'Eventranet'
        };

        var speakersPrep = {
            title: 'Speakers Prep'
        };

        var products = [digitalPosters, eventranet, speakersPrep];

        /*==========  public methods  ==========*/
        p.all = function() {
          return products;
        };

        p.get = function(productIndex) {
            var deferred = $q.defer();
            deferred.resolve(products[productIndex]);
            return deferred.promise;
        };

        return p;
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

  .controller('SidenavCtrl', function(Products) {

    this.products = Products.all();

  });

})();
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
(function() {
        'use strict';

        angular.module('starterTemplate')

        .controller('ToastCtrl', function(msg) {
                this.msg = msg;
        });
})();

(function() {
    'use strict';

    angular.module('starterTemplate')

    .factory('ToastPreset', function($mdToast) {
        var preset = {};
        preset.template = $mdToast.build()
            .templateUrl('components/toast/toast.html')
            .hideDelay(5000)
            .position('bottom right')
            .controller('ToastCtrl')
            .controllerAs('toast');

            //helper function to add locals key
        preset.locals = function(obj) {
            this.template._options.locals = obj;
            return this.template;
        };

        return preset;
    });

})();

(function() {
    'use strict';

    angular.module('starterTemplate')

    .controller('TopnavCtrl', function(Auth, $mdSidenav, $location) {
        this.auth = Auth;

        this.logout = function() {
            this.auth.logout()
                .then(function(data) {
                    console.log(data);
                }, function() {
                    console.log('logout failed...');
                });
        };

        this.currentPath = function() {
            return $location.path();
        };
    });

})();

(function() {
  'use strict';

  angular.module('starterTemplate')

  .directive('topnav', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/topnav/topnav.html',
      controller: 'TopnavCtrl',
      controllerAs: 'topnav',
      bindToController: true,
      scope: {
        openSidenav: '&'
      },
      link: function(scope, elem, attrs) {
      }
    };
  });

})();