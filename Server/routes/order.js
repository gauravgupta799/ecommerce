const router  = require('express').Router();
const Order = require('../models/Order');
const {verifyToken,  VerifyTokenAndAdmin, VerifyTokenAndAuthorization} = require('./verifyToken');


// Place Order
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try{
      const placedOrder = await newOrder.save();
      res.status(201).json(placedOrder);
    }catch(err){
        res.status(500).json({message: err.message});
    }
})

// Update Order Only Admin
router.put("/:id",VerifyTokenAndAdmin, async (req, res) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,
           {
            $set:req.body,
           },
           { new : true }
        );
        res.status(200).json(updatedOrder);
    }catch(e){
     res.status(500).json(e);
    }
});


// Delete Order Only Admin
router.delete("/:id",VerifyTokenAndAdmin, async ( req, res)=>{
   try{
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been canceled");
   }catch(err){
    res.status(500).json(err);
   }
})

// Get User Orders
router.get("/find/:id",VerifyTokenAndAuthorization, async ( req, res)=>{
   try{
    const orders = await Order.find({userId:req.params.id});
    res.status(200).json(orders);
   }catch(e){
    res.status(500).json(e);
   }
});


// Get All Orders
router.get("/",VerifyTokenAndAdmin,async ( req, res)=>{
   try{
    const orders = await Order.find();
    res.status(200).json(orders);    
   }catch(err){
    res.status(500).json(err);
   }
});

// Get Monthly Income
router.get("/income",VerifyTokenAndAdmin,async ( req, res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1 ));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try{
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth}}},
            { 
                $project:{
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }, 
            },
            {
                $group:{
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;