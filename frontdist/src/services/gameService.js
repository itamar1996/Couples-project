"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filleDataLayer_1 = require("../config/filleDataLayer");
const game_1 = __importDefault(require("../types/models/game"));
class GameService {
    static startGame(gameData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { playerXid, playerOid } = gameData;
                if (!playerXid || !playerOid) {
                    console.log("missing detles");
                    return {
                        err: true,
                        message: "missing detles",
                        status: 400
                    };
                }
                const users = yield (0, filleDataLayer_1.getFilleData)("users");
                const playerO = users.find(u => u.id == playerOid);
                const playerX = users.find(u => u.id == playerXid);
                if (!playerO || !playerX) {
                    return {
                        err: true,
                        message: "user/s not found/s",
                        status: 400
                    };
                }
                const newGame = new game_1.default(playerOid, playerXid);
                const games = yield (0, filleDataLayer_1.getFilleData)("games");
                games.push(newGame);
                (0, filleDataLayer_1.saveFilleData)("games", games);
                return {
                    err: false,
                    message: "game created",
                    status: 201,
                    data: { id: newGame.id }
                };
            }
            catch (error) {
                return {
                    err: true,
                    status: 500,
                    data: error
                };
            }
        });
    }
}
exports.default = GameService;
