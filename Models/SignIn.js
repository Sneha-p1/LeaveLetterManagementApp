const {Schema}=require('mongoose')
const {model}=require('mongoose');

const SignINschema = new Schema({
    username:{type:String,required: true},

    useremail:{type:String,required: true},

    password:{type:String,required: true},

});

const details = model('SignInPage',SignINschema)
module.exports=details;
