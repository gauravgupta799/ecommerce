const router  = require('express').Router();
const User = require('../models/User');
const {verifyToken, VerifyTokenAndAuthorization} = require('./verifyToken');
const CryptoJS = require("crypto-js");


router.put("/:id", VerifyTokenAndAuthorization, async (req, res) => {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
            ).toString()
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
           {
            $set:req.body,
           },
           { new : true }
        );
        res.status(200).json(updatedUser);

    }catch(e){
     res.status(500).json(e);
    }

})


module.exports = router;