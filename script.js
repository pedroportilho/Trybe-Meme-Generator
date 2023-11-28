const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fileBtn = document.getElementById('meme-insert');
const imagem = document.getElementById('meme-image');
const imageContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const imgs = document.getElementsByClassName('m');

function changeText() {
  memeText.innerHTML = inputText.value;
}

function changeImage(event) {
  imagem.src = URL.createObjectURL(event.target.files[0]);
}

function changeFire() {
  imageContainer.style.border = 'dashed 3px red';
}

function changeWater() {
  imageContainer.style.border = 'double 5px blue';
}

function changeEarth() {
  imageContainer.style.border = 'groove 6px green';
}

function mudarImg() {
  imagem.src = this.src;
}

inputText.oninput = changeText;
fileBtn.onchange = changeImage;
fire.addEventListener('click', changeFire);
water.addEventListener('click', changeWater);
earth.addEventListener('click', changeEarth);

for (let i = 0; i < imgs.length; i += 1) {
  imgs[i].addEventListener('click', mudarImg);
}
