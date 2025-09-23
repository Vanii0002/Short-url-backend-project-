import express from "express";
import urlRoute from "./routes/urlRoute.js"
import connection from "./connected.js"
import url from "./moduler/urlModel.js";
import path from "path";
import urlstate from "./routes/staticRoutes.js";

const app=express();
const port=8001;

connection.connectMongoDb();

app.set("view engine","ejs");
app.set("views",path.resolve("./view"))
// middlewale

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/url",urlRoute);

app.use("/",urlstate);

app.get("/:shortId",async(req,res)=>{
const shortId=req.params.shortId;
  if (shortId === "favicon.ico") return res.status(204).end();
const entry=await url.findOneAndUpdate(
{
    shortId
},{$push:{
 visitHistory:{
 timestamp:Date.now()

 },
},

},
  { new: true } 
);
  console.log("ShortId:", shortId);
  console.log("Entry from DB:", entry);
res.redirect(entry.redirecturl);
})
app.listen(port,()=>{console.log(`server is running...${port}`)});