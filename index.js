// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require("cookie-parser");

const app = express()
const port = 5500

// to access ejs elements
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Static Files
app.use(express.static('public'))
app.use(cookieParser());

// all schemas 
const oper=require('./model');

const res = require('express/lib/response');

// // at starting
// res.cookie('id','nouser')

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/masterHome')
app.set('view engine', 'ejs')



app.get('/',(req,res)=>{
   
    res.render('homesection/home')
})

async function authenticateUser(req,res,next){
        try{
            let password=req.cookies.iqid
            const check=await oper.iqstaffmodel.findOne({ password })
            if(check) next();
            else res.send("USER NOT AUTHENTICATED");
        } catch (err) {
          console.log(err);
          res.status(500).send("Server Error");
        }
}


// Class 9 
app.use(require('./links/L-class9ICSE/class9'))

// Class 10th 
app.use(require('./links/L-class10ICSE/class10'))

// class 11th 
app.use(require('./links/L-class11ISC/class11'))

//class 12th
app.use(require('./links/L-class12ISC/class12'))


// Comming soon
app.get('/commingsoon',(req,res)=>{
    res.render('content/comingsoon')
})

// Calculators
app.use(require('./links/Calculators/calculator'))

// Specimen-solutions
app.use(require('./links/Specimen-Solutions/specimen'))
                                     

//iqstaff
app.get('/comment',(req,res)=>{
    res.render('comments/comment',{layout:false})
})



// comments

// registered data
app.post('/showapprovecomment',async(req,res)=>{
    let {ref}=req.body
    oper.userModel.find({'comments.ref':ref},(err,users)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(users)
        }
    })
})
app.post('/reg',async(req,res)=>{

    let name=req.body.num1
    let mobile=req.body.num2
    if(name==undefined||mobile==undefined||name==""||mobile==""){
        res.status(401).send("please fill important fields");
    }
    else{
    const usercheck = await oper.userModel.findOne({ mobile });
    // console.log(usercheck);
    if(usercheck){
        res.send('registered')
    }
    else{
    const user=new oper.userModel({
        name,
        mobile
    })
    user.save() 
    res.cookie("id",mobile)
    res.cookie("name",name)
   
    res.send(name)
}
    }
})


app.post('/login',(req,res)=>{
    let phone=req.body.uphone
    if(phone== undefined||phone==""){
        res.status(401).send("please fill important fields");
    }
    else{
    oper.userModel.findOne({mobile:phone},(err,users)=>{
        if(users==null){
            res.send('notuser')
        }
        else{
            res.cookie("id",users.mobile)
            res.cookie("name",users.name)
            res.send(users)
            // console.log(users);
        }
       
   })
}
})


app.post('/cmnt',async (req,res)=>{

try {
    const {cookies}=req
    if(!('id' in cookies))
    {
        res.send('notregistered')
    } 
    else{   
        let { text,ref }=req.body
        let phone=req.cookies.id
        if (text==undefined||ref==undefined||text==""||ref==""){
            res.status(401).send("please fill important fields");
        }
        else{
        const obj={
        ref:ref,
        text:text,
        approved:false
        }
        await oper.userModel.updateOne({
            mobile:phone
        },{ $push: { 
            comments:{
                ref,
                text,
                approved:false
            }
         } },
        )
        res.send('success')
        }
    }

    }
    catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
      }
})

// register staff
app.post('/regstaff',async(req,res)=>{
    let {name,password}=req.body
    const user=new oper.iqstaffmodel({
        name,
        password
    })
    await user.save()
    res.send("successfully registered")
})


app.post('/checkstaff',async(req,res)=>{

    let {name,password}=req.body
    const check=await oper.iqstaffmodel.findOne({ password })
    if(check) 
    {
        res.cookie("iqid",password)
        res.send('successfully login')
    }
    else res.send('notuser')
})

app.post('/showcmmnt',async (req,res)=>{
    try{
    oper.userModel.find( (err, users) => {
        res.send(users);
      });
    }
    catch (err) {  
        console.log(err);
        res.status(500).send("Server Error");
      }
})

app.post('/logout',(req,res)=>{
    const {cookies}=req
    if('iqid' in cookies)
    {
        res.cookie('iqid','logggedOut')
    }
    res.send('succesfully logout')
})

app.post('/approve',(req,res)=>{
    let {id,commentid}=req.body
   oper.userModel.updateOne(
       {_id:id,"comments._id":commentid},
      {$set:{
           "comments.$.approved":true
       }        
    },function(err){
        console.log(err);
    }
   )
   res.send('sucessfully send')
})

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))