import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()





const DB = process.env.DB

const connection=()=>{

    mongoose.connect(DB).then(()=>{
        console.log("Connected to db")
    }).catch((error)=>{
        console.log( error,"NOt connected")
    })
    
}



export default connection
