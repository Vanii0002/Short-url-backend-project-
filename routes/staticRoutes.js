import  express from "express";
const router=express.Router();

router.get("/home",(req,res)=>{
return res.render("home");


})

router.get("/about",(req,res)=>{
return res.render("about");


})

router.get("/contact",(req,res)=>{
return res.render("contact");


})
export default router;