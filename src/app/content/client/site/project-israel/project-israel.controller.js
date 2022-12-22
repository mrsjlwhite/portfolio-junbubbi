/* global angular */
(function () {
    'use strict'

    angular.module('client.site')
        .controller('projIsraelController', ProjIsraelController)

    ProjIsraelController.$inject = ['$log']

    function ProjIsraelController($log) {
        // let vm = this

        init()

        function init() {
            $log.log("You've reached the project viajemos a israel page.")
        }
    }
})()
