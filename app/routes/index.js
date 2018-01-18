const router = require('express').Router()
const clientRoutes = require('./client.routes')
const messagesRoutes = require('./messages.routes')
const articlesRoutes = require('./blog-articles.routes')
const categoriesRoutes = require('./blog-categories.routes')

const authenticate = require('../filters/authenticate')

module.exports = router

// check authentication for all requests
router.use(authenticate)

// API routes (group routing modules here - no empty lines between)
router.use('/api/myMessages', messagesRoutes)
router.use('/api/myBlogPosts', articlesRoutes)
router.use('/api/blogCategories', categoriesRoutes)
// router.use('/api/entities', entitiesRoutes)


// API error handlers (API routes must be registered before this)
useAPIErrorHandlers(router)

// register client routes
router.use(clientRoutes)


function useAPIErrorHandlers(router) {
    // Handle API 404
    router.use('/api/*', (req, res, next) => {
        res.sendStatus(404)
    })

    // Handle API 500
    router.use((err, req, res, next) => {
        // If the error object doesn't exists
        if (!err) {
            return next()
        }

        // Log it
        console.error(err.stack)

        // Redirect to error page
        res.sendStatus(500)
    })
}