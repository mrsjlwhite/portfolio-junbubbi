const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const schema = {
    _id: Joi.objectId(),
    name: Joi.string().required().max(40),
    description: Joi.string().max(500),
}

module.exports = Joi.object().keys(schema)