import { Request, Response } from "express";
import StartGameDTO from "../types/DTO/startGameDTO";
import GameService from "../services/gameService";


export const handleStartGame = async (
    req:Request<any,any,StartGameDTO>,
    res :Response
): Promise<void> => {
    try {
        const result =  await GameService.startGame(req.body);
        res.status(result.status).json(result)
    } catch (error) {
        console.log(error);
    }
};