var mongoose = require('mongoose')
, Schema = mongoose.Schema;


var pageheadingSchema = new Schema({
      customizingId        : { type: String}
    , headingtext   			 : { type: String}
    , headingdescription   : { type: String}
    , image                : { data: Buffer, contentType: String }
});
var servicesSchema = new Schema({
      customizingId        : { type: String}
    , headingtext   			 : { type: String}
    , headingdescription   : { type: String}
    , icon                 : { type: String }
});
var gallerySchema = new Schema({
      customizingId        : { type: String}
    , headingtext   			 : { type: String}
    , headingdescription   : { type: String}
    , image                : { data: Buffer, contentType: String }
});
var aboutSchema = new Schema({
      customizingId        : { type: String}
    , headingtext   			 : { type: String}
    , headingdescription   : { type: String}
    , image                : { data: Buffer, contentType: String }
});

var teamStaffSchema = new Schema({
      customizingId        : { type: String}
    , name          			 : { type: String}
    , role                 : { type: String}
    , image                : { data: Buffer, contentType: String }
    , f_link               : { type: String}
    , t_link         			 : { type: String}
    , lin_link             : { type: String}
    , detailDescription    : { type: String}
});



var pageheading = mongoose.model('pageheading',pageheadingSchema);
var services    = mongoose.model('services',servicesSchema);
var gallery     = mongoose.model('gallery',gallerySchema);
var about       = mongoose.model('about',aboutSchema);
var teamStaff   = mongoose.model('teamStaff',teamStaffSchema);


module.exports = {
  Pageheading  : pageheading,
  Services     : services,
  Gallery      : gallery,
  About        : about,
  TeamStaff    : teamStaff

};
