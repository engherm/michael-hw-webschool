const main = document.querySelector("main");

const articles = [
  {
    plateId: "0123456789ABCDEF",
    brand: "BMW",
    prodName: "iX M60",
    price: "$200,000",
    description:
      "The visually polarising but dynamically superb BMW iX arrived a few months ago as the tip of the spear for BMW's electric vehicle push.",
    category: ["Luxury", "Electric"],
    image: "bmw_ix_m60.jpg",
  },
  {
    plateId: "123456789ABCDEF0",
    brand: "BMW",
    prodName: "i4 E Drive",
    price: "$100,000",
    description:
      "Although initially more expensive than EV opponents, BMW has sweetened the i4 deal with a complimentary five-year/unlimited-energy.",
    category: ["Luxury", "Electric"],
    image: "bmw-i4-e-drive.jpg",
  },
  {
    plateId: "23456789ABCDEF01",
    brand: "Citroen",
    prodName: "C4 Shine",
    price: "$38,000",
    description:
      "The 2022 Citroen C4 Shine is a capable small SUV with a stylish point of difference in a market that, in the main, shouts conformity.",
    category: ["SUV", "Economy"],
    image: "citroen-c4-shine.jpg",
  },
  {
    plateId: "3456789ABCDEF012",
    brand: "Kia",
    prodName: "Niro EV",
    price: "$60,000",
    description:
      "The fact is this: the Niro's footprint is ideal for us. There's more rear seat legroom for our adult kids than any family car.",
    category: ["Family", "Automatic"],
    image: "kia-niro-ev.jpg",
  },
  {
    plateId: "456789ABCDEF0123",
    brand: "Kia",
    prodName: "Niro Hybrid Sport",
    price: "$44,000",
    description:
      "The hybrid is also the only Niro to come equipped with a spare tyre - albeit a space-saver - with the PHEV and EV only.",
    category: ["SUV", "Family"],
    image: "kia-niro-hybrid-sport.jpg",
  },
  {
    plateId: "56789ABCDEF01234",
    brand: "Lamborghini",
    prodName: "Aventador Ultimate",
    price: "$905,000",
    description:
      "So what's different and what's new with the Ultimae? The core is unchanged, with a thumping great 6.5-litre V12 engine.",
    category: ["Luxury"],
    image: "lamborghini-aventador-ultimate.jpg",
  },
  {
    plateId: "6789ABCDEF012345",
    brand: "Lamborghini",
    prodName: "Huracan",
    price: "$596,000",
    description:
      "The seats are new, too, and are carbon-fibre tubs with a surprising amount of adjustment, while a new titanium roll bar sits behind.",
    category: ["Luxury"],
    image: "lamborghini-huracan.jpg",
  },
  {
    plateId: "789ABCDEF0123456",
    brand: "Lamborghini",
    prodName: "Tecnica",
    price: "$500,000",
    description:
      "The Tecnica's new front bumper/fascia incorporates the Terzo Millennio's black 'Ypsilon' design and features an air curtain for the first time.",
    category: ["Luxury"],
    image: "lamborghini-tecnica.jpg",
  },
  {
    plateId: "89ABCDEF01234567",
    brand: "Mazda2",
    prodName: "G15",
    price: "$27,000",
    description:
      "If it's a light car you want, and you are prepared to pay more for everything it brings, the Mazda2 GT is one of the best-credentialled in its segment.",
    category: ["Hatch", "Family"],
    image: "mazda2-g15.jpg",
  },
  {
    plateId: "9ABCDEF012345678",
    brand: "Mercedes",
    prodName: "AMG CLS",
    price: "$184,000",
    description:
      "The CLS hangs on steadfastly as the more pedestrian Mercedes-Benz E-Class donor car.",
    category: ["Sedan", "Luxury"],
    image: "mercedes-amg-cls.jpg",
  },
  {
    plateId: "ABCDEF0123456789",
    brand: "Mercedes",
    prodName: "AMG GT",
    price: "$400,000",
    description:
      "Among the tech that keeps the E Performance's mighty grunt in check is AMG RIDE CONTROL.",
    category: ["Luxury", "Hybrid"],
    image: "mercedes-amg-gt.jpg",
  },
  {
    plateId: "BCDEF0123456789A",
    brand: "Mitsubishi",
    prodName: "Outlander Exceed",
    price: "$49,000",
    description:
      "the new-generation Mitsubishi Outlander has more room than its predecessor",
    category: ["SUV", "Automatic"],
    image: "mitsubishi_outlander_exceed.jpg",
  },
  {
    plateId: "CDEF0123456789AB",
    brand: "Nissan",
    prodName: "Pathfinder",
    price: "$65,000",
    description:
      "The big Nissan has decent body control and curbs excessive roll.",
    category: ["Family"],
    image: "nissan-pathfinder.jpg",
  },
  {
    plateId: "DEF0123456789ABC",
    brand: "Porsche",
    prodName: "Macan",
    price: "$91,500",
    description: "Offers lean engines with sporty driving characteristics",
    category: ["Sport", "Luxury"],
    image: "porsche-macan.jpg",
  },
  {
    plateId: "EF0123456789ABCD",
    brand: "Subaru",
    prodName: "WRX AWD",
    price: "$58,000",
    description: "The WRX stands for World Rally Xperimental.",
    category: ["Sedan", "Family"],
    image: "subaru-wrx-awd.jpg",
  },
  {
    plateId: "F0123456789ABCDE",
    brand: "Toyota",
    prodName: "Corolla ZR Hybrid",
    price: "$39,600",
    description:
      "The ZR Hybrid's powertrain is the same as that used in other petrol-electric Corolla models.",
    category: ["Hatch", "Automatic"],
    image: "toyota-corolla-zr-hybrid.jpg",
  },
];

function createHTML(arr) {
  let toAppend = "";

  arr.forEach(buildCard);
  function buildCard(x, i) {
    toAppend += `
    <article id="car-${x.plateId}" class="cat-${x.category
      .join(" cat-")
      .toLowerCase()}">
      <button class="card-remove-btns" onclick="removeCard(this, '${
        x.plateId
      }')">
        <i class="fa-solid fa-x"></i>
      </button>
      <div class="main-content">
        <div class="article-center">
          <h4 class="category">${x.category.join(", ")}</h4>
          <img src="./assets/images/${x.image}" alt="" />
          <h2>${x.brand}</h2>
          <h3>${x.prodName}</h3>
          <h3>${x.price}</h3>
          <p>${x.description}</p>
        </div>
        <div class="article-footer">
          <button class="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </article>
    `;
  }
    main.innerHTML = toAppend;
}

createHTML(articles);

const toggleFormBtn = document.querySelector(".toggle-form-btn");
const addCarForm = document.querySelector(".add-car-form");
const formWrapper = document.querySelector(".form-wrapper");
const addCarBtn = document.querySelector("#add-car-btn");
const checkboxes = document.getElementsByName("category");

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", showFilteringResults);
}

toggleFormBtn.addEventListener("click", toggleForm);
addCarBtn.addEventListener("click", addCar);

function showFilteringResults() {
  const carsToShow = [];
  if (this.checked) {
    selection = true;
    for (let i = 0; i < checkboxes.length; i++) {
      if (articles[i].category.includes(this.value)) {
        carsToShow.push(articles[i]);
        // console.log(this.checked);
      }
    }
    createHTML(carsToShow);
  } else {
    createHTML(articles);
  } 
}

function toggleForm() {
  if (formWrapper.style.display == "none") {
    formWrapper.style.display = "block";
    toggleFormBtn.innerText = "Hide Form";
  } else {
    formWrapper.style.display = "none";
    toggleFormBtn.innerText = "Show Form";
  }
}

function removeCard(btn, plate) {
  btn.parentElement.remove();
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].plateId === plate) {
      articles.splice(i, 1);
    }
    break;
  }
}

function addCar() {
  const FormElems = {
    plateIdInp: document.querySelector("#plate-id"),
    brandInp: document.querySelector("#brand"),
    prodNameInp: document.querySelector("#prod-name"),
    priceInp: document.querySelector("#price"),
    descriptionInp: document.querySelector("#description"),
    categoryInp: document.querySelector("#category"),
    imageInp: document.querySelector("#image"),
  };

  const newCar = {
    plateId: FormElems.plateIdInp.value,
    brand: FormElems.brandInp.value,
    prodName: FormElems.prodNameInp.value,
    price: FormElems.priceInp.value,
    description: FormElems.descriptionInp.value,
    category: FormElems.categoryInp.value.split(","),
    image: FormElems.imageInp.value,
  };

  FormElems.plateIdInp.value = "";
  FormElems.brandInp.value = "";
  FormElems.prodNameInp.value = "";
  FormElems.priceInp.value = "";
  FormElems.descriptionInp.value = "";
  FormElems.categoryInp.value = "";
  FormElems.imageInp.value = "";

  toggleForm();
  articles.push(newCar);
  createHTML(articles);
}
