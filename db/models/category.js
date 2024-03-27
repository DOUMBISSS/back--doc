import mongoose from "mongoose";



let categorySchema = new mongoose.Schema ({
        name:String,
        product_id:[{type : mongoose.Types.ObjectId , ref: "Product"}]
})


export default mongoose.model('Category',categorySchema)