


const divMainConnction:HTMLDivElement = document.querySelector(".connction")!
const divListPlayer:HTMLDivElement = document.createElement("div")!
divListPlayer.classList.add("list-player");
divListPlayer.textContent = "List Player";



const h1MainConnction: HTMLHeadingElement = document.createElement("h1");
h1MainConnction.textContent = "New registration";

const form = document.createElement("form");

const inputUsername = document.createElement("input");

inputUsername.setAttribute("type", "text");

inputUsername.setAttribute("placeholder", "Username");

const inputPassword = document.createElement("input");

inputPassword.setAttribute("type", "password");

inputPassword.setAttribute("placeholder", "Password");
const divbtn = document.createElement("div");
divbtn.classList.add("btn-div")

const buttonLogin = document.createElement("button");
buttonLogin.addEventListener("click",async () =>{
    console.log("Login")
    const result = await fetch(`http://localhost:3000/users`)
    const data = await result.json();
    console.log(data)
    
})
buttonLogin.textContent = "Login";
const buttonRegister = document.createElement("button");

buttonRegister.textContent = "Register";
buttonRegister.addEventListener("click", () =>{
    const section:Element = document.querySelector(".section")!;
    const divConnect = document.querySelector(".connction")
    divConnect?.remove()
    section.classList.remove("section");
    section.classList.add("btn-section");  
    section.append(divListPlayer)

})
divbtn.append(buttonRegister,buttonLogin)
form.append(inputUsername,inputPassword);

divMainConnction.append(form,divbtn);

const divforTikTuk = document.createElement("div");

divforTikTuk.classList.add("tik-tak");

const spanTikTak = document.createElement("span");

spanTikTak.textContent = "Tik-Tak-Toe";


divforTikTuk.appendChild(spanTikTak);






document.body.append(divMainConnction)