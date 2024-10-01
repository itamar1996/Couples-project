import { getFilleData, saveFilleData } from "../config/filleDataLayer";
import ResponseData from "../types/DTO/responce";
import StartGameDTO from "../types/DTO/startGameDTO";
import Game from "../types/models/game";
import User from "../types/models/user";

export default class GameService{
    public static async startGame(gameData:StartGameDTO):Promise<ResponseData<{id:string}>>{
        try {
            const {playerXid,playerOid} = gameData
            if(!playerXid||!playerOid)
            {
                console.log("missing detles");
                
                return {
                    err:true,
                    message:"missing detles",
                    status:400
                }
            }
            const users:User[] = await getFilleData("users") as User[]
            const playerO = users.find(u=>u.id == playerOid)
            const playerX = users.find(u=>u.id == playerXid)
            if(!playerO||!playerX)
                {
                    return {
                        err:true,
                        message:"user/s not found/s",
                        status:400
                    }
                }
            const newGame = new Game(playerOid,playerXid)
            const games:Game[] =await getFilleData<Game>("games") as Game[];
            games.push(newGame)
            saveFilleData("games",games)
            return {
                err:false,
                message:"game created",
                status:201,
                data:{id : newGame.id}
            }
        } catch (error) {
            return {
                err:true,
                status:500,
                data:error
            }
        }
    }
}