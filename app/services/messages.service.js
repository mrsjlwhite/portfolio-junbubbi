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
    return conn.db().collection('myMessages').find().toArray()
        .then(messages => {
            for (let i = 0; i < messages.length; i++) {
                let message = messages[i]
                message._id = message._id.toString()
            }
            return messages
        })
}

function readById(id) {
    return conn.db().collection('myMessages').findOne({ _id: new ObjectId(id) })
        .then(message => {
            message._id = message._id.toString()
            return message
        })
}

function create(model) {
    return conn.db().collection('myMessages').insert(model)
        .then(result => result.insertedIds[0].toString())
}

function update(id, doc) {
    doc._id = new ObjectId(doc._id)

    return conn.db().collection('myMessages').replaceOne({ _id: new ObjectId(id) }, doc)
        .then(result => Promise.resolve())
}

function _delete(id) {
    return conn.db().collection('myMessages').deleteOne({ _id: new ObjectId(id) })
    .then(result => Promise.resolve())
}