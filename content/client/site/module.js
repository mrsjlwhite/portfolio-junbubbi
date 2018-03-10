/* global angular */
// ======================================Home Page==============================================
(function () {
    'use strict'

    angular.module('client.site', ['ui.router'])

    angular.module('client.site').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.home', {
                url: '/home',
                views: {
                    'content': {
                        templateUrl: 'client/site/home/home.html',
                        controller: 'homeController as hc'
                    }
                }
            })
            .state('site.project-laso', {
                url: '/project-laso-concepts',
                views: {
                    'content': {
                        templateUrl: 'client/site/project-laso/project-laso.html',
                        controller: 'projLasoController as lc'
                    }
                }
            })
            .state('site.project-israel', {
                url: '/project-viajemos-a-israel',
                views: {
                    'content': {
                        templateUrl: 'client/site/project-israel/project-israel.html',
                        controller: 'projIsraelController as ic'
                    }
                }
            })
            .state('site.lost', {
                url: '/lost',
                views: {
                    'content': {
                        templateUrl: 'client/site/404-page/lost.html',
                        controller: 'lostController as lc'
                    }
                }
            })
    }
})();