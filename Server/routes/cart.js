const router  = require('express').Router();
const Cart = require('../models/Cart');
const {verifyToken,  VerifyTokenAndAdmin, VerifyTokenAndAuthorization} = require('./verifyToken');


// CREATE CART
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try{
      const savedCart = await newCart.save();
      res.status(201).json(savedCart);
    }catch(err){
        res.status(500).json({message: err.message});
    }
})

// UPDATE CART
router.put("/:id",VerifyTokenAndAuthorization, async (req, res) => {
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,
           {
            $set:req.body,
           },
           { new : true }
        );
        res.status(200).json(updatedCart);
    }catch(e){
     res.status(500).json(e);
    }

});


// DELETE CART
router.delete("/:id",VerifyTokenAndAuthorization, async ( req, res)=>{
   try{
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
   }catch(err){
    res.status(500).json(err);
   }
})


// Get User Cart
router.get("/find/:id",VerifyTokenAndAuthorization, async ( req, res)=>{
   try{
    const cart = await Cart.findOne({userId:req.params.id});
    res.status(200).json(cart);
   }catch(e){
    res.status(500).json(e);
   }
});


// Get All Carts
router.get("/",VerifyTokenAndAdmin,async ( req, res)=>{
   try{
    const carts = await Cart.find();
    res.status(200).json(carts);    
   }catch(err){
    res.status(500).json(err);
   }
});

module.exports = router;