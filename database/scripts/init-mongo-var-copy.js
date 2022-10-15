// use shell command to save env variable to a temporary file, then return the contents.
// source: https://stackoverflow.com/questions/39444467/how-to-pass-environment-variable-to-mongo-script/60192758#60192758
/* function getEnvVariable(envVar, defaultValue) {
  var command = run('sh', '-c', `printenv --null ${envVar} >/tmp/${envVar}.txt`)
  // note: 'printenv --null' prevents adding line break to value
  if (command != 0) return defaultValue
  return cat(`/tmp/${envVar}.txt`)
}
 */
// create application user and collection
/* var MONGO_USER = getEnvVariable('MONGO_USER', 'app_user')
var MONGO_PASSWORD = getEnvVariable('MONGO_PASSWORD', 'app_user()')
var MONGO_DB = getEnvVariable('MONGO_DB', 'MeanUrls') */

var MONGO_USER = process.env.MONGO_USER
var MONGO_PASSWORD = process.env.MONGO_PASSWORD
var MONGO_DB = process.env.MONGO_INITDB_DATABASE
var MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME
var MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD
console.log('MONGO_USER: ' + MONGO_USER)
console.log('MONGO_PASSWORD: ' + MONGO_PASSWORD)
console.log('MONGO_DB: ' + MONGO_DB)
db = db.getSiblingDB('admin')
db.auth(MONGO_INITDB_ROOT_USERNAME, process.env.MONGO_INITDB_ROOT_PASSWORD)
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
console.log(db)
console.log(insert)
//var dbCollectionName = getEnvVariable('DB_COLLECTION_NAME', 'Urls')
/* db = db.getSiblingDB('admin')
db.auth(MONGO_INITDB_ROOT_USERNAME, process.env.MONGO_INITDB_ROOT_PASSWORD)
db.createUser({
  user: MONGO_USER,
  pwd: MONGO_PASSWORD,
  roles: [
    {
      role: 'dbOwner',
      db: MONGO_DB
    }
  ]
}) */

//db.createCollection(dbCollectionName)
