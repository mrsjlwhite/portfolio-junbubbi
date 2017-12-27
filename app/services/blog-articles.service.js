'use strict'

const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    readAll: readAll,
    readById: readById,
    create: create,
    update: update,
    delete: _delete
}

var addFieldsBlogCategory = { blogCategory: { $arrayElemAt: ['$blogCategory', 0] } }

var lookupBlogCategories = {
    from: 'blogCategories',
    localField: 'blogCategoryId',
    foreignField: '_id',
    as: 'blogCategory'
}

var project = {
    blogCategoryId: 1,
    blogCategory: {
        id: '$blogCategory._id',
        name: '$blogCategory.name',
    },
    _id: 1,
    title: 1,
    blogPost: 1,
    imageURL: 1,
    published: 1,
}

function readMapping(model) {
    let newDocument = model
    newDocument._id = model._id.toString()
    newDocument.blogCategoryId = model.blogCategoryId.toString()
    return newDocument
}

function writeMapping(model) {
    let newModel = {
        title: model.title,
        blogPost: model.blogPost,
        imageURL: model.imageURL,
        published: model.published,
        blogCategoryId: new ObjectId(model.blogCategoryId)
    }
    return newModel
}

function readAll() {
    return conn.db().collection('myBlogPosts').aggregate([
        {
            $sort: { "published": -1 }
        }, {    
            $lookup: lookupBlogCategories
        }, {
            $addFields: addFieldsBlogCategory
        }, {
            $project: project
        }
        ]).toArray()
        .then(blogPosts => {
            //blogPosts = blogPosts[0]            
            blogPosts.map(readMapping)
            return blogPosts
        })
        // return conn.db().collection('myBlogPosts').find().toArray()
        // .then(blogPosts => {
        //     for (let i = 0; i < blogPosts.length; i++) {
        //         let post = blogPosts[i]
        //         blogPost._id = blogPost._id.toString()
        //         blogPost.blogCategoryId = blogPost.blogCategoryId.toString()
        //     }
        //     return blogPosts
        // })
}

function readById(id) {
    return conn.db().collection('myBlogPosts').aggregate([
        {
            $match: { "_id": new ObjectId(id) }
        }, {
            $lookup: lookupBlogCategories
        }, {
            $addFields: addFieldsBlogCategory
        }, {
            $project: project
        }
    ]).toArray()
    .then(blogPost => {
        return readMapping(blogPost[0])
    })
    // return conn.db().collection('myBlogPosts').findOne({ _id: new ObjectId(id) })
    //     .then(blogPost => {
    //         blogPost._id = blogPost._id.toString()
    //         return blogPost
    //     })
}

function create(model) {
    //model.blogCategoryId = new ObjectId(model.blogCategoryId)
    let doc = writeMapping(model)
    doc.published = new Date()

    return conn.db().collection('myBlogPosts').insert(doc)
        .then(result => result.insertedIds[0].toString())
}

function update(id, doc) {
    doc._id = new ObjectId(doc._id)

    return conn.db().collection('myBlogPosts').replaceOne({ _id: new ObjectId(id) }, doc)
        .then(result => Promise.resolve())
}

function _delete(id) {
    return conn.db().collection('myBlogPosts').deleteOne({ _id: new ObjectId(id) })
        .then(result => Promise.resolve())
}
