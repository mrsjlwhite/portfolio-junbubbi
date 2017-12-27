(function () {
    'use strict'

    angular.module('client.services')
    .factory('messageService', MessageService)

    MessageService.$inject = ['$http', '$q']

    function MessageService($http, $q) {
        return {
            readAll: readAll,
            readById: readById,
            create: create,
            update: update,
            delete: _delete
        }

        function readAll() {
            return $http.get('/api/myMessages')
            .then(xhrSuccess)
            .catch(onError)
        }

        function readById(id) {
            return $http.get(`/api/myMessages/${id}`)
            .then(xhrSuccess)
            .catch(onError)
        }

        function create(data) {
            return $http.post('/api/myMessages', data)
            .then(xhrSuccess)
            .catch(onError)
        }

        function update(data) {
            return $http.put(`/api/myMessages/${data._id}`, data)
            .then(xhrSuccess)
            .catch(onError)
        }

        function _delete(id) {
            return $http.delete(`/api/myMessages/${id}`)
            .then(xhrSuccess)
            .catch(onError)
        }

        function xhrSuccess(response) {
            return response.data
        }

        function onError(error) {
            console.log(error.data)
            return $q.reject(error.data)
        }
    }
})()