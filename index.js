const images = [
  // BU NESNEYİ DEĞİŞTİRMEYİN
  {
    image: 'https://i.ibb.co/fnym2jF/food-avocadotoast.jpg',
    alt_text: 'food-avocadotoast',
  },
  {
    image: 'https://i.ibb.co/CBbdF88/food-burger.jpg',
    alt_text: 'food-burger',
  },
  {
    image: 'https://i.ibb.co/fDqgbzW/food-chickenfingers.jpg',
    alt_text: 'food-chickenfingers',
  },
  {
    image: 'https://i.ibb.co/Jj3tPqs/food-poutine.jpg',
    alt_text: 'food-poutine',
  },
  {
    image: 'https://i.ibb.co/7bVYTyd/food-ribs.jpg',
    alt_text: 'food-ribs',
  },
  {
    image: 'https://i.ibb.co/dMt2Dwz/food-sandwich.jpg',
    alt_text: 'food-sandwich',
  },
  {
    image: 'https://i.ibb.co/6Y8DgvK/food-sausage.jpg',
    alt_text: 'food-sausage',
  },
  {
    image: 'https://i.ibb.co/nwgdHQ4/food-steak.jpg',
    alt_text: 'food-steak',
  },
  {
    image: 'https://i.ibb.co/bFmCDtk/food-tacos.jpg',
    alt_text: 'food-tacos',
  },
];

/* Kodlar Buradan aşağıya */
document.getElementsByTagName('link')[1].href = './index.css';
// css dosyasının linki index.html'de eklenmemiş.

const elements = document.querySelectorAll('.gallery-content img');

for (let i = 0; i < elements.length; i++) {
  elements[i].src = images[i].image;
  elements[i].classList.add('border-md');
  elements[i].setAttribute('alt', images[i].alt_text);
}
