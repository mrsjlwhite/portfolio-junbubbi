'use strict'

const responses = require('../models/responses')
const blogCategoriesService = require('../services/blog-categories.service')
const apiPrefix = '/api/blogCategories'

module.exports = {
    readAll: readAll,
    readById: readById,
    create: create,
    update: update,
    delete: _delete
}

function readAll(req, res) {
    blogCategoriesService.readAll()
    .then(categories => {
        const responseModel = new responses.ItemResponse()
        responseModel.items = categories
        res.json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function readById(req, res) {
    blogCategoriesService.readById(req.params.id)
    .then(category => {
        const responseModel = new responses.ItemResponse()
        responseModel.item = category
        res.json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function create(req, res) {
    blogCategoriesService.create(req.body) 
    .then(id => {
        const responseModel = new responses.ItemsResponse()
        responseModel.item = id
        res.status(201)
            .location(`${apiPrefix}/${id}`)
            .json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function update(req, res) {
    blogCategoriesService.update(req.body)
    .then(category => {
        const responseModel = new responses.SuccessResponse()
        res.status(200).json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function _delete(req, res) {
    blogCategoriesService.delete(req.params.id)
    .then(() => {
        const responseModel = new responses.SuccessResponse()
        res.status(200).json(responseModel)
    })
    .catch(err => {
        console.log(err)
        return res.status(500).send(new responses.ErrorResponse(err))
    })
}