const Product = require('../models/productsModel');


exports.createProduct = async ( req, res) => {
    try{
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    }catch (error){
        res.status(500).json({error : error.message});
    }
}

exports.getAllProducts = async (req, res) => {
    try{
        const products = await Product.find();
        if(!products){
            return res.status(404).json({error: "Products not found"});
        }
    res.status(200).json(products)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}