// Book DB in JS
const booksJS = [
  {
    isbn: "9780062315007",
    title: "the alchemist",
    author: "Paulo Coelho",
    price: "$7.99",
    description:
      "The Alchemist is a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.",
    category: ["classics", "adventure", "fantasy"],
    image: "the-alchemist.jpg",
  },
  {
    isbn: "9781853261589",
    title: "the little prince",
    author: "Antoine de Saint-Exupéry",
    price: "$8.49",
    description:
      "The Little Prince is a classic tale of equal appeal to children and adults.",
    category: ["classics", "children"],
    image: "the-little-prince.jpg",
  },
  {
    isbn: "9780451524935",
    title: "nineteen-eighty-four",
    author: "George Orwell",
    price: "$13.49",
    description:
      "Written more than 70 years ago, 1984 was George Orwell's chilling prophecy about the future.",
    category: ["classics", "thrillers"],
    image: "1984.jpg",
  },
  {
    isbn: "9780399501487",
    title: "Lord of the Flies",
    author: "William Golding",
    price: "$11.49",
    description:
      "When 'Lord of the Flies' appeared in 1954 it received unprecedented reviews for a first novel.",
    category: ["classics", "fiction"],
    image: "lord-of-the-flies.jpg",
  },
  {
    isbn: "9780099536017",
    title: "Catch-22",
    author: "Joseph Heller",
    price: "$11.99",
    description:
      "It is the tale of the dangerously sane Captain Yossarian, who spends his time in Italy plotting to survive.",
    category: ["classics", "thrillers", "fiction"],
    image: "catch-22.jpg",
  },
  {
    isbn: "9780684807614",
    title: "Benjamin Franklin : An American Life",
    author: "Walter Isaacson",
    price: "$8.69",
    description:
      "During his 84-year life Benjamin Franklin was America's best scientist, inventor, publisher, business strategist, diplomat, and writer. He was also one of its most practical political thinkers.",
    category: ["biography", "history"],
    image: "benjamin-franklin.jpg",
  },
  {
    isbn: "9781853260155",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    price: "$5.99",
    description:
      "Wilde's only novel, first published in 1890, is a brilliantly designed puzzle, intended to tease conventional minds with its exploration of the myriad interrelationships between art, life, and consequence.",
    category: ["classics", "thrillers"],
    image: "the-picture-of-dorian-gray.jpg",
  },
  {
    isbn: "9781853260018",
    title: "Wuthering Heights",
    author: "Emily Bronte",
    price: "$10.99",
    description:
      "Wuthering Heights is a wild, passionate story of the intense and almost demonic love between Catherine Earnshaw and Heathcliff, a foundling adopted by Catherine's father.",
    category: ["classics", "romance"],
    image: "wuthering-heights.jpg",
  },
  {
    isbn: "9781840224306",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: "$12.49",
    description:
      "Crime and Punishment is one of the greatest and most readable novels ever written. From the beginning we are locked into the frenzied consciousness of Raskolnikov who, against his better instincts, is inexorably drawn to commit a brutal double murder.",
    category: ["classics", "history", "fiction"],
    image: "crime-and-punishment.jpg",
  },
  {
    isbn: "9780486284736",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "$7.99",
    description:
      "In a remote Hertfordshire village, far off the good coach roads of George III's England, a country squire of no great means must marry off his five vivacious daughters.",
    category: ["classics", "romance", "history"],
    image: "pride-and-prejudice.jpg",
  },
  {
    isbn: "9780007559244",
    title: "radio silence",
    author: "Alice Oseman",
    price: "$6.99",
    description:
      "Frances has always been a study machine with one goal, elite university. Nothing will stand in her way; not friends, not a guilty secret - not even the person she is on the inside.",
    category: ["children", "teens"],
    image: "radio-silence.jpg",
  },
  {
    isbn: "9781408726600",
    title: "verity",
    author: "Colleen Hoover",
    price: "$11.89",
    description:
      "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.",
    category: ["crime", "thrillers"],
    image: "verity.jpg",
  },
  {
    isbn: "9781409181637",
    title: "the silent patient",
    author: "alex michaelides",
    price: "$8.39",
    description:
      "WITH OVER THREE MILLION COPIES SOLD, read the Sunday Times and No.1 New York Times bestselling, record-breaking thriller that everyone is talking about - soon to be a major film.",
    category: ["thrillers", "crime"],
    image: "the-silent-patient.jpg",
  },
  {
    isbn: "9780297859383",
    title: "gone girl",
    author: "gillian flynn",
    price: "$9.99",
    description:
      "'What are you thinking, Amy? The question I've asked most often during our marriage, if not out loud, if not to the person who could answer.",
    category: ["crime", "fiction"],
    image: "gone-girl.jpg",
  },
  {
    isbn: "9780552773584",
    title: "the prince of tides",
    author: "pat conroy",
    price: "$12.99",
    description:
      "Pat Conroy's inspired masterpiece relates the dark and violent chronicle of an astounding family: the Wingos of Colleton, South Carolina. No reader will forget them. And no reader can remain untouched by their story.",
    category: ["novel", "contemporary", "fiction"],
    image: "the-prince-of-tides.jpg",
  },
  {
    isbn: "9781501197987",
    title: "contact",
    author: "carl sagan",
    price: "$8.99",
    description: `The Pulitzer Prize-winning author of Cosmos and renowned astronomer Carl Sagan's international bestseller about the discovery of an advanced civilization in the depths of space remains the "greatest adventure of all time" (Associated Press).`,
    category: ["novel", "science", "fiction"],
    image: "contact.jpg",
  },
];

// The grid container for all the books
const booksGrid = document.querySelector(".books-grid");

// Comment/Uncomment the assignment below as necessary 
// localStorage.books = JSON.stringify(booksJS);   

let booksLS = localStorage.books; // Book DB in LS

let books = booksJS;
let activeLS = false; // I needed a way to know if LS is active or not. we start with LS not active
// And then depending on whether LS has content , we activate it.  

if (booksLS && booksLS !== "[]") {
  books = JSON.parse(booksLS);
  activeLS = true;
}

function createHTML(booksArr) {
  let toAppend = "";
  booksArr.forEach(buildBook);
  function buildBook(book, idx) {
    toAppend += `
      <article class="book cat-${book.category.join(" cat-")}" id="${
      book.isbn
    }">
        <button class="remove-book-btns" id="${idx}">
          <i class="fa-solid fa-x"></i>
        </button>
        <h4 class="categories">${book.category.join(", ")}</h4>
        <div class="img-container">
          <img src="./assets/images/${book.image}" alt="book" />
        </div>
        <h2 class="title">${book.title}</h2>
        <h3 class="author">${book.author}</h3>
        <h3 class="price">${book.price}</h3>
        <h4 class="isbn">ISBN: ${book.isbn}</h4>
        <h4 class="description">${book.description}</h4>
        <button class="buy-now-btns">Buy Now</button>
      </article>
    `;
  }

  booksGrid.innerHTML = toAppend;
}

const bookCategories = document.getElementsByName("category");

function initCategoriesStatus() {
  for (let i = 0; i < bookCategories.length; i++) {
    bookCategories[i].checked = false; // Initialise all checkboxes "checked" values in HTML to false
    bookCategories[i].addEventListener("change", showBooksByCategories);
  }
}

function init() {
  createHTML(books);
  initCategoriesStatus();
} 

init();



/*******************************************************************************************************/
/*                               ADD OR REMOVE BOOKS BY CATEGORIES                                     */
/*******************************************************************************************************/



let booksByCategories = []; // To add books by category
const booksISBN = []; // When adding a book by one category, we don't want it added again for another
// category that the book might belong to. So, we keep a record of books added by keeping track of their ISBN code.

function addBooksByCategory(theCategory) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].category.includes(theCategory)) {
      if (!booksISBN.includes(books[i].isbn)) { // if the book's ISBN isn't in the ISBN array, add it to the categories array for display
        booksByCategories.push(books[i]);
        booksISBN.push(books[i].isbn); // update the ISBN array 
      }
    }
  }
}

// Since making changes to an array while looping over it may cause unexpected results,
// I first check which books are not to be removed and add them to a different array, I then
// point the category array to that different array. 
function removeBooksByCategory(theCategory) {
  const booksAfterCategoryRemoval = [];
  for (let i = 0; i < booksByCategories.length; i++) {
    if (!booksByCategories[i].category.includes(theCategory)) {
      booksAfterCategoryRemoval.push(booksByCategories[i]);
    } else {
      const isbnToRemove = booksByCategories[i].isbn; 
      // removing the ISBNs of books when unchecking their category. 
      for (let j = 0; j < booksISBN.length; j++) {
        if (booksISBN[j] === isbnToRemove) {
          booksISBN.splice(j, 1);
          break;
        }
      }
    }
  }
  booksByCategories = booksAfterCategoryRemoval;
}



function showBooksByCategories() {
  const category = this.value
  if (this.checked) addBooksByCategory(category);  // When 
  else removeBooksByCategory(category);
  // as long as we have books to show by category, we use the category array
  if (booksByCategories.length) createHTML(booksByCategories); 
  else createHTML(books); 
}

/**********************************************************************************************************/
/*                        E N D   O F   " B Y   C A T E G O R Y "   C O D E                               */
/**********************************************************************************************************/



/*========================================================================================================*/
/*========================================================================================================*/
/*========================================================================================================*/



/*********************************************************************************************************/
/*                               CODE TO DELETE BOOK ITEMS                                               */
/*********************************************************************************************************/ 

const removeBookBtns = document.querySelectorAll(".remove-book-btns");

for (const removeBookBtn of removeBookBtns) {
  removeBookBtn.addEventListener("click", deleteBook);
}

function deleteBook() {
  const isbn = this.parentElement.id;
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.isbn === isbn) {
      books.splice(i, 1);
      if (activeLS) localStorage.books = JSON.stringify(books);
      break;
    }
  }
  this.parentElement.remove();
}
/********************************************************************************************************/
/*                                END OF CODE TO DELETE BOOK ITEMS                                      */
/********************************************************************************************************/


/*========================================================================================================*/
/*========================================================================================================*/
/*========================================================================================================*/



/********************************************************************************************************/
/*                                    TOGGLE FORM BUTTON                                                */
/********************************************************************************************************/  

const toggleFormBtn = {
  toggleBtn: document.querySelector(".toggle-form-btn"),
  toggleForm: function () {
    const currDisplay =
      toggleFormBtn.toggleBtn.nextElementSibling.style.display;
    if (currDisplay === "none") {
      toggleFormBtn.toggleBtn.nextElementSibling.style.display = "block";
      toggleFormBtn.toggleBtn.innerText = "Hide Form";
    } else {
      toggleFormBtn.toggleBtn.nextElementSibling.style.display = "none";
      toggleFormBtn.toggleBtn.innerText = "Show Form";
    }
  },
};

toggleFormBtn.toggleBtn.addEventListener("click", toggleFormBtn.toggleForm);

/*********************************************************************************************************/
/*                                    END OF TOGGLE FORM BTN                                             */
/*********************************************************************************************************/



/*========================================================================================================*/
/*========================================================================================================*/
/*========================================================================================================*/



/**********************************************************************************************************/
/*                              ADD NEW BOOK THROUGH THE SPECIAL FORM                                     */
/**********************************************************************************************************/

const addBookBtn = document.querySelector(".add-book-btn");
addBookBtn.addEventListener("click", addBook);


function clearForm() {
  document.querySelector("#book-isbn").value = "";
  document.querySelector("#book-title").value = "";
  document.querySelector("#book-author").value = "";
  document.querySelector("#book-price").value = "";
  document.querySelector("#book-description").value = "";
  document.querySelector("#book-categories").value = "";
  document.querySelector("#book-image").value = "";
}

function createNewBook() {
  const categoryLowerCase = document
    .querySelector("#book-categories")
    .value.toLowerCase();
  const newBook = {
    isbn: document.querySelector("#book-isbn").value,
    title: document.querySelector("#book-title").value,
    author: document.querySelector("#book-author").value,
    price: document.querySelector("#book-price").value,
    description: document.querySelector("#book-description").value,
    category: categoryLowerCase.split(", "),
    image: document.querySelector("#book-image").value,
  };
  return newBook;
}

function addBook() {
  const theNewBook = createNewBook();
  books.push(theNewBook);
  if (activeLS) localStorage.books = JSON.stringify(books);
  clearForm();
  toggleFormBtn.toggleForm();
  createHTML(books);
}

/*********************************************************************************************************/
/*                END OF ADD NEW BOOK THROUGH THE SPECIAL FORM                                           */
/*********************************************************************************************************/



/*========================================================================================================*/
/*========================================================================================================*/
/*========================================================================================================*/