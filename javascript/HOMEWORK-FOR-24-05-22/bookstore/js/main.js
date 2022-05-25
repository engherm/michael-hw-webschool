const main = document.querySelector("main");
const form = document.querySelector("#form");
const toggleBtn = document.querySelector("#toggle-btn");
const bookAdder = document.querySelector("#book-adder");
const removalBtns = document.querySelectorAll(".removal-btns");

const books = [
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
  {
    title: "the alchemist",
    author: "paulo coelho",
    price: "$8.89",
    description:
      "Combining magic, mysticism, wisdom and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations",
    categories: [
      "metaphysical & visionary fiction",
      "Classic Literature & Fiction",
      "Fantasy Action & Adventure",
    ],
    image: "the-alchemist.jpg",
  },
];

form.style.display = "none";
toggleBtn.addEventListener("click", toggleForm);
bookAdder.addEventListener("click", addBook);

for (let i = 0; i < removalBtns.length; i++) {
  removalBtns[i].addEventListener("click", removeBook);
}


/* ================================================================================ */
/*  M E I R ---->>>> Y O U R  A T T E N T I O N    R E Q U I R E D    H E R E       */
//*********************************************************************************
//
// I didn't use 'this' here but used 'toggledBtn'
// instead since I needed to use this function ('toggleForm') inside
// the 'addBook' function to "sort of" simulate clearing the form.
// If I use 'this' I lose the reference to 'toggleBtn'.
// 
//*********************************************************************************
function toggleForm() {
  if (form.style.display == "none") {
    form.style.display = "block";
    toggleBtn.innerText = "Hide Form";
  } else {
    form.style.display = "none";
    toggleBtn.innerText = "Show Form";
  }
}

function addBook() {
  const FormElems = {
    image: document.querySelector('#image'),
    title: document.querySelector('#title'),
    author: document.querySelector('#author'),
    description: document.querySelector('#description'),
    categories: document.querySelector('#categories'),
    price: document.querySelector('#price'),
  };

  const newBook = {
    image: image.value,
    title: title.value,
    author: author.value,
    description: description.value,
    categories: categories.value.split(','),
    price: price.value, 
  }

  FormElems.image.value = '';
  FormElems.title.value = '';
  FormElems.author.value = '';
  FormElems.description.value = '';
  FormElems.categories.value = '';
  FormElems.price.value = '';

  toggleForm();
  books.push(newBook);
  createHTML(books);
}

function removeBook() {
  const currentBook = this.parentNode;
  currentBook.classList.add('removed');
}


function createHTML(arr) {
  let toAppend = "";
  arr.forEach(buildCard);
  function buildCard(x, i) {
    toAppend += `
    <article class="grid-card">
      <button class="removal-btns" title="Remove this item">
        <i class="fa-solid fa-x"></i>
      </button>
      <img src="./assets/images/${x.image}" alt="" />
      <h2>${x.title}</h2>
      <h2>${x.author}</h2>
      <h3>${x.price}</h3>
      <p>${x.description}</p>
      <h4>categories: ${x.categories.join(', ')}</h4>
      <button>buy now</button>
    </article>
    `;
  }
  main.innerHTML = toAppend;
}

createHTML(books);

