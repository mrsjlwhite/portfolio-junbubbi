const router = require('express').Router()
const categoryController = require('../controllers/blog-categories.controller')
const validateBody = require('../filters/validate.body')
const Category = require('../models/blog-category')

module.exports = router

// api routes ==========================================================

router.get('/', categoryController.readAll)

router.get('/:id([0-9a-fA-F]{24})', categoryController.readById)

router.post('/', validateBody(Category), categoryController.create)

router.put('/:id([0-9a-fA-F]{24})', validateBody(Category), categoryController.update)

router.delete('/:id([0-9a-fA-F]{24})', categoryController.delete)