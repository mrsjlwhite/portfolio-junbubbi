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

function readAll() {
    return conn.db().collection('blogCategories').find().toArray()
        .then(categories => {
            for (let i = 0; i < categories.length; i++) {
                let category = categories[i]
                category._id = category._id.toString()
            }
            return categories
        })
}

function readById(id) {
    return conn.db().collection('blogCategories').findOne({ _id: new ObjectId(id) })
        .then(category => {
            category._id = category._id.toString()
            return category
        })
}

function create(model) {
    model.published = new Date()
    
    return conn.db().collection('blogCategories').insert(model)
        .then(result => result.insertedIds[0].toString())
}

function update(id, doc) {
    doc._id = new ObjectId(doc._id)

    return conn.db().collection('blogCategories').replaceOne({ _id: new ObjectId(id) }, doc)
        .then(result => Promise.resolve())
}

function _delete(id) {
    return conn.db().collection('blogCategories').deleteOne({ _id: new ObjectId(id) })
    .then(result => Promise.resolve())
}