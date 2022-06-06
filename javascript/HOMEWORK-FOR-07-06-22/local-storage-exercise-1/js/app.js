// Fetching DOM Elements
const $ = {
  email: document.querySelector("#email"),
  pass: document.querySelector("#pass"),
  button: document.querySelector("button"),
  main: document.querySelector("main"),
};

let usersDB;

function init() {
  let usersJSON = localStorage.users;
  if (usersJSON) {
    usersDB = JSON.parse(usersJSON);
  } else {
    usersDB = [
      {
        name: "Albert Einstein",
        email: "einstein@mail.com",
        pass: "pass111",
        token: "111",
      },
      {
        name: "Marie Curie",
        email: "mariecurie@mail.com",
        pass: "pass222",
        token: "222",
      },
      {
        name: "Isaac Newton",
        email: "newton@mail.com",
        pass: "pass333",
        token: "333",
      },
      {
        name: "Galileo Galilei",
        email: "galileo@mail.com",
        pass: "pass444",
        token: "444",
      },
      {
        name: "Antoine Lavoisier",
        email: "lavoisier@mail.com",
        pass: "pass555",
        token: "555",
      },
      {
        name: "Charles Babbage",
        email: "babbage@mail.com",
        pass: "pass666",
        token: "666",
      },
      {
        name: "Alan Turing",
        email: "turing@mail.com",
        pass: "pass777",
        token: "777",
      },
      {
        name: "Grace Hopper",
        email: "hopper@mail.com",
        pass: "pass888",
        token: "888",
      },
      {
        name: "Ada Lovelace",
        email: "lovelace@mail.com",
        pass: "pass999",
        token: "999",
      },
    ];
    localStorage.users = JSON.stringify(usersDB);
  }
}

init();



let userJSON = localStorage.user;
let user = userJSON ? JSON.parse(userJSON) : {};

function verifyUser(userBRWS, verifyMethod) {
  for (let i = 0; i < usersDB.length; i++) {
    if (
      userBRWS.email === usersDB[i].email &&
      userBRWS[verifyMethod] === usersDB[i][verifyMethod]
    ) {
      const token = getUniqueToken();
      user.token = token;
      user.email = usersDB[i].email;
      user.name = usersDB[i].name;
      usersDB[i].token = token;
      updateLS("user", user);
      updateLS("users", usersDB);
      return welcomeMsg();
    }
  }
  verifyMethod == "pass" ? errorMsg() : localStorage.removeItem("user");
  // If we get here and the verification method is by password, then we send error message,
  // but if it's by token and we get here, it means the token is not compatible, so it is useless,
  // and refreshing the page keeps triggering the error message, so we delete the user. So we won't
  // get the annoying error message and so it won't keep trying to verify the token.
}

function welcomeMsg() {
  $.main.innerHTML = `Welcome, ${user.name}`;
}

function errorMsg() {
  alert("Wrong Credentials");
  $.email.value = "";
  $.pass.value = "";
}

function updateLS(key, obj) {
  localStorage[key] = JSON.stringify(obj);
}

$.button.addEventListener("click", () => {
  const emailForm = $.email.value;
  const passForm = $.pass.value;
  const userForm = { email: emailForm, pass: passForm };
  verifyUser(userForm, "pass");
});




  if (user.email && user.token) verifyUser(user, "token");

function getUniqueToken() {
  const alphaNumeric =
    "A3aB6bCcD4dEe8FfGgHhIiJj2KkL5lMmNn9OoP7pQqRrS1sTtUuVvWwX0xYyZz";
  const ts = Date.now().toString();
  let token = "";
  const strLen = alphaNumeric.length;

  for (const ch of ts) {
    const randomIndex = Math.floor(Math.random() * strLen);
    token += alphaNumeric[randomIndex] + ch;
  }
  return token;
}



