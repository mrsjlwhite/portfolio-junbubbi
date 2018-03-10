/* global angular */
(function () {
    'use strict'

    angular.module('client.site')
        .controller('projLasoController', ProjLasoController)

    ProjLasoController.$inject = ['$log']

    function ProjLasoController($log) {
        // let vm = this

        init()

        function init() {
            $log.log("You've reached the project laso page.")
        }
    }
})()
