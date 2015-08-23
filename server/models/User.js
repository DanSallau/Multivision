var mongoose  =require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema =mongoose.Schema({
    FirstName : {type : String, required :'{PATH} is required !'},
    LastName  : {type : String, required :'{PATH} is required !'},
    username : {
        type : String,
        required : '{PATH} is required !',
        unique  :true
    } ,
    salt : {type : String, required :'{PATH} is required !'},
    hashed_pwd : { type : String, required :'{PATH} is required !'},
    roles : [String]
});

userSchema.methods = {
    authenticate : function(passwordToMatch){
        return encrypt.hashPwd(this.salt,passwordToMatch) === this.hashed_pwd;
    },
    hasRole : function(role){
        return this.roles.indexOf(role) > -1;

    }
};

var user = mongoose.model('user',userSchema);

function createDefaultUsers(){
    user.find({}).exec(function(err,collection){
        if(collection.length==0)
        {
            var salt, hash;
            salt = encrypt.creatSalt();
            hash = encrypt.hashPwd(salt,'nuru')
            user.create({FirstName :'Nuru', LastName : 'Salihu' , username : 'nuru', salt: salt , hashed_pwd:hash,roles:['admin'] });

            salt = encrypt.creatSalt();
            hash = encrypt.hashPwd(salt,'sirajo')
            user.create({FirstName :'Sirajo', LastName : 'Salihu' , username : 'sirajo', salt: salt , hashed_pwd:hash,roles:[] });

            salt = encrypt.creatSalt();
            hash = encrypt.hashPwd(salt,'masud')
            user.create({FirstName :'Masud', LastName : 'Salihu' , username : 'Masud', salt: salt , hashed_pwd:hash, roles: [] });

            salt = encrypt.creatSalt();
            hash = encrypt.hashPwd(salt,'sallau')
            user.create({FirstName :'Sallau', LastName : 'Salihu' , username : 'Sallau',  salt: salt , hashed_pwd:hash });
        }
    })

};

exports.createDefaultUsers = createDefaultUsers;

