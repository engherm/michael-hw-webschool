function incrementLetterAmount (arr, char) {
  let len = arr.length;
  for (let i = 0; i < len; i++) { 
    if (arr[i].letter == char) {
      arr[i].amount++;
    }
  }
}

function getCharFreqFromStr(s) {
  const lettersStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // array to hold objects of letters and their frequencies taken from s
  const letters = [];

  // string to indicate which characters of s have already been processed
  let noRepeats = "";

  const len = s.length;

  s = s.toUpperCase();

  // sort the string's characters alphabetically
  s = s.split("").sort().join(""); 

  for (let i = 0; i < len; i++) {
    // if current character is a letter and not in letters array, create new object for it.
    if (lettersStr.includes(s[i]) && !noRepeats.includes(s[i])) {
      const char = {};
      char.letter = s[i];
      char.amount = 1;
      letters.push(char);
      noRepeats += s[i];
    } else {
      incrementLetterAmount(letters, s[i]);
    }
  }
  return letters;
}


let str = prompt("Please enter a string: ").toString();

console.log(getCharFreqFromStr(str));

