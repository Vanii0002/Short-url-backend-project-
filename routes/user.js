import express from "express";
import userauth from "../controller/user.js"
const router=express.Router();

router.post("/",userauth.handlesignup)
router.post("/login",userauth.handlelogin)

export default router;