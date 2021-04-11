const key = 'pk.eyJ1Ijoia2VpdGhyb2IxNCIsImEiOiJja20wc3Z4MXcwYzFyMnFxdGQzcW5yM2gwIn0.Zd4sexHlb0zblGiORQl2Tw';

const options = {
  lat: 39.162020,
  lng: -82.681140,
  zoom: 6,
  style: 'mapbox://styles/keithrob14/ckmz75bco1d4b17ntgoqsrzbr',
  pitch: 40
};

let text1= "Meadow Hollow is Larry Helmers' farm where experimental property management projects like prescribed burns and TSI jobs can be done to prove the concept of wildlife habitat restoration."
let text2= "Native Landscapes works with local contractors to help clear areas for future building sites while keeping in mind the impact on the surrounding environment."
let text3= "Native Landscapes works in more domestic scenarios for classical tree care and traditional landscaping as well."
let text4= "Native Landscapes specializes in improving wildlife habitat on clients propoerties to improve hunting and to generally improve habitat for wildlife on surrounding properties."

    
const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;
//var gui;


function setup() {
  //gui = new Gui();
  //let gui_setup = new dat.GUI();
  //gui_setup.add(gui,'size',1,50).step(1);
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
  
  
  ellipse(meadowhollow.x, meadowhollow.y, 4 * zoom, 4 * zoom);
  if (dist(meadowhollow.x, meadowhollow.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(15);
    noFill();
    strokeWeight(1);
    textAlign(CENTER, BOTTOM);
    fill(100);
    rect(0,0,windowWidth, 80);
    fill(255);
    text(text1,windowWidth/2,50);
    image(img,meadowhollow.x,meadowhollow.y,200,200);
     
  } 
  
  
  
 ellipse(morganco.x, morganco.y, 4 * zoom, 4 * zoom);
  if (dist(morganco.x, morganco.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(15);
    noFill();
    strokeWeight(1);
    textAlign(CENTER, BOTTOM);
    fill(100);
    rect(0,0,windowWidth, 80);
    fill(255);
    text(text2,windowWidth/2,50);
    image(img2,morganco.x,morganco.y,200,200);
     
  }   
  
   ellipse(columbus.x, columbus.y, 4 * zoom, 4 * zoom);
  if (dist(columbus.x, columbus.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(15);
    noFill();
    strokeWeight(1);
    textAlign(CENTER, BOTTOM);
    fill(100);
    rect(0,0,windowWidth, 80);
    fill(255);
    text(text3,windowWidth/2,50);
    image(img3,columbus.x,columbus.y,200,200);
     
  }
  
  
  
   ellipse(adamsco.x, adamsco.y, 4 * zoom, 4 * zoom);
  if (dist(adamsco.x, adamsco.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(15);
    noFill();
    strokeWeight(1);
    textAlign(CENTER, BOTTOM);
    fill(100);
    rect(0,0,windowWidth, 80);
    fill(255);
    text(text4,windowWidth/2,50);
    image(img4,adamsco.x,adamsco.y,200,200);
     
  } 
    else {
    fill(200, 50);
    strokeWeight(2);
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


