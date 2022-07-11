const displayStudentsBtn = document.getElementById('display-students-btn');
const tbody = document.getElementById('tbody');

function createHTML(arr) {
  let toAppend = '';
  arr.forEach(makeTableRow);
  function makeTableRow(x, i) {
    toAppend += 
    `<tr>
      <td>${x.id}</td>
      <td>${x.fullName}</td>
      <td>${x.age}</td>
      <td>${x.gpa}</td>
    </tr>
    `;
  }
  tbody.innerHTML = toAppend;
}

displayStudentsBtn.addEventListener('click', () => {
  fetch('http://localhost:9876/students-display-btn')
  .then(res => res.json())
  .then(res => createHTML(res))
});