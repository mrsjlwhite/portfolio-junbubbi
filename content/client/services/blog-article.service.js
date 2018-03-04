(function () {
    'use strict'

    angular.module('client.services')
    // .factory('blogPostService', BlogPostService)

    // BlogPostService.$inject = ['$http', '$q']

    // function BlogPostService($http, $q) {
    //     return {
    //         readAll: readAll,
    //         readById: readById,
    //         create: create,
    //         update: update,
    //         delete: _delete
    //     }

    //     function readAll() {
    //         return $http.get('/api/myBlogPosts')
    //         .then(dateChange => convertAllDates(dateChange))
    //         .catch(onError)
    //     }

    //     function readById(id) {
    //         return $http.get(`/api/myBlogPosts/${id}`)
    //         .then(dateChange => convertAllDates(dateChange))
    //         .catch(onError)
    //     }

    //     function create(data) {
    //         return $http.post('/api/myBlogPosts', data)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function update(data) {
    //         return $http.put(`/api/myBlogPosts/${data._id}`, data)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function _delete(id) {
    //         return $http.get(`/api/myBlogPosts/${id}`)
    //         .then(xhrSuccess)
    //         .catch(onError)
    //     }

    //     function xhrSuccess(response) {
    //         return response.data
    //     }

    //     function onError(error) {
    //         console.log(error.data)
    //         return $q.reject(error.data)
    //     }

    //     function convertAllDates(dateChange) {
    //         for (let x = 0; x < dateChange.data.items.length; x++) {
    //             dateChange.data.items[x].published = new Date(dateChange.data.items[x].published)     
    //         }
    //         return dateChange.data
    //     }

    //     function convertDate(dateChange) {
    //         dateChange.data.item.published = new Date(dateChange.data.item.published)
    //         return dateChange.data
    //     }
    // }
})();