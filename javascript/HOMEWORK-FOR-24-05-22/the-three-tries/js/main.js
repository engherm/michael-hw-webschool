const FormElems = {
  username: document.querySelector("#email"),
  password: document.querySelector("#password"),
  button: document.querySelector("button"),
  main: document.querySelector("main"),
};

const Users = [
  {
    username: "meir@mail.com",
    password: "pass123",
    fName: "Meir",
  },
  {
    username: "aharon@mail.com",
    password: "pass123",
    fName: "Aharon",
  },
  {
    username: "naor@mail.com",
    password: "pass123",
    fName: "Naor",
  },
  {
    username: "keren@mail.com",
    password: "pass123",
    fName: "Keren",
  },
  {
    username: "michael@mail.com",
    password: "pass123",
    fName: "Michael",
  },
];

// FOR HOMEWORK
/*=============================*/
let loginTries = 3;  
/*=============================*/

FormElems.button.addEventListener('click', login);
FormElems.username.addEventListener('input', checkValidEmail);

function checkValidEmail() {
  FormElems.username.style.borderColor = 'rgba(0, 0, 0, 0)';
  let x = FormElems.username.value;
  if (x.includes(' ')) {
    FormElems.username.value = x.replace(' ', '');
  }
  if (x.length < 6 || !x.includes('.') || !x.includes('@') ) {
    FormElems.username.style.borderColor = 'red';
  }
}



function login() {
  try {
    FormElems.username.style.borderColor = 'rgba(0, 0, 0, 0)';
    FormElems.password.style.borderColor = 'rgba(0, 0, 0, 0)';
    const username = FormElems.username.value.toLowerCase();
    const password = FormElems.password.value;

    let fName = '';

    // FOR HOMEWORK
    /*========================================*/
    let singularPlural = 'tries' 
    /*========================================*/

    if (username && password) {
      if (username.includes('@') === false || username.includes('.') === false ) {
        throw new Error('Invalid email');
      }
      for (let i = 0; i < Users.length; i++) {
        const u = Users[i];
        if (u.username === username && u.password === password) {
          fName = u.fName;
          break;
        }
      }
      if (fName) {
        const h1 = document.createElement("h1");
        h1.innerText = `Welcome ${fName}`;
        FormElems.main.innerHTML = "";
        FormElems.main.appendChild(h1);
      } else {

        // FOR HOMEWORK 
        /*=======================================================================================*/
        loginTries--;
        if (loginTries == 1) {
          singularPlural = 'try';
        }
        if (loginTries == 0) {
          singularPlural = 'tries';
          FormElems.button.removeEventListener('click', login);
        }
        alert(`Wrong credentials. You have ${loginTries} ${singularPlural} left`);
        /*=======================================================================================*/

      }
    } else {
      if (!username) {
        FormElems.username.style.borderColor = 'red';
      }
      if (!password) {
        FormElems.password.style.borderColor = 'red';
      }
      throw new Error("You must fill the required fields");
    }
  } catch (err) {
    alert(err);
  }
}
