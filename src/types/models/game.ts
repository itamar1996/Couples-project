import { v4 } from "uuid"

export default class Game {
    public id: string
    public status:string
    public winner:string
    constructor(
        public playerxid:string,
        public playeryid:string
    ){
        this.id = v4()
        this.status = "ongoing"
        this.winner = "draw"
    }
}
