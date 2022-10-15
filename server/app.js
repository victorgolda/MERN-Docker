var createError = require('http-errors')
var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var mongoose = require('mongoose')
var indexRouter = require('./routes/index')
var cors = require('cors')
const app = express()
var corsOptions = {
  credentials: true,
  //origin: ["https://[production-domain.com]", "http://localhost:3000"]
  origin: ['http://localhost:3000']
}
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json())

mongoose.connect(
  'mongodb://' +
    process.env.MONGO_USER +
    ':' +
    process.env.MONGO_PASSWORD +
    '@' +
    process.env.MONGO_HOSTNAME +
    ':' +
    process.env.MONGO_PORT +
    '/' +
    process.env.MONGO_INITDB_DATABASE +
    '?authSource=admin&w=1',
  { useUnifiedTopology: true, useNewUrlParser: true }
)
mongoose.connection
  .once('open', () => console.log('Connected!'))
  .on('error', (error) => {
    console.warn('Error : ', error)
  })

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'))
})
module.exports = app
