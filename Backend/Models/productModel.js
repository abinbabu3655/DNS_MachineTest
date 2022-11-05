const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({
    
    productname: {
        type:String,
        required:true,
        
    },
    category:{
        type:ObjectId,
        required:true,
        ref:'category'
    },
    subcategory:{
        type:ObjectId,
        required:true,
        ref:'subcategory'
    },
    subSubcategory:{
        type:ObjectId,
        required:true,
        ref:'subcategory'
    },
    price:{
        type:Number,
        
    },   

},
{timestamps:true})



const Products = mongoose.model('Products', productSchema)
module.exports = Products