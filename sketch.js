const key = 'pk.eyJ1Ijoia2VpdGhyb2IxNCIsImEiOiJja20wc3Z4MXcwYzFyMnFxdGQzcW5yM2gwIn0.Zd4sexHlb0zblGiORQl2Tw';

const options = {
  lat: 39.162020,
  lng: -82.681140,
  zoom: 6,
  style: 'mapbox://styles/keithrob14/ckmz75bco1d4b17ntgoqsrzbr',
  pitch: 45
};

let text1= "Meadow Hollow is Larry Helmers' farm where experimental property management projects like prescribed burns and TSI jobs can be done to prove \n  the concept of wildlife habitat restoration. Small workshops can be held at this experimental property for clients interested in improving \n wildlife habitat in a natural manner that lines up with the native, evolutionary timeline of their respective locale."
let text2= "Native Landscapes works with local contractors to help clear areas for future building sites while keeping in mind \n the impact on the surrounding environment.This image shows an example of a job done through Native Landscapes using \n local contractors to create a clearing to start construction on a cabin for the landowner."
let text3= "Native Landscapes works in more domestic scenarios for classical tree care and traditional landscaping as well.\n Native Landscapes has ample experience in close quarters tree care and high-end landscaping incorporating native species\n into urban landscaping practices to stand out from typical landscaping practice."
let text4= "Native Landscapes specializes in improving wildlife habitat on clients properties to improve hunting and to generally improve habitat for\n  wildlife on surrounding properties. This is the greatest specialty of Native Landscapes due to the great deal of passion and experience \n Larry Helmers has with a wide range of habitat improvement for the plants and animals of Ohio. "


let lines = 'L1\nL2\nL3';

    
const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;
//var gui;

//var imgArray = [];
//var csvImages = 4;


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
  strokeWeight(3);
  const zoom = myMap.zoom();
  const meadowhollow = myMap.latLngToPixel(39.162020,-82.681140);
  const morganco = myMap.latLngToPixel(39.531925, -81.943712);
  const columbus = myMap.latLngToPixel(39.996891, -82.809103);
  const adamsco = myMap.latLngToPixel(38.679044, -83.424200);
  imageMode(CENTER);
  
  
  ellipse(meadowhollow.x, meadowhollow.y, 2 * zoom, 10);
  ellipse(morganco.x, morganco.y, 2 * zoom, 10);
  ellipse(columbus.x, columbus.y, 2 * zoom, 10);
  ellipse(adamsco.x, adamsco.y, 2 * zoom, 10);
  if (dist(meadowhollow.x, meadowhollow.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(15);
    strokeWeight(1);
    textAlign(CENTER, BOTTOM);
    fill(100);
    rect(0,0,windowWidth, 80);
    fill(255);
    textLeading(20);
    text(text1,windowWidth/2,70);
    textFont('Helvetica');
    image(img,meadowhollow.x,meadowhollow.y,scale*width, scale*img.height*width/img.width);
      
  } 
  
  
  

  if (dist(morganco.x, morganco.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(15);
    strokeWeight(1);
    textAlign(CENTER, BOTTOM);
    fill(100);
    rect(0,0,windowWidth, 80);
    fill(255);
    text(text2,windowWidth/2,70);
    textFont('Helvetica');
    image(img2,morganco.x,morganco.y,scale*width, scale*img.height*width/img.width);
     
  }   
  
  
  if (dist(columbus.x, columbus.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(15);
    strokeWeight(1);
    textAlign(CENTER, BOTTOM);
    fill(100);
    rect(0,0,windowWidth, 80);
    fill(255);
    text(text3,windowWidth/2,70);
    textFont('Helvetica');
    image(img3,columbus.x,columbus.y,scale*width, scale*img.height*width/img.width);
     
  }
  
  
  
   
  if (dist(adamsco.x, adamsco.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(15);
    strokeWeight(1);
    textAlign(CENTER, BOTTOM);
    fill(100);
    rect(0,0,windowWidth, 80);
    fill(255);
    text(text4,windowWidth/2,70);
    textFont('Helvetica');
    image(img4,adamsco.x,adamsco.y,scale*width, scale*img.height*width/img.width);
     
  } 
    else {
    fill("#ebe753");
    strokeWeight(1);
    stroke(100);
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


