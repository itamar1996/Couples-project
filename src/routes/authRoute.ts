import { Request, Response } from "express";
import LoginDTO from "../types/DTO/loginDTO";
import AuthService from "../services/authService";


export const handleSigninRequset = async(
    req:Request<any,any,LoginDTO>,
    res:Response
):Promise<void>=>{
    try {
        const result = await AuthService.login(req.body);
        res.cookie("token",result.data).status(result.status!).json(result);   
    } catch (error) {
        
    }
}

export const handleSignOutRequset = async(
    req:Request<any,any,LoginDTO>,
    res:Response
):Promise<void>=>{
    try {
        const result = await AuthService.login(req.body);
        res.cookie("token",result.data).status(result.status!).json(result);   
    } catch (error) {
        
    }
}