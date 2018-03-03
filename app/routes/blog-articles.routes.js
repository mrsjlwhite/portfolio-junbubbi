const router = require('express').Router()
const articleController = require('../controllers/blog-articles.controller')
const Article = require('../models/blog-article')

module.exports = router

// api routes ==========================================================

router.get('/', articleController.readAll)

router.get('/:id([0-9a-fA-F]{24})', articleController.readById)

router.post('/', articleController.create)

router.put('/:id([0-9a-fA-F]{24})', articleController.update)

router.delete('/:id([0-9a-fA-F]{24})', articleController.delete)