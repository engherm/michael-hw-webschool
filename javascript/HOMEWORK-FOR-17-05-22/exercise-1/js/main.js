function separateVowelsFromConsonants(string) {
  const vowelsAndConsonants = [];
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";
  const vowelsArr = [];
  const consonantsArr = [];
  const len = string.length;
  string = string.toLowerCase();

  for (let i = 0; i < len; i++) {
    if (vowels.includes(string[i])) {
      vowelsArr.push(string[i]);
    } else if (consonants.includes(string[i])) {
      consonantsArr.push(string[i]);
    }
  }

  vowelsArr.sort();
  consonantsArr.sort();
  vowelsAndConsonants.push(vowelsArr, consonantsArr);

  return vowelsAndConsonants;
}

function displayVowelsConsonants(array) {
  const vowelsByComma = array[0].join(", ");
  const consonantsByComma = array[1].join(", ");
  alert(`Your string contains the following vowels: ${vowelsByComma}.
  And the following consonants: ${consonantsByComma}.`);
}


let string = prompt("Please enter a string: ").toString();

const vowelsConsonants = separateVowelsFromConsonants(string);

displayVowelsConsonants(vowelsConsonants);
