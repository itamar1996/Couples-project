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
