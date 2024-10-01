import { getFilleData, saveFilleData } from "../config/filleDataLayer";
import ResponseData from "../types/DTO/responce";
import SignUpDTO from "../types/DTO/signUpDTO";
import User from "../types/models/user";

export default class UserService{
    public static async signup(user:SignUpDTO):Promise<ResponseData<{id:string}>>{
        try {
            const {username,password} = user
            if(!password||!username)
            {
                console.log("missing detles");
                
                return {
                    err:true,
                    message:"missing detles",
                    status:400
                }
            }
            const newuser = new User(username);
            await newuser.hashPassword(password);
            const users:User[] = await getFilleData("users") as User[]
            users.push(newuser)
            saveFilleData("users",users)
            return {
                err:false,
                message:"user sign up ",
                status:201,
                data:{id : newuser.id}

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