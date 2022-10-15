/* var jwt = require('jsonwebtoken')

const authorization = (req, res, next) => {
  try {
    if (process.env.NODE_ENV === 'development') {
      next()
    } else {
      const token = req.cookies.authorization
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) {
            return res.sendStatus(403)
          }
          next()
        })
      } else {
        return res.sendStatus(403)
      }
    }
  } catch (error) {
    return res.sendStatus(403)
  }
}

module.exports = { authorization }
 */
