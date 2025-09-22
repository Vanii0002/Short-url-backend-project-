import express from "express";
import urlRoute from "./routes/urlRoute.js"
import connection from "./connected.js"
import url from "./moduler/urlModel.js";
const app=express();
const port=8001;

connection.connectMongoDb();

// middlewale

app.use(express.json());

app.use("/url",urlRoute);

app.get("/:shortId",async(req,res)=>{
const shortId=req.params.shortId;

const entry=await url.findOneAndUpdate(
{
    shortId
},{$push:{
 visitHistory:{
 timestamp:Date.now()

 },
},

}

);
res.redirect(entry.redirecturl);
})
app.listen(port,()=>{console.log(`server is running...${port}`)});