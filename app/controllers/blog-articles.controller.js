'use strict'

const responses = require('../models/responses')
const blogArticlesService = require('../services/blog-articles.service')
const apiPrefix = '/api/myBlogPosts'

module.exports = {
    readAll: readAll,
    readById: readById,
    create: create,
    update: update,
    delete: _delete
}

function readAll(req, res) {
    blogArticlesService.readAll()
    .then(articles => {
        const responseModel = new responses.ItemResponse()
        responseModel.items = articles
        res.json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function readById(req, res) {
    blogArticlesService.readById(req.params.id)
    .then(article => {
        const responseModel = new responses.ItemResponse()
        responseModel.item = article
        res.json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function create(req, res) {
    blogArticlesService.create(req.body) 
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
    blogArticlesService.update(req.body)
    .then(article => {
        const responseModel = new responses.SuccessResponse()
        res.status(200).json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function _delete(req, res) {
    blogArticlesService.delete(req.params.id)
    .then(() => {
        const responseModel = new responses.SuccessResponse()
        res.status(200).json(responseModel)
    })
    .catch(err => {
        console.log(err)
        return res.status(500).send(new responses.ErrorResponse(err))
    })
}