
const mongoose=require('mongoose');

const userModel=mongoose.Schema({
     category:{
        type:String,
        required:true
     },
     dateOfSale:{
        type:String,
        required:true
     },
     id:{
        type:Number,
        required:true
     },
     price:{
        type:Number,
        required:true
     },
     sold:{
        type:Boolean,
        required:true
     },
     title:{
        type:String,
        required:true
     }
})
module.exports=mongoose.model("products",userModel)