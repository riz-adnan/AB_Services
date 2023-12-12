const mongoose=require('mongoose');
const {Schema} = mongoose;
const CallSchema = new Schema({
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
        type:String,
        required:true
    },
    requirement:{
        type:String,
        required:true
    },
    image:{
        type:Buffer,
        
    },

    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('calls',CallSchema);