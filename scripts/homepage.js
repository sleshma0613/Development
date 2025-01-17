let products = [
  {
    product_id : "1",
    product_name : "Omega Speedmaster Pilot",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Home_SP_Pilot_KV_Push.avif"
  },
  {
    product_id : "1",
    product_name : "Omega Speedmaster Pilot",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/rolex-bubble-back.jpg"
  },
  {
    product_id : "1",
    product_name : "Omega Speedmaster Pilot",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/W1.jpg"
  }
];

function renderFeaturedProducts() {
  const productElement = document.querySelector(".featured-catalogue-js");
  for (let i = 0; i <= products.length - 1; i++) {
    productElement.innerHTML += `
    <div class="featured-product">
      <img class="product-image" src=${products[i].product_image}>
    </div>
  `
  }
}

renderFeaturedProducts();

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