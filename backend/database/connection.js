import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()





const DB =  "mongodb+srv://gcyogesh962:gcyogesh962@cluster0.q5u54kt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connection=()=>{

    mongoose.connect(DB).then(()=>{
        console.log("Connected to db")
    }).catch((error)=>{
        console.log( error,"NOt connected")
    })
    
}



export default connection
