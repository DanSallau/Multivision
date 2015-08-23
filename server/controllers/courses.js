var courses = require('mongoose').model('Course');

exports.getCourses = function(req,res){
    courses.find({}).exec(function(err,collection){
        res.send(collection);
    })
};

exports.getCoursesById = function(req,res){
    courses.findOne({_id:req.params.id}).exec(function(err,course){
        res.send(course);

    });
}