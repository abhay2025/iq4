const express=require('express');
const router=express.Router()

// Class 10th Main
router.get('/class10',(req,res)=>{
    res.render('classes/class10')
})

// class 10th subjects
// maths
router.get('/class10maths',(req,res)=>{
    res.render('class10subjects/maths')
})

// chemistry
router.get('/class10chemistry',(req,res)=>{
    res.render('class10subjects/chemistry')
})

// physics
router.get('/class10physics',(req,res)=>{
    res.render('class10subjects/physics')
})

// biology
router.get('/class10biology',(req,res)=>{
    res.render('class10subjects/biology')
})

module.exports = router;