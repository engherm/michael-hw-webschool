const codeDigits = [
  { codeDigit: document.getElementById("digit-1") },
  { codeDigit: document.getElementById("digit-2") },
  { codeDigit: document.getElementById("digit-3") },
  { codeDigit: document.getElementById("digit-4") },
];

let digitsNum = 0;
let errorsNum = 0;
let message = "";
let timeoutId;
const timeoutIdArr = [];

getCodeBtn = document.getElementById("get-code-btn");
header = document.querySelector("header");
main = document.querySelector("main");
keypadBtns = document.querySelectorAll(".keypad-btns");

getCodeBtn.addEventListener("click", processCode);

const inpCodeDigits = []; // Array to hold the code digits entered on the keypad
for (let i = 0; i < keypadBtns.length; i++) {
  keypadBtns[i].addEventListener("click", getInpCode);
}

// Coloring a button when clicked
function colorBtn(btn) {
  btn.style.backgroundColor = `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
  )`;
}

// Reseting after 3 seconds passed since last button click
function startTimer(arr) {
  timeoutId = setTimeout(() => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.backgroundColor = "white";
    }
    digitsNum = 0;
    inpCodeDigits.length = 0;
  }, 3000);
}

function getInpCode() {
  startTimer(keypadBtns);
  colorBtn(this);
  inpCodeDigits.push(this.innerText);
  digitsNum++;
  if (digitsNum == 4) {
    clearTimeout(timeoutId);
    verifyCode(inpCodeDigits);
  } 
}

function verifyCode(digitsArr) {
  let success = 1;
  for (let i = 0; i < 4; i++) {
    if (codeDigits[i].codeDigit.value != digitsArr[i]) {
      success = 0;
      errorsNum++;
      break;
    }
  }
  createReport(success);
}

function createReport(isSuccessful) {
  if (isSuccessful) {
    message = "Success!";
  } else {
    if (errorsNum == 3) {
      message = "Calling The Police";
    } else {
      message = `Error no. ${errorsNum}`;
      inpCodeDigits.length = 0;
      digitsNum = 0;
    }
  }
  sendReport();
}

function sendReport() {
  setTimeout(function () {
    alert(message);
    for (let i = 0; i < keypadBtns.length; i++) {
      keypadBtns[i].style.backgroundColor = "white";
    }
  }, 10);
}

function processCode() {
  header.style.display = "none";
  main.style.display = "block";
}
