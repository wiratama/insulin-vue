import 'babel-polyfill';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import createError from 'http-errors';
import session from 'express-session';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import lusca from 'lusca';
import responseTime from 'response-time';
import logger from 'morgan';
import mongoose from 'mongoose';
import config from './config';
import hbs from 'express-handlebars';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const insulinApp = express();
const currentEnv = process.env.NODE_ENV;

// webpack config
import webpackConfig from './themes/basetheme/webpack.config.js';
const webpackCompilerConfig = webpack(webpackConfig)
insulinApp.use(webpackDevMiddleware(webpackCompilerConfig, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
}));
insulinApp.use(webpackHotMiddleware(webpackCompilerConfig));

// view engine setup
insulinApp.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'mainlayout', // 'testlayout', 'mainlayout',
  layoutsDir: __dirname + '/themes/'+config[currentEnv].backend_theme+'/views/layouts/',
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

// load modules
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
  res.render(path.join(__dirname, './themes/'+config[currentEnv].backend_theme+'/views/errors/error'), {layout: 'errorlayout'});
});

export default insulinApp;