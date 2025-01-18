let products = [
  {
    product_id : "1",
    
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Home_SP_Pilot_KV_Push.avif"
  },
  {
    product_id : "1",
    
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/patek-philippe-calatrava.jpg"
  },
  {
    product_id : "1",
   
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