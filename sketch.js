const key = 'pk.eyJ1Ijoia2VpdGhyb2IxNCIsImEiOiJja20wc3Z4MXcwYzFyMnFxdGQzcW5yM2gwIn0.Zd4sexHlb0zblGiORQl2Tw';

const options = {
  lat: 39.162020,
  lng: -82.681140,
  zoom: 6,
  style: 'mapbox://styles/keithrob14/ckmz75bco1d4b17ntgoqsrzbr',
  pitch: 40
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  //greenhouse = loadTable('Greenhouse_Data.csv','csv','header')
  img = createImg('images/meadow hollow.jpg');
  img2 = createImg('images/morgan county.jpg');
  img3 = createImg('images/columbus.jpg');
  img4 = createImg('images/adams county.jpg');
  img.hide();
  img2.hide();
  img3.hide();
  img4.hide();
}


function draw() {
   clear();
  //noFill();
  stroke(0);
  strokeWeight(5);
  const zoom = myMap.zoom();
  const meadowhollow = myMap.latLngToPixel(39.162020,-82.681140);
  const morganco = myMap.latLngToPixel(39.531925, -81.943712);
  const columbus = myMap.latLngToPixel(39.996891, -82.809103);
  const adamsco = myMap.latLngToPixel(38.679044, -83.424200);
  
  
  ellipse(meadowhollow.x, meadowhollow.y, 2 * zoom, 2 * zoom);
  if (dist(meadowhollow.x, meadowhollow.y, mouseX, mouseY) < (zoom * 10) / 2) {
    textSize(10);
    noFill();
    strokeWeight(1);
    textAlign(CENTER, TOP);
    text("Meadow Hollow is Larry Helmers' farm where experimental property management projects like prescribed burns and TSI jobs can be done to prove the concept of wildlife habitat restoration",meadowhollow.x,meadowhollow.y);
    image(img,meadowhollow.x,meadowhollow.y,200,200);
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
  
  
    ellipse(morganco.x, morganco.y, 2 * zoom, 2 * zoom);
  if (dist(morganco.x, morganco.y, mouseX, mouseY) < (zoom * 10) / 2) {
    textSize(10);
    noFill();
    strokeWeight(1);
    text("this is morgan county",meadowhollow.x,meadowhollow.y);
    image(img2,morganco.x,morganco.y,200,200);
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
  
  
    ellipse(columbus.x, columbus.y, 2 * zoom, 2 * zoom);
  if (dist(columbus.x, columbus.y, mouseX, mouseY) < (zoom * 10) / 2) {
    textSize(10);
    noFill();
    strokeWeight(1);
    text("this is blacklick",columbus.x,columbus.y);
    image(img3,columbus.x,columbus.y,200,200);
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
  
  
    ellipse(adamsco.x, adamsco.y, 2 * zoom, 2 * zoom);
  if (dist(adamsco.x, adamsco.y, mouseX, mouseY) < (zoom * 10) / 2) {
    textSize(10);
    noFill();
    strokeWeight(1);
    text("this is adams county",adamsco.x,adamsco.y);
    image(img4,adamsco.x,adamsco.y,200,200);
     fill(0, 100);
  } else {
    fill(255, 100);
  }
    
   
}
  
  
 


$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});


