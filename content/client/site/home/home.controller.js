(function () {
    'use strict'

    angular.module('client.site')
        .controller('homeController', HomeController)

    HomeController.$inject = ['messageService', 'blogPosts', '$http', '$log']

    function HomeController(messageService, blogPosts, $http, $log) {
        let vm = this

        //From previous blog implementation
        vm.blogPosts = null
        vm.leftPost = null
        vm.rightPost = null

        //Form
        vm.formData = null
        vm.submitMessage = _submitMessage
        vm.sendMail = _sendMail

        init()

        function init() {
            $log.log('hola - you be home')

            //Displaying blog posts
            vm.blogPosts = blogPosts
            vm.leftPost = vm.blogPosts[0]
            vm.rightPost = vm.blogPosts[1]
        }

        function _submitMessage() {
            messageService.create(vm.formData)
                .then(data => $log.log(data))
                .catch(err => $log.log(err))
        }

        // function _sendMail() {
        //     var data = vm.formData

        //     //Post passing data
        //     $http.post('/contact-form', data).
        //         success(function (data, status, headers, config) {
        //             window.alert('Thanks for your message!')
        //         }).
        //         error(function (data, status, headers, config) {
        //             window.alert(data)
        //         })
        // }

    }
})();
