const express=require('express');
const router=express.Router()


router.get('/class10calculator',(req,res)=>{
    res.render('Calculator/class10thCalculator')
})
router.get('/class12calculator',(req,res)=>{
    res.render('Calculator/class12thCalculator')
})
module.exports = router;