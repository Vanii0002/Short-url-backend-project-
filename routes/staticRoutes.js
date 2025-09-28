import  express from "express";
import url from "../moduler/urlModel.js";
import users from "../moduler/userModel.js";
import middlewale from "../middleware/authMiddleware.js";

const router=express.Router();

router.get("/home", middlewale.restrictuseronly,async (req, res) => {
  try {
    // check if user is logged in
    if (!req.user) return res.redirect("/login");

    // fetch all URLs created by the logged-in user
    const allurls = await url.find({ createBy: req.user });
    const userinfo=await users.find({});
  console.log(allurls,userinfo);
    // render home.ejs and pass URLs
    return res.render("home", { url: allurls, user: req.user });
  } catch (err) {
    console.error("Error fetching URLs:", err);
    return res.status(500).send("Internal Server Error");
  }
});


router.get("/about",(req,res)=>{
return res.render("about");


})

router.get("/contact",(req,res)=>{
return res.render("contact");


})

router.get("/signup",(req,res)=>{

    return res.render("signup");
})

router.get("/login",(req,res)=>{

  return res.render("login");

})
export default router;