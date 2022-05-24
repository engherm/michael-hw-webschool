const articles = [
  {
    brand: "Audi",
    prodName: "Bambi",
    price: "$199,999.99",
    category: ["family", "economy"],
    image: "./assets/images/audi.jpg",
  },
  {
    brand: "BMW",
    prodName: "bravo",
    price: "$399,999.99",
    category: ["very expensive", "for the rich only"],
    image: "./assets/images/bmw.png",
  },
  {
    brand: "Chevrolet",
    prodName: "bandana",
    price: "$99,999.99",
    category: ["sport", "economy"],
    image: "./assets/images/chevrolet.jpg",
  },
  {
    brand: "Dodge",
    prodName: "bundy",
    price: "$79,999.99",
    category: ["shoe salesmen", "married with kids"],
    image: "./assets/images/dodge.jpg",
  },
  {
    brand: "Fiat",
    prodName: "tralala",
    price: "$89,999.99",
    category: ["100memet", "economy"],
    image: "./assets/images/fiat.jpeg",
  },

  {
    brand: "Ford",
    prodName: "blue",
    price: "$499,999.99",
    category: ["business", "lawyer"],
    image: "./assets/images/ford.jpg",
  },
  {
    brand: "Honda",
    prodName: "Civic",
    price: "$199,999.99",
    category: ["sport", "economy"],
    image: "./assets/images/honda.jpg",
  },
  {
    brand: "Hyundai",
    prodName: "fantastic",
    price: "$139,999.99",
    category: ["sport", "economy"],
    image: "./assets/images/hyundai.jpg",
  },
  {
    brand: "mazda",
    prodName: "schmazda",
    price: "$169,999.99",
    category: ["sport", "economy"],
    image: "./assets/images/mazda.jpg",
  },
  {
    brand: "Mitsubishi",
    prodName: "ishi",
    price: "$399,999.99",
    category: ["sport", "economy"],
    image: "./assets/images/mitsubishi.jpg",
  },

  {
    brand: "Nissan",
    prodName: "passover",
    price: "$199,999.99",
    category: ["matzas", "afikoman"],
    image: "./assets/images/nissan.jpg",
  },
  {
    brand: "Suzuki",
    prodName: "bazuka",
    price: "$99,999.99",
    category: ["fun", "economy"],
    image: "./assets/images/suzuki.png",
  },
  {
    brand: "Toyota",
    prodName: "tyota",
    price: "$299,999.99",
    category: ["sport", "economy"],
    image: "./assets/images/toyota.jpg",
  },
  {
    brand: "Volkswagen",
    prodName: "adolfwagen",
    price: "$349,999.99",
    category: ["sport", "economy"],
    image: "./assets/images/volkswagen.jpeg",
  },
  {
    brand: "Volvo",
    prodName: "ovlov",
    price: "$799,999.99",
    category: ["sport", "economy"],
    image: "./assets/images/volvo.jpg",
  },
];

let toAppend = "";

articles.forEach(createItems);
function createItems(x, i) {
  toAppend += `
  <article class="box">
    <div class="imgbox">
      <img src="${x.image}" alt="" />
    </div>
    <div class="infobox">
      <h1>0${i + 1}</h1>
      <h2>${x.brand}</h2>
      <h3>${x.prodName}</h3>
      <h4>${x.price}</h4>
      <h5>${x.category.join(', ')}</h5>
    </div>
  </article>
  `;
}

document.querySelector(".container").innerHTML = toAppend;
