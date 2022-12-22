const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = {
    _id: Joi.objectId(),
    name: Joi.string().max(40),
    description: Joi.string()
}

module.exports = Joi.object().keys(schema)