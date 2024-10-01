import { Router } from "express";
import { handleGetAllUsers, handleSignUp } from "../routes/userRoute";
// import verifyUser from "../middllwhers/verifyUser";

const router : Router = Router();

router.post("/signup", handleSignUp);

router.get('/',handleGetAllUsers)

router.get('./:id',()=>{})

router.post('./',()=>{})

router.patch('./:id',()=>{})

router.delete('./:id',()=>{})




export default router