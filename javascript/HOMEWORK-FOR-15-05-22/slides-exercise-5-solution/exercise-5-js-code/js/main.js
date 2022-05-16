function fillArray() {
  var numsArr = [];
  var currNum;

  // Fill array with data

  alert("Please enter your data numbers one by one (enter -1 to stop): ");

  var i = 1;
  while (true) {
    currNum = parseFloat(prompt(`Please enter your item #${i} (-1 to stop):`));
    if (currNum == -1) {
      break;
    } else {
      numsArr.push(currNum);
      i++;
    }
  }
  return numsArr;
}

function getAverage(num1, num2) {
  return (num1 + num2) / 2;
}

function main() {
  var avgsArr = fillArray();
  var currAvg = avgsArr[0];
  var lenArr = avgsArr.length;
  var msg;

  if (currAvg) {
    for (let i = 1; i < lenArr; i++) {
      if (avgsArr[i] == 0) {
        break;
      } else {
        currAvg = getAverage(currAvg, avgsArr[i]);
      }
    }
  } else {
      if (currAvg == 0) {
        msg = "Your array starts with 0";
      }
      else {
        msg = "The first item in your array is not a number. Please enter numbers.";
      }
      currAvg = msg;
  }
  alert(currAvg);
}

main();
