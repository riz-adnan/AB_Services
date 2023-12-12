const mongoose = require('mongoose');
const {Schema} = mongoose;
const CustomerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        
    },
    location: {
        type:String,
        required:true
    },
    service: {
        type:Array,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model('customers',CustomerSchema);