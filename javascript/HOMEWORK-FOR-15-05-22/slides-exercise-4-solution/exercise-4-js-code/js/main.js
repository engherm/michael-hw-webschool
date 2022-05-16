var odds = [];
var evens = [];
var parity;
var specialMsg = ""

var num = prompt("Please enter a whole number");

num = parseInt(num);

// Determine whether num is even or odd
if (num % 2 == 0) {
  parity = "even";
} else {
  parity = "odd";
}

// Separate the numbers up to num to evens and odds 
for(let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    evens.push(i);
  } else {
    odds.push(i);
  }
}

alert(`All odd numbers from 1 to ${num}: ${odds}`);
alert(`All even numbers from 2 to ${num}: ${evens}`);
alert(`The number ${num} is ${parity}.`);