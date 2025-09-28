import express from 'express';
import mongoose from 'mongoose';
import { type } from 'os';

const urlSchema=mongoose.Schema({
shortId:{type:String,required:true,unique:true},
redirecturl:{type:String,required:true},
visitHistory:[{timestamp:{type:Number}}],
createBy:{
 type:mongoose.Schema.Types.ObjectId,   
 ref:"user",
}

},
{timestamp:true},


);


const url=mongoose.model("url",urlSchema);

export default url;