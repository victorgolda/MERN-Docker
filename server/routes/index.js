var express = require('express')

//const { authorization } = require('../authentication/authorization')

module.exports = function (app) {
  app.use(express.json())
  //  app.use('/syncs/api/v1', authorization, syncsRoutes)
}
