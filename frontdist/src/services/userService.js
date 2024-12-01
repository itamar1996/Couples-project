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
const user_1 = __importDefault(require("../types/models/user"));
class UserService {
    static signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = user;
                if (!password || !username) {
                    console.log("missing detles");
                    return {
                        err: true,
                        message: "missing detles",
                        status: 400
                    };
                }
                const newuser = new user_1.default(username);
                yield newuser.hashPassword(password);
                const users = yield (0, filleDataLayer_1.getFilleData)("users");
                users.push(newuser);
                (0, filleDataLayer_1.saveFilleData)("users", users);
                return {
                    err: false,
                    message: "user sign up ",
                    status: 201,
                    data: { id: newuser.id }
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
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield (0, filleDataLayer_1.getFilleData)("users");
                return {
                    err: false,
                    message: "user sign up ",
                    status: 201,
                    data: users
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
exports.default = UserService;
