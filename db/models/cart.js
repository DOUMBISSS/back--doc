import mongoose from "mongoose";

let cartSchema = new mongoose.Schema ({
    title:{type:String},
})


export default mongoose.model('Cart',cartSchema)