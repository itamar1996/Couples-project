


const divMainConnction:HTMLDivElement = document.createElement("div");
divMainConnction.classList.add("connction")

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

buttonLogin.textContent = "Login";
const buttonRegister = document.createElement("button");

buttonRegister.textContent = "Register";
divbtn.append(buttonRegister,buttonLogin)
form.append(inputUsername,inputPassword,divbtn);

divMainConnction.appendChild(form);

// divMainConnction.appendChild(h1MainConnction)
const formCreatenew = document.createElement("form");
// formCreatenew.classList.add("form-createnew");

// const inputEmail = document.createElement("input");

// inputEmail.setAttribute("type", "text");

// inputEmail.setAttribute("placeholder", "Email");

// const inputFirstName = document.createElement("input");

// inputFirstName.setAttribute("type", "text");

// inputFirstName.setAttribute("placeholder", "First Name");

// const inputLastName = document.createElement("input");

// inputLastName.setAttribute("type", "text");

// inputLastName.setAttribute("placeholder", "Last Name");

// const buttonRegister = document.createElement("button");

// buttonRegister.textContent = "Register";

// formCreatenew.append(inputEmail, inputFirstName, inputLastName, buttonRegister);

// divMainConnction.appendChild(formCreatenew);


document.body.appendChild(divMainConnction)