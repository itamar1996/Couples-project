import { getFilleData } from "../config/filleDataLayer";
import LoginDTO from "../types/DTO/loginDTO"
import ResponseData from "../types/DTO/responce";
import SigninResponseDTO from "../types/DTO/signinResponseDTO";
import TokenPayloadDTO from "../types/DTO/tokenPayloadDTO"
import jwt from "jsonwebtoken";
import User from "../types/models/user";





export default class AuthService {
    public static async login(userData1:LoginDTO): Promise<ResponseData<SigninResponseDTO|unknown>>{
        try {
        const { username, password } = userData1        
        if(!password||!username)
            {
                return {
                    err:true,
                    message:"missing detles",
                    status:400
                }
            }
            let users:User[]= await getFilleData<User>('users') as User[];
            const userData = users.find(u => u.username == username);
            if (!userData) {
                return {
                    err: true,
                    message: "user not found",
                    status: 400
                };
            }
            
            const user = new User(userData.username);
            user.id = userData.id;
            user["password"] = userData["password"]; 
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