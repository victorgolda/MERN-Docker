/* const { validationResult } = require('express-validator')
const { errorBuilder } = require('../utils/errorBuilder')
const _ = require('lodash')

const paramsValidation = (req, res, next) => {
  const errors = validationResult(req).errors
  if (_.isEmpty(errors)) {
    return next()
  }
  throw errorBuilder('Parametros incompletos', 400, errors)
}
module.exports = { paramsValidation }
 */
