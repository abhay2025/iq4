const express=require('express');
const router=express.Router()

// class 11th main page
router.get('/class11',(req,res)=>{
    res.render('classes/class11')
})
//class 11th subjects
// maths
router.get('/class11maths',(req,res)=>{
    res.render('class11subjects/maths')
})

// chemistry
router.get('/class11chemistry',(req,res)=>{
    res.render('class11subjects/chemistry')
})

// physics
router.get('/class11physics',(req,res)=>{
    res.render('class11subjects/physics')
})

// biology
router.get('/class11biology',(req,res)=>{
    res.render('class11subjects/biology')
})
module.exports = router;