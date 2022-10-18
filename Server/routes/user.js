const router  = require('express').Router();
const User = require('../models/User');
const {verifyToken,  VerifyTokenAndAdmin, VerifyTokenAndAuthorization} = require('./verifyToken');
const CryptoJS = require("crypto-js");

// Update User
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

});

// Delete User
router.delete("/:id",VerifyTokenAndAuthorization, async ( req, res)=>{
   try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
   }catch(e){
    res.status(500).json(e);
   }
})

// Get User
router.get("/find/:id", VerifyTokenAndAdmin, async ( req, res)=>{
   try{
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc
    res.status(200).json(user);
   }catch(e){
    res.status(500).json(e);
   }
});


// Get All Users
router.get("/", VerifyTokenAndAdmin, async ( req, res)=>{
    const query = req.query.new;
   try{
    const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
    res.status(200).json(users);
   }catch(e){
    res.status(500).json(e);
   }
});

// Get User Stats
router.get("/stats", VerifyTokenAndAdmin, async ( req, res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
   try{
    const data = await User.aggregate([
        { $match : { createdAt: { $gte: lastYear} } },
        {
            $project:{
                month:{ $month: "$createdAt" },
            },
        },
        { 
            $group:{ 
                _id: "$month",
                total: { $num: 1},
            },
        },
    ]);
    res.status(200).json(data);
   }catch(e){
    res.status(500).json(e);
   }
});

module.exports = router;