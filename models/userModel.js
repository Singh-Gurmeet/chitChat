const { Timestamp } = require('mongodb');
const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:string,
        required: true

    },
    email:{
        type:String,
        required: true

    },
    password:{
        type:String,
        required: true

    },
    image:{
        type:String,
        required: true

    },
    is_online:{
        type:String,
        default:'0'
    },
},
{Timestamp:true}
);


module.exports = mongoose.Model('user',userSchema);
