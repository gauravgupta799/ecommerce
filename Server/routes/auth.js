const router = require('express').Router();
const User  = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

// Register
router.post("/register", async (req, res) => {
    const {username,email,password} = req.body;
    // if(username === "" | email === "" || password === ""){
    //     return res.status(400).json("Please input the all fields")
    // }
    const newUser = new User({
        username,email,
        password:CryptoJS.AES.encrypt(password,process.env.SECRET_KEY).toString(),
    });
   try{
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
   }catch(err){
    res.status(500).json(err);
   }
});


// Login
router.post("/login", async (req, res) => {
   try{
    const user = await User.findOne({email:req.body.email});
    !user && res.status(401).json("Invalid email or password");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if(originalPassword !== req.body.password){
        res.status(401).json("Invalid password or email");
    } 
    const accessToken = jwt.sign({ id:user._id,isAdmin:user.isAdmin},process.env.SECRET_KEY,{expiresIn:'24h'})
    
    const {password, ...others} = user._doc;
    res.status(200).json({...others, accessToken});

   }catch(err){
    res.status(500).json(err);
   }
})

module.exports = router;