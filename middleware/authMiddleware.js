import Service from "../service/authService.js";



const restrictuseronly=async (req,res,next)=>{
const token = req.cookies?.token;
  console.log("All cookies:", req.cookies);   // 👈 yahan check karo cookie aa rahi hai ya nahi
    console.log("Cookie UID:", token);



if(!token) return res.redirect("/login")

const user=Service.getUser(token); 
if(!user) return res.redirect("/login")
    req.user=user;
next();


}

const checkauth =async(req,res,next)=>{
const token = req.cookies?.token;
const user=Service.getUser(token);

    req.user=user;
next();

}

export default {restrictuseronly,checkauth};