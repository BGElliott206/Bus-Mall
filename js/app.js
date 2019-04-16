'use strict';

var products = [];


function getRandomPicNumber() {
  var randomNumber = Math.floor(Math.random() * items/length);
  return randomNumber;
}

function renderRandomPic() {
  var productPictureReference = document.getElementById('product-picture');
  var randomIndex = getRandomPicNumber();
  var randomPic = products [randomIndex];
  productPictureReference.src = randomPic.picturePath;
  productPictureReference.alt = randomPic.description;
  productPictureReference.src = randomPic.picturePath;
  productPictureReference.alt = randomPic.description;
}

function Item(picturePath, description) {
  this.picturePath = picturePath;
  this.description = description;

  products.push(this);
}

new Item('img/bag.jpg', 'R2 D2 robot rolling suitcase');
new Item('img/banana.jpg','Banana slicer' );
new Item('img/bathroom.jpg', 'iPad holder/ toilet paper stand');
new Item('img/boots.jpg', 'Yellow peep-toe rain boots');
new Item('img/breakfast.jpg', 'Toasteroven/coffee maker combo');
new Item('img/bubblegum.jpg', 'Meatball shaped bubblegum');
new Item('img/chair.jpg','Funky-looking chair');
new Item('img/cthulhu.jpg', 'Green action-figure');
new Item('img/dog-duck.jpg', 'Duck noise maker');
new Item('img/dragon.jpg', 'Can of dragon meat';
new Item('img/pen.jpg', 'Pen cap utensils');
new Item('img/pet-sweep.jpg', 'Pet-sweep product');
new Item('img/scissors.jpg', 'Pizza scissors');
new Item('img/shark.jpg', 'Shark sleeping bag');
new Item('img/sweep.jpg', 'Baby in a jumper designed to sweep');
new Item('ing/tauntaun.jpg', 'Tauntaun sleeping bag');
new Item('img/unicorn.jpg', 'Can of Unicorn meat');
new Item('img/usb.gif', 'Tenticle shaped USB drive' );
new Item('img/water-can.jpg', 'Non-functioning watering can');
new Item('img/wine-glass.jpg', 'Egg-shaped wine glass');

