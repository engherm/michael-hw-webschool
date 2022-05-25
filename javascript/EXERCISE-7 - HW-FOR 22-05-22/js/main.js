const Users = [
  {
    firstName: "david",
    userName: "david@email.com",
    password: "pass111",
  },

  {
    firstName: "dvora",
    userName: "dvora@email.com",
    password: "pass222",
  },

  {
    firstName: "yocheved",
    userName: "yocheved@email.com",
    password: "pass333",
  },

  {
    firstName: "israel",
    userName: "israel@email.com",
    password: "pass444",
  },
];


const body = document.querySelector('body');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const main = document.querySelector('main');


submitBtn.addEventListener("click", checkCredentials);

function checkCredentials() {
  const inpEmail = (inputEmail.value).toLowerCase();
  const inpPass = inputPassword.value;
  let fName = "";
  inputEmail.value = "";
  inputPassword.value = "";

  for (let i = 0; i < Users.length; i++) {
    const user = Users[i];
    if (inpEmail === user.userName && inpPass === user.password) {
      fName = Users[i].firstName;
      fName = fName[0].toUpperCase() + fName.slice(1);
      const h1 = document.createElement('h1');
      main.style.display = 'none';
      h1.innerText = `Welcome ${fName}!`
      h1.style.color = 'skyblue';
      body.appendChild(h1);
      break;
    }
  }

  if (!fName) {
    alert('Wrong info');
  }
}
