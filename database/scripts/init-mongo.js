var MONGO_USER = process.env.MONGO_USER
var MONGO_PASSWORD = process.env.MONGO_PASSWORD
var MONGO_DB = process.env.MONGO_INITDB_DATABASE
var MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME
var MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD
db = db.getSiblingDB('admin')
db.auth(MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD)
var insert = db.createUser({
  user: MONGO_USER,
  pwd: MONGO_PASSWORD,
  roles: [
    {
      role: 'dbOwner',
      db: MONGO_DB
    }
  ]
})
