import { getFilleData } from "../config/filleDataLayer";
import LoginDTO from "../types/DTO/loginDTO"
import ResponseData from "../types/DTO/responce";
import SigninResponseDTO from "../types/DTO/signinResponseDTO";
import TokenPayloadDTO from "../types/DTO/tokenPayloadDTO"
import jwt from "jsonwebtoken";
import Player from "../types/models/player";



export default class AuthService {
    public static async login(userData:LoginDTO): Promise<ResponseData<SigninResponseDTO|unknown>>{
        try {
        const { username, password } = userData        
        if(!password||!username)
            {
                return {
                    err:true,
                    message:"missing detles",
                    status:400
                }
            }
        const users:Player[] =await getFilleData("players") as Player[];
        const user = users.find(u=>u.username == username)
        if (!user)
            {
                return {
                    err:true,
                    message:"user not found",
                    status:400
                }
            }            
        if(!await user.comparePassword(password)){
                    return {
                        err:true,
                        message:"wrong password",
                        status:401
                }        
            } 
        const payload:TokenPayloadDTO = {
            username,
            id: user.id,
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
            expiresIn:"10m"
          })          
          return {
            err:false,
            status:200,
            data:{
                token
            }
          }
        }
        catch(error)
        {
            return {
                err: true,
                message: "Missing madatory data",
                status: 500,
                data:error
              };
        }
    }
    public static async logout(userData:LoginDTO):Promise<void>{
        
    }
 }