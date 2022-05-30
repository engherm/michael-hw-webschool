const playingCards = [
  {
    value: "2",
    suit: "hearts",
    image: "1.jpg",
  },
  {
    value: "3",
    suit: "hearts",
    image: "2.jpg",
  },
  {
    value: "4",
    suit: "hearts",
    image: "3.jpg",
  },
  {
    value: "5",
    suit: "hearts",
    image: "4.jpg",
  },
  {
    value: "6",
    suit: "hearts",
    image: "5.jpg",
  },
  {
    value: "7",
    suit: "hearts",
    image: "6.jpg",
  },
  {
    value: "8",
    suit: "hearts",
    image: "7.jpg",
  },
  {
    value: "9",
    suit: "hearts",
    image: "8.jpg",
  },
  {
    value: "10",
    suit: "hearts",
    image: "9.jpg",
  },
  {
    value: "11",
    suit: "hearts",
    image: "10.jpg",
  },
  {
    value: "12",
    suit: "hearts",
    image: "11.jpg",
  },
  {
    value: "13",
    suit: "hearts",
    image: "12.jpg",
  },
  {
    value: "14",
    suit: "hearts",
    image: "13.jpg",
  },
  {
    value: "2",
    suit: "diamonds",
    image: "14.jpg",
  },
  {
    value: "3",
    suit: "diamonds",
    image: "15.jpg",
  },
  {
    value: "4",
    suit: "diamonds",
    image: "16.jpg",
  },
  {
    value: "5",
    suit: "diamonds",
    image: "17.jpg",
  },
  {
    value: "6",
    suit: "diamonds",
    image: "18.jpg",
  },
  {
    value: "7",
    suit: "diamonds",
    image: "19.jpg",
  },
  {
    value: "8",
    suit: "diamonds",
    image: "20.jpg",
  },
  {
    value: "9",
    suit: "diamonds",
    image: "21.jpg",
  },
  {
    value: "10",
    suit: "diamonds",
    image: "22.jpg",
  },
  {
    value: "11",
    suit: "diamonds",
    image: "23.jpg",
  },
  {
    value: "12",
    suit: "diamonds",
    image: "24.jpg",
  },
  {
    value: "13",
    suit: "diamonds",
    image: "25.jpg",
  },
  {
    value: "14",
    suit: "diamonds",
    image: "26.jpg",
  },
  {
    value: "2",
    suit: "clubs",
    image: "27.jpg",
  },
  {
    value: "3",
    suit: "clubs",
    image: "28.jpg",
  },
  {
    value: "4",
    suit: "clubs",
    image: "29.jpg",
  },
  {
    value: "5",
    suit: "clubs",
    image: "30.jpg",
  },
  {
    value: "6",
    suit: "clubs",
    image: "31.jpg",
  },
  {
    value: "7",
    suit: "clubs",
    image: "32.jpg",
  },
  {
    value: "8",
    suit: "clubs",
    image: "33.jpg",
  },
  {
    value: "9",
    suit: "clubs",
    image: "34.jpg",
  },
  {
    value: "10",
    suit: "clubs",
    image: "35.jpg",
  },
  {
    value: "11",
    suit: "clubs",
    image: "36.jpg",
  },
  {
    value: "12",
    suit: "clubs",
    image: "37.jpg",
  },
  {
    value: "13",
    suit: "clubs",
    image: "38.jpg",
  },
  {
    value: "14",
    suit: "clubs",
    image: "39.jpg",
  },
  {
    value: "2",
    suit: "spades",
    image: "40.jpg",
  },
  {
    value: "3",
    suit: "spades",
    image: "41.jpg",
  },
  {
    value: "4",
    suit: "spades",
    image: "42.jpg",
  },
  {
    value: "5",
    suit: "spades",
    image: "43.jpg",
  },
  {
    value: "6",
    suit: "spades",
    image: "44.jpg",
  },
  {
    value: "7",
    suit: "spades",
    image: "45.jpg",
  },
  {
    value: "8",
    suit: "spades",
    image: "46.jpg",
  },
  {
    value: "9",
    suit: "spades",
    image: "47.jpg",
  },
  {
    value: "10",
    suit: "spades",
    image: "48.jpg",
  },
  {
    value: "11",
    suit: "spades",
    image: "49.jpg",
  },
  {
    value: "12",
    suit: "spades",
    image: "50.jpg",
  },
  {
    value: "13",
    suit: "spades",
    image: "51.jpg",
  },
  {
    value: "14",
    suit: "spades",
    image: "52.jpg",
  },
];

const main = document.querySelector("main");
const button = document.querySelectorAll("button");

createHTML(playingCards);

button[0].addEventListener("click", shuffleCards);
button[1].addEventListener("click", resetCards);

function shuffleCards() {
  /* 
    This function uses Math.random() to get one random integer value
    between 0 and 51 inclusive and uniquely in each iteration of the for loop.
    Each value represents an index of the playingCards array.
    The array 'shuffledIndecies' keeps track of the generated random values,
    so that each random value will be used once and only once
  */
  const shuffledIndecies = [];
  let num;
  for (let i = 0; i < playingCards.length; i++) {
    do {
      num = Math.floor(Math.random() * playingCards.length);
    } while (shuffledIndecies.includes(num));

    playingCards[i].image = `${num + 1}.jpg`;
    shuffledIndecies.push(num);
  }
  createHTML(playingCards);
}

function resetCards() {
  for (let i = 0; i < playingCards.length; i++) {
    playingCards[i].image = `${i + 1}.jpg`;
  }
  createHTML(playingCards);
}

function createHTML(arr) {
  let toAppend = "";
  arr.forEach(addCardTemplate);
  function addCardTemplate(x, i) {
    toAppend += `
      <img src="./assets/images/${x.image}" id=${i} />
    `;
  }
  main.innerHTML = toAppend;
}
