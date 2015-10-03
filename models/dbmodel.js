var mongoose = require('mongoose')
, Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new Schema({

    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
var appCategorySchema =  new Schema({

    category : {
            music : {
                     playlist : {type : String ,required :true},
                     genres   : {type : String ,required :true},
                     artist   : {type : String ,required :true},
                     albums   : {type : String ,required :true},
                     songs    : {type : String ,required :true}
                   }

    }

});

var categorySchema = new Schema({
    categories : [{
                  name :  {type : String ,required :true}
                 }]
});

var postSchema = new Schema({
     category : { type: String, required: true}
    ,creationDate : {type : Date, required :true}
    ,quetions :[{
              qId : {type : String ,required :true}
             ,postedById : {type : String , required :true}
             ,description : {type : String ,required :true}
             ,answers :[{
                        postedById : {type : String , required :true}
                       ,description :{type :String ,required :true}
                       ,date : {type :Date}
                      }]
            }]

});

var loggingSchema = new Schema({
      logTime          : { type: Date, required: true, default : Date.now()}
    , token 			 : { type: String, required: true, index: { unique: true }}
    , transactionType  : { type: String}
    , expiryDate       : { type: String}
});

var lViewSchema = new Schema({
      name            : { type: String}
    , description     : { type: String}
});

var gViewSchema = new Schema({
     name            : { type: String}
   , description     : { type: String}
});
var user = mongoose.model('User',userSchema);
var appCategory = mongoose.model('appCategory',appCategorySchema);
var gview =mongoose.model('gview',gViewSchema);
var lview =mongoose.model('lview',lViewSchema);
var category = mongoose.model('Category',categorySchema);
var posts =mongoose.model('Posts',postSchema);
var dbLogger = mongoose.model('dbLogger', loggingSchema);

module.exports = {
  User         : user,
  AppCategory  : appCategory,
  Gview        : gview,
  Lview        : lview,
  Category     : category,
  Posts        : posts,
  DBLogger     : dbLogger


};
// location: {
//     geometryType:{type :String}  ,
//     coordinates:
//     [{
//        longitude :{type : Number}
//       ,latitude :{type :Number}
//     }]
//  }
