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

function loadWatchPage(watchLink) {
window.location.assign(watchLink);
}