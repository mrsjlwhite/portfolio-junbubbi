(function () {
    'use strict'

    angular.module('client.site')
        .controller('projLasoController', ProjLasoController)

    LostController.$inject = ['$log']

    function LostController($log) {
        let vm = this

        init()

        function init() {
            $log.log("You've reached the project laso page.")
        }
    }
})()
