import shortid from "shortid"
import url from "../moduler/urlModel.js";
const handleGenerateNewShortUrl=async(req,res)=>{
const shortId=shortid.generate();
const body=req.body;

// validation
if(!body.url)
    return res.status(400).json({error:'url is required'});

// save the mongo 
await url.create({
shortId,
redirecturl:body.url,
visitHistory:[]

});
return res.render("home",{
  id:shortId
});

}

const handleanalysis=async(req,res)=>{

const shortId=req.params.shortId;


const result=await url.findOne({shortId});

  if (!result) {
    console.log(result);
    return res.status(404).json({ error: "Short URL not found" });
    
  }
   return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory, 
    });
}

export default {handleGenerateNewShortUrl,handleanalysis}

