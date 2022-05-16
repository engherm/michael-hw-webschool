function getAveragePassed(itemsArr, itemsCount) {
  let sumPassed = 0;
  let len = itemsArr.length;

  for (let i = 0; i < len; i++) {
    if (itemsArr[i] >= 70) {
      sumPassed += itemsArr[i];
    }
  }

  return sumPassed / itemsCount;
}

function getAverageFailed(itemsArr, itemsCount) {
  let sumFailed = 0;
  let len = itemsArr.length;

  for (let i = 0; i < len; i++) {
    if (itemsArr[i] < 70) {
      sumFailed += itemsArr[i];
    }
  }

  return sumFailed / itemsCount;
}

var studentsNum = 10;
const studentNames = [];
const studentGrades = [];
var passedCount = 0;
var auxCount = 0;
var failedCount;
var passedNames = "";
var comma=",";
var averagePassed;
var averageFailed;

// Fill the arrays and get a total count of passing students
for (let i = 1; i <= studentsNum; i++) {
  let studentName = prompt("Please enter the name of the student: ");
  let studentGrade = parseInt(prompt("Please enter the grade of the student: "));
  studentNames.push(studentName);
  studentGrades.push(studentGrade);
  if (studentGrade >= 70) {
    passedCount++;
  }
}

// Go over the grades array and for each passing grade 
// concat the respective student name to passedNames
// Use an auxillary counter to know when last passing student was reached
// so not to add a comma after the last student in the list and to break.
for (let i = 0; i < studentsNum; i++) {
  if (studentGrades[i] < 70) {
    continue;
  }
  auxCount++;
  if (auxCount == passedCount ) {
    comma = "";
  } 
  passedNames += studentNames[i] + comma;
  if (comma == "") {
    break;
  }
}

averagePassed = getAveragePassed(studentGrades, passedCount);
failedCount = studentsNum - passedCount;
averageFailed = getAverageFailed(studentGrades, failedCount);


alert(passedNames);
alert(averagePassed);
alert(averageFailed);