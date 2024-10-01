import { Request, Response } from "express";
import SignUpDTO from "../types/DTO/signUpDTO";
import UserService from "../services/userService";

export const handleSignUp = async (
    req:Request<any,any,SignUpDTO>,
    res :Response
): Promise<void> => {
    try {
        const result =  await UserService.signup(req.body);
        res.status(result.status).json(result)
    } catch (error) {
        console.log(error);
    }
};
export const handleGetAllUsers = async (
    req:Request,
    res :Response
): Promise<void> => {
    try {
        const result =  await UserService.getAll();
        res.status(result.status).json(result.data)
    } catch (error) {
        console.log(error);
    }
};


