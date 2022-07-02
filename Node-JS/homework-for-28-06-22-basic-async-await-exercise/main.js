const p = document.querySelector('p');

function func1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      p.style.color = 'red';
      resolve();
    }, 5000);
  });
} 

function func2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      p.style.fontSize = '50px';
      resolve();
    }, 5000);
  });
}

function func3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      p.style.fontStyle = 'italic';
      resolve();
    }, 5000);
  });
}

function func4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      p.style.color = 'purple';
      resolve();
    }, 5000);
  });
}

async function main() {
  await func1();
  await func2();
  await func3();
  await func4();
}

main();
