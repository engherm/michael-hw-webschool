function getSum(numsArr) {
  var sum = 0;
  var len = numsArr.length;

  for (let i = 0; i < len; i++) {
    sum += numsArr[i];
  }

  return sum;
}

const nums = [];
var total = 0;

var num = parseInt(prompt("Please enter a positive number: "));

for (let i = 1; i <= num; i++) {
  if (i % 5 != 0) {
    continue;
  } else {
    nums.push(i);
  }
}

for (let i = 1; i <= num; i++) {
  if (i % 8 != 0) {
    continue;
  } else {
    nums.push(i);
  }
}

if (nums.length) {
  total = getSum(nums);
}

alert(total);

