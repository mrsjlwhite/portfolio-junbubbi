//======================================Home Page==============================================
(function() {
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
                },
                resolve: {
                    blogPosts: getBlogPosts
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

    getBlogPosts.$inject = ['blogPostService']

    function getBlogPosts(blogPostService) {
        return blogPostService.readAll()
            .then(data => data.items)
    }
})();
