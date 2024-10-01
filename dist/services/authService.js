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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    static login(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = userData;
                if (!password || !username) {
                    return {
                        err: true,
                        message: "missing detles",
                        status: 400
                    };
                }
                const users = yield (0, filleDataLayer_1.getFilleData)("players");
                const user = users.find(u => u.username == username);
                if (!user) {
                    return {
                        err: true,
                        message: "user not found",
                        status: 400
                    };
                }
                if (!(yield user.comparePassword(password))) {
                    return {
                        err: true,
                        message: "wrong password",
                        status: 401
                    };
                }
                const payload = {
                    username,
                    id: user.id,
                };
                const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: "10m"
                });
                return {
                    err: false,
                    status: 200,
                    data: {
                        token
                    }
                };
            }
            catch (error) {
                return {
                    err: true,
                    message: "Missing madatory data",
                    status: 500,
                    data: error
                };
            }
        });
    }
    static logout(userData) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = AuthService;
