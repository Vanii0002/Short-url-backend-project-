import mongoose, { mongo } from "mongoose";
const connectMongoDb=async(req,res)=>{
    try{
  await mongoose.connect("mongodb://127.0.0.1:27017/short-url");
  console.log("Mongo connected successful");
    }

    catch(e)
    {
        console.log("mongo error");
    }
}

export default {connectMongoDb};