const mongoose=require('mongoose')


// mongoose intialization
mongoose.connect('mongodb://localhost/cmmnts',
{useNewUrlParser:true,useUnifiedTopology:true})


//User Schema
const userSchema=new mongoose.Schema({
    name:String,
    mobile:String,
    comments:[{
        ref:String,
        text:String,
        approved:String
    }]
})


// IQ STAFF 
const iqstaffSchema=new mongoose.Schema({
    name:String,
    password:String
})


module.exports.iqstaffmodel=mongoose.model('iqStaff',iqstaffSchema)

module.exports.userModel=mongoose.model('user',userSchema)