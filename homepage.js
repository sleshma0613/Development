import { products } from "./products.js";

function renderFeaturedProducts() {
  const productElement = document.querySelector(".featured-catalogue-js");
  for (let i = 0; i <= products.length - 1; i++) {
    productElement.innerHTML += `
    <div class="featured-product">
      <div class="fproduct-image-container">
        <img class="product-image" src=${products[0].product_image}>
      </div>
      <div class="fproduct-info">
        <p class="product-name">
        ${products[i].product_name}
        </p>
        <p class="product-price">
        ${products[i].product_price}
        </p>
        <p class="product-description">
        ${products[i].product_description}
        </p>
        <div class="fproduct-options">
          <button class="buy-button action-button">
            BUY NOW
          </button>
          <button class="add-to-cart action-button">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  `
  }
}

renderFeaturedProducts();

function renderCategoriesSection() {
  const categoriesElement = document.querySelector(".categories-js");
  categoriesElement.innerHTML = `
    <div class="category-heading">
    CATEGORIES
    </div>
  `
}

renderCategoriesSection();