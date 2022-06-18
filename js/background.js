// const body = document.querySelector("body");

const images = ["0", "1", "2", "3", "4", "5", "6"];

// const chooesnImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chooesnImage}`;

// document.body.appendChild(bgImage);

const body = document.querySelector("body");

const IMG_NUMBER = 7;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();