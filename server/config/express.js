var express = require('express');
    stylus = require('stylus');
    passport  =require('passport');
    session = require('express-session');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser =  require('cookie-parser')


module.exports = function(app, config,env) {
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    if (env == 'development') {
        app.set('views', config.rootPath + '/server/views');
        app.set('view engine', 'jade');
        app.use(logger('dev'));
        app.use(cookieParser());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(session({
            secret: 'multi vision unicorns',
            name: 'userCookie',
            proxy: true,
            resave: true,
            saveUninitialized: true
        }));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(stylus.middleware(
            {
                src: config.rootPath + '/public',
                compile: compile
            }
        ));
        app.use(express.static(_dirname + '/public'));
    }
    else {
        app.set('views', config.rootPath + '/server/views');
        app.set('view engine', 'jade');
        app.use(logger('dev'));
        app.use(cookieParser());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(session({
            secret: 'multi vision unicorns',
            name: 'userCookie',
            proxy: true,
            resave: true,
            saveUninitialized: true
        }));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(stylus.middleware(
            {
                src: config.rootPath + '/public',
                compile: compile
            }
        ));
        app.use(express.static(config.rootPath + '/public'));
    }
}