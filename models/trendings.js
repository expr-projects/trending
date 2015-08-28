var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

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
  
  var Category = mongoose.model('Category',categorySchema);
  var Posts =mongoose.model('Posts',postSchema);
  var dbLogger = mongoose.model('dbLogger', loggingSchema);
module.exports = {

  Category : Category,
  Posts : Posts,
  DBLogger : dbLogger

};
// location: {
//     geometryType:{type :String}  ,
//     coordinates:
//     [{
//        longitude :{type : Number}
//       ,latitude :{type :Number}
//     }]
//  }
