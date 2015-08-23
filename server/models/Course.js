var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title : {type: String, required : '{PATH} is required'},
    featured : {type : Boolean , required : '{PATH} is required ! '},
    published : {type : Date , required : '{PATH} is required'},
    tags : [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses(){
    Course.find({}).exec(function(err,collection){
        if(collection.length === 0){
            Course.create({title:'C for sociepath', featured : true, published : new Date('10/13/2013'), tags : ['C'] });
            Course.create({title:'C# for sociepath', featured : false, published : new Date('10/11/2013') ,tags : ['C#']});
            Course.create({title:'java for sociepath', featured : true, published : new Date('1/13/2013'), tags : ['Java'] });
            Course.create({title:'ruby# for sociepath', featured : false, published : new Date('10/13/2014'), tags : ['Ruby','C#'] });
            Course.create({title:'.NET for sociepath', featured : true, published : new Date('10/13/2015'),tags : ['C#','.NET'] });
            Course.create({title:'angular for sociepath', featured : false, published : new Date('10/3/2013'),tags : ['AngularJS'] });
            Course.create({title:'C# for sociepath', featured : true, published : new Date('10/10/2013'), tags : ['C#'] });
            Course.create({title:'Html for sociepath', featured : false, published : new Date('11/3/2013'), tags : ['Html'] });
            Course.create({title:'Java script for socepath', featured : true, published : new Date('10/13/2014'),tags : ['Java'] });
            Course.create({title:'Perl for sociepath', featured : true, published : new Date('10/13/2015'),tags : ['Perl'] });
        }
    })
};

exports.createDefaultCourses = createDefaultCourses ;