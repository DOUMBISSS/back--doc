import mongoose from "mongoose";


let productSchema = new mongoose.Schema({
        title:{type:String},
        image:{type:String},
        price:{type:String},
        description:{type:String},
        reference:{type:String},
        brand:{type:String},
        categorie:{type:String}
})

const Product = mongoose.model('Product',productSchema)
export default Product