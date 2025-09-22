import  express from "express";
import urlController from "../controller/urlController.js"

const router=express.Router();

router.post("/",urlController.handleGenerateNewShortUrl)

router.get("/ana/:shortId",urlController.handleanalysis)

export default router;