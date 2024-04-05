const mongoose=require('mongoose');

const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://dibakardey63:lrik4MCSCmpDzRLS@recipes.rglhoml.mongodb.net/roxi-task');
        console.log("Database connected");
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB