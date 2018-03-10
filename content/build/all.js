'use strict';

/* global angular */
/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#application-structure */

(function () {
    'use strict';

    angular.module('client', [
    // 3rd party
    'ui.router', 'ui.bootstrap',

    // base / common
    'client.layout', 'client._common',

    // services
    'client.authentication', 'client.services',

    // views /controllers
    'client.crud', 'client.site']);

    angular.module('client').config(RouteConfig).run(StateErrorHandler);

    StateErrorHandler.$inject = ['$rootScope', '$log'];

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', function (info) {
            return $log.log(info);
        });
    }

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/lost');
        $locationProvider.html5Mode(true);
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.authentication', ['ui.router']).config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('app.register', {
            url: '/register',
            views: {
                'content@app': {
                    templateUrl: 'client/authentication/views/register.html',
                    controller: 'authenticationController as login'
                }
            }
        }).state('app.login', {
            url: '/login',
            views: {
                'content@app': {
                    templateUrl: 'client/authentication/views/login.html',
                    controller: 'authenticationController as login'
                }
            }
        });
    }
})();
'use strict';

/* global angular */
(function () {
	'use strict';

	angular.module('client.constants', []);
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.crud', []);
})();

// , ['ui.router'])

// angular.module('client.crud').config(RouteConfig)

// RouteConfig.$inject = ['$stateProvider']

// function RouteConfig($stateProvider) {
//     $stateProvider
//         .state
'use strict';

/* global angular */
(function () {
	'use strict';

	angular.module('client.filters', []);
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.layout', ['ui.router']);

    angular.module('client.layout').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site', {
            views: {
                root: {
                    templateUrl: 'client/layout/layout.tpl.html'
                }
            }
        });
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.services', []);
})();
'use strict';

/* global angular */
// ======================================Home Page==============================================
(function () {
    'use strict';

    angular.module('client.site', ['ui.router']);

    angular.module('client.site').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider.state('site.home', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'client/site/home/home.html',
                    controller: 'homeController as hc'
                }
            }
        }).state('site.project-laso', {
            url: '/project-laso-concepts',
            views: {
                'content': {
                    templateUrl: 'client/site/project-laso/project-laso.html',
                    controller: 'projLasoController as lc'
                }
            }
        }).state('site.project-israel', {
            url: '/project-viajemos-a-israel',
            views: {
                'content': {
                    templateUrl: 'client/site/project-israel/project-israel.html',
                    controller: 'projIsraelController as ic'
                }
            }
        }).state('site.lost', {
            url: '/lost',
            views: {
                'content': {
                    templateUrl: 'client/site/404-page/lost.html',
                    controller: 'lostController as lc'
                }
            }
        });
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client._common', []);
})();
/* global $ angular */
'use strict';

$(function () {
    // moment.js default language
    // moment.locale('en')

    angular.bootstrap(document, ['client'], { strictDi: true });
});
'use strict';

(function () {
    'use strict';

    angular.module('client.services');
    // .factory('blogPostService', BlogPostService)

    // BlogPostService.$inject = ['$http', '$q']

    // function BlogPostService($http, $q) {
    //     return {
    //         readAll: readAll,
    //         readById: readById,
    //         create: create,
    //         update: update,
    //         delete: _delete
    //     }

    //     function readAll() {
    //         return $http.get('/api/myBlogPosts')
    //         .then(dateChange => convertAllDates(dateChange))
    //         .catch(onError)
    //     }

    //     function readById(id) {
    //         return $http.get(`/api/myBlogPosts/${id}`)
    //         .then(dateChange => convertAllDates(dateChange))
    //         .catch(onError)
    //     }

    //     function create(data) {
    //         return $http.post('/api/myBlogPosts', data)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function update(data) {
    //         return $http.put(`/api/myBlogPosts/${data._id}`, data)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function _delete(id) {
    //         return $http.get(`/api/myBlogPosts/${id}`)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function xhrSuccess(response) {
    //         return response.data
    //     }

    //     function onError(error) {
    //         console.log(error.data)
    //         return $q.reject(error.data)
    //     }

    //     function convertAllDates(dateChange) {
    //         for (let x = 0; x < dateChange.data.items.length; x++) {
    //             dateChange.data.items[x].published = new Date(dateChange.data.items[x].published)     
    //         }
    //         return dateChange.data
    //     }

    //     function convertDate(dateChange) {
    //         dateChange.data.item.published = new Date(dateChange.data.item.published)
    //         return dateChange.data
    //     }
    // }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.services');
    // .factory('blogCategoryServices', BlogCategoryService)

    // BlogCategoryService.$inject = ['$http', '$q']

    // function BlogCategoryService($http, $q) {
    //     return {
    //         readAll: readAll,
    //         readById: readById,
    //         create: create,
    //         update: update,
    //         delete: _delete
    //     }

    //     function readAll() {
    //         return $http.get('/api/blogCategories')
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function readById(id) {
    //         return $http.get(`/api/blogCategories/${id}`)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function create(data) {
    //         return $http.post('/api/blogCategories', data)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function update(data) {
    //         return $http.put(`/api/blogCategories/${data._id}`, data)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function _delete(id) {
    //         return $http.get(`/api/blogCategories/${id}`)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function xhrSuccess(response) {
    //         return response.data
    //     }

    //     function onError(error) {
    //         console.log(error.data)
    //         return $q.reject(error.data)
    //     }
    // }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.services');
    // .factory('messageService', MessageService)

    // MessageService.$inject = ['$http', '$q']

    // function MessageService($http, $q) {
    //     return {
    //         readAll: readAll,
    //         readById: readById,
    //         create: create,
    //         update: update,
    //         delete: _delete
    //     }

    //     function readAll() {
    //         return $http.get('/api/myMessages')
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function readById(id) {
    //         return $http.get(`/api/myMessages/${id}`)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function create(data) {
    //         return $http.post('/api/myMessages', data)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function update(data) {
    //         return $http.put(`/api/myMessages/${data._id}`, data)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function _delete(id) {
    //         return $http.delete(`/api/myMessages/${id}`)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function xhrSuccess(response) {
    //         return response.data
    //     }

    //     function onError(error) {
    //         console.log(error.data)
    //         return $q.reject(error.data)
    //     }
    // }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.authentication').controller('authenticationController', AuthenticationController);

    AuthenticationController.$inject = ['authenticationService', '$controller'];

    function AuthenticationController(authenticationService, $controller) {
        'use strict';

        var vm = this;
        $controller('BaseController', { vm: vm });

        vm.user = {};
        vm.register = _register;
        vm.signin = _signin;

        function _register() {
            authenticationService.register(vm.user).then(function (data) {
                vm.user = null;
                vm.alert = data.alert;
            }).catch(function (err) {
                return console.log(err);
            });
        }

        function signin() {
            authenticationService.signin(vm.user).then(function (data) {
                vm.user = null;
                vm.alert = data.alert;
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.crud').controller('projIsraelController', ProjIsraelController);

    ProjIsraelController.$inject = ['$log'];

    function ProjIsraelController($log) {
        // let vm = this

        init();

        function init() {
            $log.log("You've reached the project viajemos a israel page.");
        }
    }
})();
'use strict';

/* global angular */

(function () {
    'use strict';

    angular.module('client.authentication').factory('authenticationService', AuthenticationServiceFactory);

    AuthenticationServiceFactory.$inject = ['$http', '$q', 'baseService'];

    function AuthenticationServiceFactory($http, $q, baseService) {
        var authenticationService = Object.create(baseService);

        authenticationService.register = _register;
        authenticationService.signin = _signin;

        return authenticationService;

        function _register(userData) {
            return $http.post('/api/users/register', userData).then(function (response) {
                return response.data;
            }).catch(function (err) {
                console.log(err.data);
                return $q.reject(err.data);
            });
        }

        function signin(userData) {
            return $http.post('/api/users/login', userData).then(function (response) {
                return response.data;
            }).catch(function (err) {
                console.log(err.data);
                return $q.reject(err.data);
            });
        }
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.site').controller('homeController', HomeController);

    HomeController.$inject = ['$http', '$log'];

    function HomeController($http, $log) {
        var vm = this;

        init();

        function init() {
            $log.log('hola - you be home');
        }
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.site').controller('projLasoController', ProjLasoController);

    ProjLasoController.$inject = ['$log'];

    function ProjLasoController($log) {
        // let vm = this

        init();

        function init() {
            $log.log("You've reached the project laso page.");
        }
    }
})();
'use strict';

(function () {
    'use strict';

    angular.module('client.site').controller('lostController', LostController);

    LostController.$inject = ['$log'];

    function LostController($log) {
        var vm = this;

        init();

        function init() {
            $log.log("You've reached the 404 lost page.");
        }
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client.site').controller('projIsraelController', ProjIsraelController);

    ProjIsraelController.$inject = ['$log'];

    function ProjIsraelController($log) {
        // let vm = this

        init();

        function init() {
            $log.log("You've reached the project viajemos a israel page.");
        }
    }
})();
'use strict';

// Description: This will inject an instance of this controller into the scope of the child controller
// Usage: Psuedo inheritance in child controller, $controller('BaseController', { vm: vm });
// Refs: http://jasonwatmore.com/post/2014/03/25/angularjs-a-better-way-to-implement-a-base-controller
/* global angular */
(function () {
    'use strict';

    angular.module('client._common').controller('BaseController', BaseController);

    BaseController.$inject = ['$document', '$log', 'vm'];

    function BaseController($document, $log, vm) {
        vm.closeAlert = function () {
            vm.alert = null;
        };

        vm.$document = $document;
        vm.$log = $log;
    }
})();
'use strict';

/* global angular */
(function () {
    'use strict';

    angular.module('client._common').factory('baseService', BaseServiceFactory);

    BaseServiceFactory.$inject = ['$http'];

    function BaseServiceFactory($http) {
        return {
            checkBaseMethod: function checkBaseMethod() {
                console.log('this is from the baseService');
            }
        };
    }
})();