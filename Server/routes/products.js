const router  = require('express').Router();
const Product = require('../models/Product');
const {verifyToken,  VerifyTokenAndAdmin, VerifyTokenAndAuthorization} = require('./verifyToken');
// const CryptoJS = require("crypto-js");


// CREATE PRODUCT
router.post("/", VerifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try{
      const saveProduct = await newProduct.save();
      res.status(201).json(saveProduct);

    }catch(err){
        res.status(500).json({message: err.message});
    }
})

// UPDATE PRODUCT
router.put("/:id",VerifyTokenAndAdmin, async (req, res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
           {
            $set:req.body,
           },
           { new : true }
        );
        res.status(200).json(updatedProduct);
    }catch(e){
     res.status(500).json(e);
    }

});


// Delete User
router.delete("/:id", VerifyTokenAndAdmin, async ( req, res)=>{
   try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
   }catch(e){
    res.status(500).json(e);
   }
})


// Get Product
router.get("/find/:id", async ( req, res)=>{
   try{
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
   }catch(e){
    res.status(500).json(e);
   }
});


// Get All Products
router.get("/", async ( req, res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
   try{
    let products;
    if(qNew){
        products = await Product.find().sort({createdAt: -1}).limit(5);
    }else if(qCategory){
            products = await Product.find({
            categories:{
                $in: [qCategory],
            },  
            });
        }else{
            products = await Product.find();
        }
    res.status(200).json(products);    
   }catch(e){
    res.status(500).json(e);
   }
});


module.exports = router;