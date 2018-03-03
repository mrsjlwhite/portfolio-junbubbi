const router = require('express').Router()
const categoryController = require('../controllers/blog-categories.controller')
const Category = require('../models/blog-category')

module.exports = router

// api routes ==========================================================

router.get('/', categoryController.readAll)

router.get('/:id([0-9a-fA-F]{24})', categoryController.readById)

router.post('/', categoryController.create)

router.put('/:id([0-9a-fA-F]{24})', categoryController.update)

router.delete('/:id([0-9a-fA-F]{24})', categoryController.delete)