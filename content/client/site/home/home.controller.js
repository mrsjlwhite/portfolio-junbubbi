(function() {
    'use strict'

    angular.module('client.site')
        .controller('homeController', HomeController)

    HomeController.$inject = ['messageService', 'blogPosts', '$log']

    function HomeController(messageService, blogPosts, $log) {
        let vm = this

        //Blog
        vm.blogPosts = null
        vm.leftPost = null
        vm.rightPost = null

        //Form
        vm.formData = null
        vm.submitMessage = _submitMessage

        init()

        function init() {
            $log.log('hola - you be home')
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
