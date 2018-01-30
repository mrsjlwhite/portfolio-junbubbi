(function () {
    'use strict'

    angular.module('client.site')
        .controller('homeController', HomeController)

    HomeController.$inject = ['messageService', 'blogPosts', '$http', '$log']

    function HomeController(messageService, blogPosts, $http, $log) {
        let vm = this

        // from previous blog implementation
        vm.blogPosts = null
        vm.leftPost = null
        vm.rightPost = null

        // from previous form
        vm.formData = null
        vm.submitMessage = _submitMessage

        init()

        function init() {
            $log.log('hola - you be home')

            // displaying blog posts
            vm.blogPosts = blogPosts
            vm.leftPost = vm.blogPosts[0]
            vm.rightPost = vm.blogPosts[1]
        }

        function _submitMessage() {
            messageService.create(vm.formData)
                .then(data => $log.log(data))
                .catch(err => $log.log(err))
        }

    }
})();
