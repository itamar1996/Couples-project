"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authController_1 = __importDefault(require("./controllers/authController"));
const userController_1 = __importDefault(require("./controllers/userController"));
const gameController_1 = __importDefault(require("./controllers/gameController"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // to get the req.body
app.use((0, cookie_parser_1.default)()); // to get the req.cookie(s)
app.use('/auth', authController_1.default);
// app.use('/todos',verifyUser,todoController)
app.use('/users', userController_1.default);
app.use('/games', gameController_1.default);
app.listen(process.env.port, () => console.log(`Server is up and running, feel free to visit at http://localhost:${process.env.PORT}`));
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const divMainConnction = document.querySelector(".connction");
const divListPlayer = document.createElement("div");
divListPlayer.classList.add("list-player");
divListPlayer.textContent = "List Player";
const h1MainConnction = document.createElement("h1");
h1MainConnction.textContent = "New registration";
const form = document.createElement("form");
const inputUsername = document.createElement("input");
inputUsername.setAttribute("type", "text");
inputUsername.setAttribute("placeholder", "Username");
const inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("placeholder", "Password");
const divbtn = document.createElement("div");
divbtn.classList.add("btn-div");
const buttonLogin = document.createElement("button");
buttonLogin.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Login");
    const result = yield fetch(`http://localhost:3000/users`);
    const data = yield result.json();
    console.log(data);
}));
buttonLogin.textContent = "Login";
const buttonRegister = document.createElement("button");
buttonRegister.textContent = "Register";
buttonRegister.addEventListener("click", () => {
    const section = document.querySelector(".section");
    const divConnect = document.querySelector(".connction");
    divConnect === null || divConnect === void 0 ? void 0 : divConnect.remove();
    section.classList.remove("section");
    section.classList.add("btn-section");
    section.append(divListPlayer);
});
divbtn.append(buttonRegister, buttonLogin);
form.append(inputUsername, inputPassword);
divMainConnction.append(form, divbtn);
const divforTikTuk = document.createElement("div");
divforTikTuk.classList.add("tik-tak");
const spanTikTak = document.createElement("span");
spanTikTak.textContent = "Tik-Tak-Toe";
divforTikTuk.appendChild(spanTikTak);
document.body.append(divMainConnction);
