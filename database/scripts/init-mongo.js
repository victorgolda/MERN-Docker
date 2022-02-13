//require('dotenv').config()

print('mongo init start --------------------')

db = db.getSiblingDB('admin')
// move to the admin db - always created in Mongo
db.auth('root', '84Qsuj92bAS5481!!!.A')
// log as root admin if you decided to authenticate in your docker-compose file...
//db = db.getSiblingDB(process.env.MONGO_DB)
// create and move to your new database
db.createUser({
  user: 'agile',
  pwd: 'nuhs78$smis.1SFD',
  roles: [
    {
      role: 'dbOwner',
      db: 'agile'
    }
  ]
})
// user created
//db.createCollection('collection_test')

print('mongo init end --------------------')
