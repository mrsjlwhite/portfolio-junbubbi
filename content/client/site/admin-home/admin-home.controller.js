(function() {
    'use strict'

    angular.module('client.crud')
        .controller('adminController', AdminController)

    AdminController.$inject = ['messages', 'blogPosts', '$log']

    function AdminController(messages, blogPosts, $log) {
        let vm = this
        vm.messages = null
        vm.blogPosts = null

        init()

        function init() {
            $log.log('oye admin')
            vm.messages = messages
            vm.blogPosts = blogPosts
            
        }
    }
})();
