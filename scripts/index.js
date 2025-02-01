let featuredProducts = [
  {
    product_id : "f1",
    product_name : "Omega Speedmaster Pilot",
    product_price : "10950",
    discounted_price: "7999",
    product_description : "Soaring between earth and space, OMEGA watches have enjoyed a long history in the skies. Now, to propel that legacy further, the brand proudly launches the new Speedmaster Pilot. Aimed at a new generation of pilots in flight, this 40.85 mm design follows the very same symmetrical style of the original Speedmaster from 1957.",
    product_image: "images/watches/Home_SP_Pilot_KV_Push.avif"
  },
  {
    product_id : "f2",
    product_name : "Patek Philippe Calatrava",
    product_price : "31000",
    discounted_price: "26000",
    product_description : "Patek Philippe expands its range of elegant ladies' watches with a new version of the self-winding Calatrava Reference 4997 in rose gold decked out in purple – an original and refined color that perfectly matches the warm nuances of the precious metal and the diamond-set bezel.",
    product_image: "images/watches/patek-philippe-calatrava.jpg"
  },
  {
    product_id : "f3",
    product_name : "Shein - Vintage Water Resistant Polygon Pointer Quartz Watch",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "images/W1.jpg"
  }
];

let products = [
  {
    product_id : "1",
    product_category : "male",
    product_name : "Omega Speedmaster Pilot",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Home_SP_Pilot_KV_Push.avif"
  },
  {
    product_id : "2",
    product_category : "female",
    product_name : "Patek Philippe Calatrava",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/patek-philippe-calatrava.jpg"
  },
  {
    product_id : "3",
    product_category : "male",
    product_name : "Advisor Vintage",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/advisor-vintage.jpg"
  },
  {
    product_id : "4",
    product_category : "unisex",
    product_name : "Bulgari",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Cartier-Tank.jpg"
  },
  {
    product_id : "5",
    product_category : "male",
    product_name : "Chopard Happy Sport",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Chopard-Happy-Sport.jpg"
  },
  {
    product_id : "6",
    product_category : "female",
    product_name : "Jaeger LeCoultre Reverso",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Jaeger-LeCoultre-Reverso.jpg"
  },
  {
    product_id : "7",
    product_category : "unisex",
    product_name : "Movado Vintage",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/movado-vintage.jpg"
  },
  {
    product_id : "8",
    product_category : "male",
    product_name : "Rolex Bubble Back",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/rolex-bubble-back.jpg"
  },
  {
    product_id : "9",
    product_category : "male",
    product_name : "Rolex Datejust",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/rolexDatejust.jpg"
  },
  {
    product_id : "10",
    product_category : "female",
    product_name : "Vacheron Constantin Patrimony",
    product_price : "300000 NPR",
    product_description : "Ekdam Dami xa Ghadi, Khatraaaaa xa",
    product_image: "../images/watches/Vacheron-Constantin-Patrimony.jpg"
  },
];

  let slideImageElement = document.querySelector(".slide-image");
  let slideImageText = document.querySelector(".slide-quote-js");
  let imageIndex = 1;

  function nextSlide() {
    if (imageIndex < 5) {
      imageIndex++;
      slideImageElement.src = `../images/ad/slide${imageIndex}.jpg`;
      
    } else {
      imageIndex = 1;
      slideImageElement.src = `../images/ad/slide${imageIndex}.jpg`;
    }
  };

  function prevSlide() {
    if (imageIndex > 1) {
      imageIndex--;
      slideImageElement.src = `../images/ad/slide${imageIndex}.jpg`;
    } else {
      imageIndex = 5;
      slideImageElement.src = `../images/ad/slide${imageIndex}.jpg`;
    }
  };

  document.querySelector(".next-slide").addEventListener('click', () => {
    nextSlide();
  });

  document.querySelector(".prev-slide").addEventListener('click', () => {
    prevSlide();
  });

function showProductDetails() {
  
};

function loadWatchPage(watchLink) {
  window.location.assign(watchLink);
}