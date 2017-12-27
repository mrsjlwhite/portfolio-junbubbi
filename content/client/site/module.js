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
    }

    getBlogPosts.$inject = ['blogPostService']

    function getBlogPosts(blogPostService) {
        return blogPostService.readAll()
            .then(data => data.items)
    }
})();
//======================================Admin View==============================================
(function() {
    'use strict'

    angular
        .module('client.site').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.admin', {
                url: '/admin',
                views: {
                    'admin': {
                        templateUrl: 'client/site/admin-home/admin-home.html',
                        controller: 'adminController as ac'
                    }
                },
                resolve: {
                    messages: getMessages,
                    blogPosts: getBlogPosts
                }
            })
    }

    getMessages.$inject = ['messageService']
    getBlogPosts.$inject = ['blogPostService']

    function getMessages(messageService) {
        return messageService.readAll()
            .then(data => data.items)
    }

    function getBlogPosts(blogPostService) {
        return blogPostService.readAll()
            .then(data => data.items)
    }

})();
