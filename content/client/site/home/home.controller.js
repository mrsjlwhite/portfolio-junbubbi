(function () {
    'use strict'

    angular.module('client.site')
        .controller('homeController', HomeController)

    HomeController.$inject = ['$http', '$log']

    function HomeController($http, $log) {
        let vm = this

        init()

        function init() {
            $log.log('hola - you be home')
        }
    }
})();
