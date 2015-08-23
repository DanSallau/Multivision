var path =require('path');
var _dirname = path.resolve(path.dirname());
var rootPath = path.normalize(_dirname + '/')

module.exports = {

    developement : {
        rootPath : rootPath,
        db : 'mongodb://localhost/multivision',
        port : process.env.PORT || 3030

    },
    production : {
        rootPath : rootPath
    }
}
