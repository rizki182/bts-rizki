const express = require("express");
const router = express.Router();
const jwt_helper = require("../helpers/jwt_helper");

// router.get("/", (req, res, next) => {
//   let result = {
//     code: null,
//     errors: null
//   };

//   try {
//     // validate jwt
//     result = jwt_helper.validate(req.headers)
//     if(result.code != 200) throw new Error(result);
    
//     // continue request if all middleware status is success else response with error
//     next();

//   } catch (err){

//     // if middleware status is failed
//     if(result.code && result.errors){
//       res.status(result.code).json(result.errors);
//     } 

//     // internal server error
//     else {
//       res.status(500).json({"error": "Something went wrong"});
//     }
//   }
// });

module.exports = router;