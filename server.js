var express = require('express');

var path = require('path');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developement';
var _dirname = path.resolve(path.dirname());
app = express();
var config = require('./server/config/config')[env];


require('./server/config/express')(app,config,env);


//db connection
require('./server/config/mongoose')(config);

require('./server/config/passport')();

//routes
require('./server/config/route')(app);


app.listen(config.port);

console.log('listening on port : ' + config.port + '....');