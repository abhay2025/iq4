const express=require('express');
const router=express.Router()

// Specimen-solutions
router.get('/specimensol',(req,res)=>{
    res.render('specimen-solutions/specimen-solutions')
})


//  *******************************SPECIMEN 2021-2022  ************************//
//SPECIMEN CLASS 10TH ICSE

router.get("/Class10-maths-sol", function (req, res) {
    res.render("specimen-solutionsub/2021-22/Term-2/class10icsemaths-sol" , {title:"Class 10 maths isce SPECIMEN SOLUTIONS"});
  });
  
  router.get("/Class10-chem-sol", function (req, res) {
      res.render("specimen-solutionsub/2021-22/Term-2/class10cbsescience-sol" , {title:"Class 10 chemistry ICSE SPECIMEN SOLUTIONS"});
    });
  
    router.get("/Class10-comp-sol", function (req, res) {
      res.render("specimen-solutionsub/2021-22/Term-2/class10icsecomp-sol" , {title:"Class 10 Computers ICSE JAVA 2022 SPECIMEN SOLUTIONS"});
    });
  
//CLASS 10TH CBSE
                                                     
router.get("/Class10CBSE-maths-sol", function (req, res) {
  res.render("specimen-solutionsub/2021-22/Term-2/class10cbsemaths-sol" , {title:"Class 10 maths CBSE SPECIMEN SOLUTIONS"});
});

router.get("/class10science", function (req, res) {
    res.render("specimen-solutionsub/2021-22/Term-2/class10cbsescience-sol" , {title:"Class 10 science CBSE SPECIMEN SOLUTIONS"});
  });



//CLASS 12TH ISC
                                                     
//MATHS----------------------------------------
router.get("/Class12-maths-sol", function (req, res) {
   res.render("specimen-solutionsub/2021-22/Term-2/class12iscmaths-sol" , {title:"Class 12 maths SPECIMEN SOLUTIONS"});
 });
 
 //PHYSICS---------------------------------------------
 router.get("", function (req, res) {
   res.render("specimen-solutionsub/2021-22/Term-2/class12cbsemaths-sol" , {title:"Class 10 maths CBSE SPECIMEN SOLUTIONS"});
 });
 
 //CHEMISTRY---------------------------------------------
 router.get("/Class12ISC-chem-sol", function (req, res) {
   res.render("specimen-solutionsub/2021-22/Term-2/class12isc-chem-sol" , {title:"Class 12 chemistry ISC SPECIMEN SOLUTIONS"});
 });
 
 //BIOLOGY----------------------------------------------------
 router.get("", function (req, res) {
   res.render("specimen-solutionsub/2021-22/Term-2/class10cbsemaths-sol" , {title:"Class 10 maths CBSE SPECIMEN SOLUTIONS"});
 });
 
 //COMPUTERS-------------------------------------------------------
 router.get("/Class12-comp-sol", function (req, res) {
   res.render("specimen-solutionsub/2021-22/Term-2/class12iscomp-sol",{title:"Class 12 Computers ISC JAVA 2022 SPECIMEN SOLUTIONS"});
 });


  //CLASS 12TH CBSE
                                                     
router.get("/Class12CBSE-maths-sol", function (req, res) {
res.render("specimen-solutionsub/2021-22/Term-2/class12cbsemaths-sol" , {title:"Class 12 maths CBSE SPECIMEN SOLUTIONS"});
});

//PHYSICS---------------------------------------------
router.get("", function (req, res) {
 res.render("specimen-solutionsub/class10cbsemaths/class10cbse-maths-sol/class10cbsemaths-sol" , {title:"Class 10 maths CBSE SPECIMEN SOLUTIONS"});
});

//CHEMISTRY---------------------------------------------
router.get("/Class12CBSE-chem-sol", function (req, res) {
 res.render("specimen-solutionsub/2021-22/Term-2/class12cbse-chem-sol" , {title:"Class 12 chemistry CBSE SPECIMEN SOLUTIONS"});
});

//BIOLOGY----------------------------------------------------
router.get("/cbse-bio", function (req, res) {
 res.render("specimen-solutionsub/2021-22/Term-2/class12cbsebio-sol" , {title:"Class 12 biology CBSE SPECIMEN SOLUTIONS"});
});   

// ****************************************************************** //

module.exports = router;