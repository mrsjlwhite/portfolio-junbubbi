const responses = require('../models/responses')
const messagesService = require('../services/messages.service')
const apiPrefix = '/api/myMessages'

module.exports = {
    readAll: readAll,
    readById: readById,
    create: create,
    update: update,
    delete: _delete
}

function readAll(req, res) {
    messagesService.readAll()
    .then(messages => {
        const responseModel = new responses.ItemsResponse()
        responseModel.items = messages
        res.json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function readById(req, res) {
    messagesService.readById(req.params.id)
    .then(message => {
        const responseModel = new responses.ItemsResponse()
        responseModel.item = message
        res.json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function create(req, res) {
    messagesService.create(req.model)
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
    messagesService.update(req.params.id)
    .then(() => {
        const responseModel = new responses.SuccessResponse()
        res.status(200).json(responseModel)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

function _delete(req, res) {
    messagesService.delete(req.params.id)
    .then(() => {
        const responseModel = new responses.SuccessResponse()
        res.status(200).json(responseModel)
    })
    .catch(err => {
        console.log(err)
        return res.status(500).send(new responses.ErrorResponse)
    })
}