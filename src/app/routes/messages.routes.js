const router = require('express').Router()
const messagesController = require('../controllers/messages.controller')
const Message = require('../models/message')

module.exports = router

// api routes ==========================================================

router.get('/', messagesController.readAll)

router.get('/:id([0-9a-fA-F]{24})', messagesController.readById)

router.post('/', messagesController.create)

router.put('/:id([0-9a-fA-F]{24})', messagesController.update)

router.delete('/:id([0-9a-fA-F]{24})', messagesController.delete)

