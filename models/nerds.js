// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name 			:{type:String, default: ''},
    lastname 		:{type:String},
    age				:{type:Number},
    email			:{type:String, lowercase:true, trim:true}
});