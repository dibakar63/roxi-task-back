const userModel=require("./model");

const getAllData=async(req,res)=>{
    let data;
   try {
     data=await userModel.find()
     res.status(201).send({
        success:true,message:' transaction found sucessfully',
        data
     })
    
   } catch (error) {
    res.status(500).send({
        success:false,message:'No transaction found',
        data
     })
   }
}

module.exports.getAllData=getAllData;

