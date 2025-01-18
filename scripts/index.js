let featuredProducts = [
  {
    product_id : "f1",
    product_name : "Omega Speedmaster Pilot",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Home_SP_Pilot_KV_Push.avif"
  },
  {
    product_id : "f2",
    product_name : "Patek Philippe Calatrava",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/patek-philippe-calatrava.jpg"
  },
  {
    product_id : "f3",
    product_name : "Shein - Vintage Water Resistant Polygon Pointer Quartz Watch",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/W1.jpg"
  }
];

let products = [
  {
    product_id : "1",
    product_category : "",
    product_name : "Omega Speedmaster Pilot",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Home_SP_Pilot_KV_Push.avif"
  },
  {
    product_id : "2",
    product_category : "",
    product_name : "Patek Philippe Calatrava",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/patek-philippe-calatrava.jpg"
  },
  {
    product_id : "3",
    product_category : "",
    product_name : "Advisor Vintage",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/advisor-vintage.jpg"
  },
  {
    product_id : "4",
    product_category : "",
    product_name : "Bulgari",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Cartier-Tank.jpg"
  },
  {
    product_id : "5",
    product_category : "",
    product_name : "Chopard Happy Sport",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Chopard-Happy-Sport.jpg"
  },
  {
    product_id : "6",
    product_category : "",
    product_name : "Jaeger LeCoultre Reverso",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Jaeger-LeCoultre-Reverso.jpg"
  },
  {
    product_id : "7",
    product_category : "",
    product_name : "Movado Vintage",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/movado-vintage.jpg"
  },
  {
    product_id : "8",
    product_category : "",
    product_name : "Rolex Bubble Back",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/rolex-bubble-back.jpg"
  },
  {
    product_id : "9",
    product_category : "",
    product_name : "Rolex Datejust",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/rolexDatejust.jpg"
  },
  {
    product_id : "10",
    product_category : "",
    product_name : "Vacheron Constantin Patrimony",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Vacheron-Constantin-Patrimony.jpg"
  },
];

function renderFeaturedProducts() {
  const featuredProductElement = document.querySelector(".featured-catalogue-js");
  for (let i = 0; i <= featuredProducts.length - 1; i++) {
    featuredProductElement.innerHTML += `
    <div class="featured-product">
      <img class = "product-image" src = ${featuredProducts[i].product_image}>
      <div class="product-details-layer">
        SOME PRODUCT RELATED STUFF
      </div>
    </div>
  `
  }
};

function renderProducts() {
  const productsElement = document.querySelector(".products-catalogue-js");
  for (let i = 0; i <= products.length - 1; i++) {
    productsElement.innerHTML += `
    <div class="product-container">
      <img class = "product-image" src = ${products[i].product_image}>
      <div class="product-details-layer">
        SOME PRODUCT RELATED STUFF
      </div>
    </div>
  `
  }
};

//exposing functions to the global window object so it can be accessed by the onload attribute while loading webpages
window.renderFeaturedProducts = renderFeaturedProducts;
window.renderProducts = renderProducts;

function showProductDetails() {
  
};

// let slideImageElement = document.querySelector(".slide-image");
// let imageIndex = 1;

// function nextSlide() {
//   if (imageIndex < 3) {
//     imageIndex++;
//     slideImageElement.src = `images/slide${imageIndex}.jpg`;
//   } else {
//     imageIndex = 1;
//     slideImageElement.src = `images/slide${imageIndex}.jpg`;
//   }
// };

// function prevSlide() {
//   if (imageIndex > 1) {
//     imageIndex--;
//     slideImageElement.src = `images/slide${imageIndex}.jpg`;
//   } else {
//     imageIndex = 3;
//     slideImageElement.src = `images/slide${imageIndex}.jpg`;
//   }
// };

// document.querySelector(".next-slide").addEventListener('click', () => {
//   nextSlide();
// });

// document.querySelector(".prev-slide").addEventListener('click', () => {
//   prevSlide();
// });