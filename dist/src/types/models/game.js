"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Game {
    constructor(playerxid, playeryid) {
        this.playerxid = playerxid;
        this.playeryid = playeryid;
        this.id = (0, uuid_1.v4)();
        this.status = "ongoing";
        this.winner = "draw";
    }
}
exports.default = Game;
