import 'babel-polyfill';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import createError from 'http-errors';
import session from 'express-session';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import lusca from 'lusca';
import responseTime from 'response-time';
import chalk from 'chalk';
import logger from 'morgan';
import mongoose from 'mongoose';
import config from './config';
import hbs from 'express-handlebars';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.js';

const insulinApp = express();
const currentEnv = process.env.NODE_ENV;

// dataConfig = config[currentEnv];
// console.log(dataConfig.backend_theme);

// webpack config
// const webpackCompilerConfig = webpack(webpackConfig)
// insulinApp.use(webpackDevMiddleware(webpackCompilerConfig, {
//   publicPath: webpackConfig.output.publicPath,
//   stats: { colors: true }
// }));
// insulinApp.use(webpackHotMiddleware(webpackCompilerConfig));

// view engine setup
insulinApp.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'testlayout', // 'mainlayout',
  layoutsDir: __dirname + '/themes/'+config[currentEnv].backend_theme+'/layouts/',
}));
insulinApp.set('views', path.join(__dirname, './themes/'+config[currentEnv].backend_theme));
insulinApp.set('view engine', 'hbs');
insulinApp.use('/static', express.static(path.join(__dirname, 'public')));

insulinApp.response.message = function(msg){
  let sess = this.req.session;

  sess.messages = sess.messages || [];
  sess.messages.push(msg);
  
  return this
}

// log
insulinApp.use(logger('dev'));

// serve static files
insulinApp.use(express.static(path.join(__dirname, 'public')));

// session support
insulinApp.use(session({
  resave: false,
  saveUninitialized: false,
  secret: config[currentEnv].session_secret,
  cookie: { secure: config[currentEnv].secure_cookie, maxAge: config[currentEnv].cookie_expires },
}));

// prevent clickjacking and cross site scripting
insulinApp.use(lusca.xframe(config[currentEnv].xframe_option));
insulinApp.use(lusca.xssProtection(config[currentEnv].xss_protection));

// disable x-powered-by
insulinApp.set('x-powered-by', false);
insulinApp.set('case sensitive routing', true);

// parse request bodies (req.body)
insulinApp.use(express.urlencoded({ extended: true }));

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
// require('./modules/moduleFactory')(insulinApp, { verbose: !module.parent });
import moduleFactory from './modules/moduleFactory.js';
const ModuleFactoryClass = moduleFactory(insulinApp, { verbose: !module.parent });
const allMOdules = new ModuleFactoryClass();




// catch 404 and forward to error handler
insulinApp.use(function(req, res, next) {
  next(createError(404));
});

// error handler
insulinApp.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render(path.join(__dirname, './themes/'+config[currentEnv].backend_theme+'/errors/error'), {layout: 'errorlayout'});
})

/* istanbul ignore next */
const appServer = http.createServer(insulinApp);
// create server
// insulinApp.listen(normalizePort(config[currentEnv].app_port));
appServer.listen(normalizePort(config[currentEnv].app_port));
appServer.on('error', onError);
appServer.on('listening', onListening);
console.log('Express started on port '+config[currentEnv].app_port);


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
  console.log(chalk.bgBlue('Listening on ' + bind));
}