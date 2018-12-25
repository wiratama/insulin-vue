const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const createError = require('http-errors')
const session = require('express-session')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const lusca = require('lusca')
const responseTime = require('response-time')
const debug = require('debug')('insulinApp:server')
const logger = require('morgan')
const mongoose = require('mongoose')
const config = require('./config')
const hbs = require('express-handlebars')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config.js')

const insulinApp = module.exports = express()
const currentEnv = process.env.NODE_ENV

// webpack config
const webpackCompilerConfig = webpack(webpackConfig)
insulinApp.use(webpackDevMiddleware(webpackCompilerConfig, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}))
insulinApp.use(webpackHotMiddleware(webpackCompilerConfig))

// view engine setup
insulinApp.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'mainlayout',
  layoutsDir: __dirname + '/theme/'+config.currentEnv.active_theme+'/layouts/',
}));
insulinApp.set('views', path.join(__dirname, './theme/'+config.currentEnv.active_theme))
insulinApp.use('/static', express.static(path.join(__dirname, 'public')))

insulinApp.response.message = function(msg){
  let sess = this.req.session

  sess.messages = sess.messages || []
  sess.messages.push(msg)
  
  return this
}

// log
if (!module.parent) insulinApp.use(logger('dev'));

// serve static files
insulinApp.use(express.static(path.join(__dirname, 'public')));

// session support
insulinApp.use(session({
  resave: false,
  saveUninitialized: false,
  secret: config.currentEnv.session_secret
  cookie: { secure: config.currentEnv.secure_cookie, maxAge: config.currentEnv.cookie_expires },
}));

// prevent clickjacking and cross site scripting
app.use(lusca.xframe(config.currentEnv.xframe_option));
app.use(lusca.xssProtection(config.currentEnv.xss_protection));

// parse request bodies (req.body)
insulinApp.use(express.urlencoded({ extended: true }))

// allow overriding methods in query (?_method=put)
insulinApp.use(methodOverride('_method'));

// expose the "messages" local variable when views are rendered
insulinApp.use(function(req, res, next){
  let msgs = req.session.messages || [];
  res.locals.messages = msgs;
  res.locals.hasMessages = !! msgs.length;
  next();
  req.session.messages = [];
});

// load controllers
require('./core/boot')(insulinApp, { verbose: !module.parent })

// catch 404 and forward to error handler
insulinApp.use(function(req, res, next) {
  next(createError(404));
})

// error handler
insulinApp.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render(path.join(__dirname, './theme/'+config.currentEnv.active_theme+'/error'), {layout: 'errorlayout'})
})

/* istanbul ignore next */
const appServer = http.createServer(insulinApp)
if (!module.parent) {
  // insulinApp.listen(normalizePort(config.currentEnv.app_port))

  // create server
  appServer.listen(normalizePort(config.currentEnv.app_port))
  appServer.on('error', onError)
  appServer.on('listening', onListening)
  console.log('Express started on port '+config.currentEnv.app_port)
}


function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
  ? 'Pipe ' + port
  : 'Port ' + port;

  switch (error.code) {
  case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
  case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
  default:
    throw error;
  }
}

function onListening() {
  let addr = appServer.address();
  let bind = typeof addr === 'string'
  ? 'pipe ' + addr
  : 'port ' + addr.port;
  debug('Listening on ' + bind);
}