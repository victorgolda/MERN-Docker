const errorBuilder = (message, code, errors = null) => {
  const newError = new Error(message)
  newError.code = code
  newError.errors = errors !== null ? errors : null
  return newError
}

module.exports = { errorBuilder }
