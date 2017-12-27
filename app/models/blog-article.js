const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = {
    _id: Joi.objectId(),
    title: Joi.string().required(),
    blogPost: Joi.required(),
    imageURL: Joi.string().empty('').default(null).allow(null),
    published: Joi.date().allow(null),
    blogCategoryId: Joi.objectId().required()
}

module.exports = Joi.object().keys(schema)
