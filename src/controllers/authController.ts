import {Router } from "express";
import { handleSigninRequset } from "../routes/authRoute";

const router : Router = Router();


router.post("/login", handleSigninRequset);

router.delete('./logout',()=>{})

export default router