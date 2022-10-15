require('dotenv').config()

print('mongo init start --------------------')

db = db.getSiblingDB('admin')
// move to the admin db - always created in Mongo
db.auth(
  process.env.MONGO_INITDB_ROOT_USERNAME,
  process.env.MONGO_INITDB_ROOT_PASSWORD
)
// log as root admin if you decided to authenticate in your docker-compose file...
//db = db.getSiblingDB(process.env.MONGO_DB)
// create and move to your new database
db.createUser({
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_PASSWORD,
  roles: [
    {
      role: 'dbOwner',
      db: process.env.MONGO_DB
    }
  ]
})
// user created
//db.createCollection('collection_test')

print('mongo init end --------------------')
