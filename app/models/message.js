const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = {
    _id: Joi.objectId(),
    name: Joi.string(),
    email: Joi.string(),
    message: Joi.string()
}

module.exports = Joi.object().keys(schema)