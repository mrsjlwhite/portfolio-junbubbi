(function () {
    'use strict'

    angular.module('client.site')
        .controller('lostController', LostController)

    LostController.$inject = ['$log']

    function LostController($log)
    let vm = this

    init()

    function init() {
        $log.log("You've reached the 404 lost page.")
    }

})();