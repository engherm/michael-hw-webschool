const removeBtn = document.getElementById('remove-btn');
const removedStudentDetails = document.getElementById(
  'removed-student-details'
);

function removeStudent(arr) {
  const firstStudent = arr.shift();

  fetch('http://localhost:9876/json', {
    method: 'POST',
    body: JSON.stringify(arr), 
    headers: {'content-type': 'application/json; charset=UTF-8'}
  });
  // Yishai,
  // I want to send the jsonified updated array
  // back to the server so it will get updated in the DB.
  // the server will get the arr and write it to the students.json
  // How do I connect from here to the server?
  // use fetch with post or is there another way?
  removedStudentDetails.innerHTML = 
  `<h2>
    Removed student: 
    id - ${firstStudent.id}, 
    name - ${firstStudent.fullName}
  </h2>
  `
}

removeBtn.addEventListener('click', () => {
  fetch('http://localhost:9876/students-removal-btn')
    .then((res) => res.json())
    .then((res) => removeStudent(res));
});
