import mongoose from "mongoose";

const SportsSchema =new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    productName:{
        type:String
    },
    productSubTitle:{
        type:String
    },
    price:{
        type:Number
    },
    brandName:{
        type:String
    },
    image:{
       
        type: String
    },
    description:{
        type:String
    }
})



const SportWear = mongoose.model('sportwear', SportsSchema);

export default SportWear;