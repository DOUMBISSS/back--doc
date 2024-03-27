import mongoose from "mongoose";


let laptopSchema = new mongoose.Schema({
        title:{type:String},
        image:{type:String},
        price:{type:String},
        description:{type:String},
        reference:{type:String},
        brand:{type:String},
        categorie:{type:String}
})

const Laptop = mongoose.model('Laptop',laptopSchema)
export default  Laptop