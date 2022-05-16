var num = parseInt(prompt("Enter a number to check if it is a palindrome: "));
var numCopy = num;
var reversed = "";
var last;
var isPalindrome = false;

while (numCopy > 0) {
  last = numCopy % 10;
  reversed += last;
  numCopy = (numCopy - last) / 10;
}

if (reversed == num) {
  isPalindrome = true;
}

alert(`Is ${num} palindromic? ${isPalindrome}`);
