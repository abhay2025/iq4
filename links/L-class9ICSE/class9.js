const express=require('express');
const router=express.Router()

// Class 9 Main
router.get('/class9',(req,res)=>{
    res.render('classes/class9')
})

//class 9 Subjects
// maths
router.get('/class9maths',(req,res)=>{
    res.render('class9subjects/maths')
})
// chemistry
router.get('/class9chemistry',(req,res)=>{
    res.render('class9subjects/chemistry')
})

// physics
router.get('/class9physics',(req,res)=>{
    res.render('class9subjects/physics')
})

// biology
router.get('/class9biology',(req,res)=>{
    res.render('class9subjects/biology')
})

module.exports = router;