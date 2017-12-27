(function () {
    'use strict'

    angular.module('client.services')
    .factory('blogCategoryServices', BlogCategoryService)

    BlogCategoryService.$inject = ['$http', '$q']

    function BlogCategoryService($http, $q) {
        return {
            readAll: readAll,
            readById: readById,
            create: create,
            update: update,
            delete: _delete
        }

        function readAll() {
            return $http.get('/api/blogCategories')
            .then(xhrSuccess)
            .catch(onError)
        }

        function readById(id) {
            return $http.get(`/api/blogCategories/${id}`)
            .then(xhrSuccess)
            .catch(onError)
        }

        function create(data) {
            return $http.post('/api/blogCategories', data)
            .then(xhrSuccess)
            .catch(onError)
        }

        function update(data) {
            return $http.put(`/api/blogCategories/${data._id}`, data)
            .then(xhrSuccess)
            .catch(onError)
        }

        function _delete(id) {
            return $http.get(`/api/blogCategories/${id}`)
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
})();