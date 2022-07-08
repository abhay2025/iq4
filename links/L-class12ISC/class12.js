const express=require('express');
const router=express.Router()


//class 12th main page
router.get('/class12',(req,res)=>{
    res.render('classes/class12')
})

//class 12th subjects
// *********************************************************************//

// maths
router.get('/class12math',(req,res)=>{
    res.render('class12subjects/maths')
})

// Integration
// Integration-ML AGARWAL
router.get('/class12integrationAggarwal',(req,res)=>{
    res.render('class12chapters/maths/integration-ML/note')
})
// Integration-ML AGARWAL exercises
router.get('/class12Integration-exercise8-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-1',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-2',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-3',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-3',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-4',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-4',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-5',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-5',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-6',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-6',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-7',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-7',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-8',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-8',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-9',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-9',{layout:false})
    }, 1000);
})

router.get('/class12Integration-exercise8-10',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-10',{layout:false})
        }, 1000);
})
router.get('/class12Integration-exercise8-11',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-11',{layout:false})
    }, 1000);

})
router.get('/class12Integration-exercise8-12',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-12',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-13',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-13',{layout:false})
    }, 1000);
})
router.get('/class12Integration-exercise8-14',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/integration-ML/exercise8-14',{layout:false})
    }, 1000);
})

// linear-regression
// linear-regression-ML-AGARWAL
router.get('/class12LinearRegressionAggarwal',(req,res)=>{
    res.render('class12chapters/maths/linear-regression-ML/note')
})
 
// linear-regression-ML-AGARWAL exercises
router.get('/class12linear-regression-exercise2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/linear-regression-ML/exercise2',{layout:false})
    }, 1000);
})

// linear-programming
// linear-programming-ML-AGARWAL
router.get('/class12LinearProgrammingAggarwal',(req,res)=>{
    res.render('class12chapters/maths/linear-programming-ML/note')
})

// linear-programming-ML-AGARWAL exercises
router.get('/class12linear-programming-exercise3-1-sol',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/linear-programming-ML/exercise3-1-sol',{layout:false})
    }, 1000);
})
router.get('/class12linear-programming-exercise3-1-unsol',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/linear-programming-ML/exercise3-1-unsol',{layout:false})
    }, 1000);
})
router.get('/class12linear-programming-exercise3-2-sol',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/linear-programming-ML/exercise3-2-sol',{layout:false})
    }, 1000);
})
router.get('/class12linear-programming-exercise3-2-unsol',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/linear-programming-ML/exercise3-2-unsol',{layout:false})
    }, 1000);
})

// relations&functions
// relations&functions-ML-AGARWAL
router.get('/class12Relations&FunctionsAggarwal',(req,res)=>{
    res.render('class12chapters/maths/relations&functions-ML/note')
})

// relations&functions-ML-AGARWAL exercises
router.get('/class12relations&function-exercise1-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/relations&functions-ML/exercise1-1',{layout:false})
    }, 1000);
})
router.get('/class12relations&function-exercise1-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/relations&functions-ML/exercise1-2',{layout:false})
    }, 1000);
})
router.get('/class12relations&function-exercise1-3',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/relations&functions-ML/exercise1-3',{layout:false})
    }, 1000);
})
router.get('/class12relations&function-exercise1-4',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/relations&functions-ML/exercise1-4',{layout:false})
    }, 1000);
})
router.get('/class12relations&function-exercise1-5',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/relations&functions-ML/exercise1-5',{layout:false})
    }, 1000);
})
router.get('/class12relations&function-exercise1-6',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/relations&functions-ML/exercise1-6',{layout:false})
    }, 1000);
})





// differential-equations
// differential-equations-ML-AGARWAL
router.get('/class12differentialequationsAggarwal',(req,res)=>{
    res.render('class12chapters/maths/differential-equations-ML/note')
})

// differential-equations-ML-AGARWAL exercises
router.get('/class12differentialequations-exercise9-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/differential-equations-ML/exercise9-1',{layout:false})
    }, 1000);
})
router.get('/class12differentialequations-exercise9-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/differential-equations-ML/exercise9-2',{layout:false})
    }, 1000);
})
router.get('/class12differentialequations-exercise9-3',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/differential-equations-ML/exercise9-3',{layout:false})
    }, 1000);
})
router.get('/class12differentialequations-exercise9-4',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/differential-equations-ML/exercise9-4',{layout:false})
    }, 1000);
})
router.get('/class12differentialequations-exercise9-5',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/differential-equations-ML/exercise9-5',{layout:false})
    }, 1000);
})
router.get('/class12differentialequations-exercise9-6',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/differential-equations-ML/exercise9-6',{layout:false})
    }, 1000);
})
router.get('/class12differentialequations-exercise9-7',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/differential-equations-ML/exercise9-7',{layout:false})
    }, 1000);
})
// I.T.F 
// I.T.F-ML-AGARWAL
router.get('/class12itfAggarwal',(req,res)=>{
    res.render('class12chapters/maths/itf-ML/note')
})
// I.T.F-ML-AGARWAL exercises
router.get('/class12itfAggarwal-exercise9-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/itf-ML/exercise2-1',{layout:false})
    }, 1000);
})
router.get('/class12itfAggarwal-exercise2-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/maths/itf-ML/exercise2-2',{layout:false})
    }, 1000);
})

// *********************************************************************//

// chemistry
router.get('/class12chemistry',(req,res)=>{
    res.render('class12subjects/chemistry')
})

// Solid state
// Solid state-nootan
router.get('/class12solidstateNootan',(req,res)=>{
    res.render('class12chapters/chemistry/solid-state-nootan/solid-state')
})
// Solid state-nootan Exercise

router.get('/class12solidstate-exercise1-3',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/solid-state-nootan/exercise1-3',{layout:false})
    }, 1000);
})
router.get('/class12solidstate-exercise1-4',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/solid-state-nootan/exercise1-4',{layout:false})
    }, 1000);
})
router.get('/class12solidstate-exercise1-5',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/solid-state-nootan/exercise1-5',{layout:false})
    }, 1000);
})
router.get('/class12solidstate-exercise1-6',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/solid-state-nootan/exercise1-6',{layout:false})
    }, 1000);
})

// Chemical Kinetics
// Chemical Kinetics-nootan
router.get('/class12ChemicalKineticNootan',(req,res)=>{
    res.render('class12chapters/chemistry/chemical-kinetic-nootan/chemical-kinetic')
})

// Chemical Kinetics-nootan Exercises

router.get('/class12chemicalkinetic-exercise4-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/chemical-kinetic-nootan/exercise4-1',{layout:false})
    }, 1000);
})
router.get('/class12chemicalkinetic-exercise4-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/chemical-kinetic-nootan/exercise4-2',{layout:false})
    }, 1000);
})
router.get('/class12chemicalkinetic-exercise4-3',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/chemical-kinetic-nootan/exercise4-3',{layout:false})
    }, 1000);
})
router.get('/class12chemicalkinetic-exercise4-4',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/chemical-kinetic-nootan/exercise4-4',{layout:false})
    }, 1000);
})
router.get('/class12chemicalkinetic-exercise4-5',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/chemical-kinetic-nootan/exercise4-5',{layout:false})
    }, 1000);
})
router.get('/class12chemicalkinetic-exercise4-6',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/chemical-kinetic-nootan/exercise4-6',{layout:false})
    }, 1000);
})
router.get('/class12chemicalkinetic-exercise4-7',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/chemical-kinetic-nootan/exercise4-7',{layout:false})
    }, 1000);
})

// Electrochemistry
//  Electrochemistry-nootan
router.get('/class12ElectrochemistryNootan',(req,res)=>{
    res.render('class12chapters/chemistry/electro-nootan/electrochemistry')
})

// Electrochemistry-nootan Exercises


router.get('/class12Electrochemistry-exercise3-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/electro-nootan/exercise3-1',{layout:false})
    }, 1000);
})
router.get('/class12Electrochemistry-exercise3-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/electro-nootan/exercise3-2',{layout:false})
    }, 1000);
})
router.get('/class12Electrochemistry-exercise3-3',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/electro-nootan/exercise3-3',{layout:false})
    }, 1000);
})
router.get('/class12Electrochemistry-exercise3-4',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/electro-nootan/exercise3-4',{layout:false})
    }, 1000);
})
router.get('/class12Electrochemistry-exercise3-5',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/electro-nootan/exercise3-5',{layout:false})
    }, 1000);
})
router.get('/class12Electrochemistry-exercise3-6',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/electro-nootan/exercise3-6',{layout:false})
    }, 1000);
})
router.get('/class12Electrochemistry-exercise3-7',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/electro-nootan/exercise3-7',{layout:false})
    }, 1000);
})
router.get('/class12Electrochemistry-exercise3-9',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/electro-nootan/exercise3-9',{layout:false})
    }, 1000);
})
router.get('/class12Electrochemistry-exercise3-12',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/electro-nootan/exercise3-12',{layout:false})
    }, 1000);
})
// P-Block
//  P-Block-nootan
router.get('/class12PBlockNootan',(req,res)=>{
    res.render('class12chapters/chemistry/pblock-nootan/pblock')
})

// P-Block-nootan Exercises


router.get('/class12PBlockNootan-exercise7-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/pblock-nootan/exercise7-1',{layout:false})
    }, 1000);
})
router.get('/class12PBlockNootan-exercise7-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/pblock-nootan/exercise7-2',{layout:false})
    }, 1000);
})
router.get('/class12PBlockNootan-exercise7-3',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/pblock-nootan/exercise7-3',{layout:false})
    }, 1000);
})

// D&F-Block
//  D&F-Block-nootan
router.get('/class12D&FBlockNootan',(req,res)=>{
    res.render('class12chapters/chemistry/d&fblock-nootan/d&fblock')
})

// D&F-Block-nootan Exercises


router.get('/class12D&FBlockNootan-exercise8-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/d&fblock-nootan/exercise8-1',{layout:false})
    }, 1000);
})
router.get('/class12D&FBlockNootan-exercise8-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/d&fblock-nootan/exercise8-2',{layout:false})
    }, 1000);
})


// Surface chemistry
// surface-chemistry-nootan
router.get('/class12surfacechemistryNootan',(req,res)=>{
    res.render('class12chapters/chemistry/surfacechemistry-nootan/surfacechemistry')
})

// surface-chemistry-nootan Exercises


router.get('/class12surfacechemistryNootan-exercise5-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/surfacechemistry-nootan/exercise5-1',{layout:false})
    }, 1000);
})
router.get('/class12surfacechemistryNootan-exercise5-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/surfacechemistry-nootan/exercise5-2',{layout:false})
    }, 1000);
})
router.get('/class12surfacechemistryNootan-exercise5-3',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/surfacechemistry-nootan/exercise5-3',{layout:false})
    }, 1000);
})

// polymers
// polymers-nootan
router.get('/class12polymersNootan',(req,res)=>{
    res.render('class12chapters/chemistry/polymers-nootan/polymers')
})

// polymers-nootan Exercises
router.get('/class12polymersNootan-exercise15-4',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/polymers-nootan/exercise15-4',{layout:false})
    }, 1000);
})



// chemistryineveredaylife
// chemistryineveredaylife-nootan
router.get('/class12chemistryineverydaylifeNootan',(req,res)=>{
    res.render('class12chapters/chemistry/chemistryineverydaylife-nootan/chemlife')
})

// chemistryineveredaylife-nootan-Exercises
router.get('/class12chemistryineverydaylifeNootan-exercise16-3',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/chemistryineverydaylife-nootan/exercise16-3',{layout:false})
    }, 1000);
})

// coordination-compound
// coordination-compound-nootan
router.get('/class12coordinationcompoundNootan',(req,res)=>{
    res.render('class12chapters/chemistry/coordination-compound-nootan/coordinationcompound')
})

// coordination-compound-nootan-Exercises
router.get('/class12coordinationcompoundNootan-exercise9-1',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/coordination-compound-nootan/exercise9-1',{layout:false})
    }, 1000);
})
router.get('/class12coordinationcompoundNootan-exercise9-2',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/coordination-compound-nootan/exercise9-2',{layout:false})
    }, 1000);
})


// Solutions
// Solutions-nootan
router.get('/class12solutionsNootan',(req,res)=>{
    res.render('class12chapters/chemistry/solutions-nootan/solutions')
})

// solutions-nootan-Exercises
router.get('/class12solutionsNootan-exercise2-7',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/solutions-nootan/exercise2-7',{layout:false})
    }, 1000);
})
router.get('/class12solutionsNootan-exercise2-8',(req,res)=>{
    setTimeout(() => {
        res.render('class12chapters/chemistry/solutions-nootan/exercise2-8',{layout:false})
    }, 1000);
})

// physics
router.get('/class12physics',(req,res)=>{
    res.render('class12subjects/physics')
})

// biology
router.get('/class12biology',(req,res)=>{
    res.render('class12subjects/biology')
})
module.exports = router;
