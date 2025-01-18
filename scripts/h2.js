let featuredProducts = [
  {
    product_id : "f1",
    product_name : "Omega Speedmaster Pilot",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../"
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

function renderFeaturedProducts() {
  const featuredProductElement = document.querySelector(".featured-catalogue-js");
  for (let i = 0; i <= featuredProducts.length - 1; i++) {
    featuredProductElement.innerHTML += `
    <div class="featured-product">
      <img class = "product-image" src = ${featuredProducts[i].product_image} style = "z-index: 1">
      <div class="product-details-layer">
        
      </div>
    </div>
  `
  }
};

renderFeaturedProducts();

 
  