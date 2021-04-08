const key = 'pk.eyJ1Ijoia2VpdGhyb2IxNCIsImEiOiJja20wc3Z4MXcwYzFyMnFxdGQzcW5yM2gwIn0.Zd4sexHlb0zblGiORQl2Tw';
let img;

const mappa = new Mappa('MapboxGL', key)
let myMap;
let canvas;

const options= {
  lat: 39.162020,
  lng: -82.681140,
  zoom: 6,
  style:'mapbox://styles/keithrob14/ckmz75bco1d4b17ntgoqsrzbr', 
  pitch:40,
};


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  //greenhouse = loadTable('Greenhouse_Data.csv','csv','header')
  img = createImg('images/meadowhollow.jpg');
  img.hide();
}


function draw() {
  clear();
  
  //noFill();
  stroke(255);
  strokeWeight(2);
  const zoom = myMap.zoom();
  const meadowhollow = myMap.latLngToPixel(39.162020,-82.681140);
  const morganco = myMap.latLngToPixel(39.531925, -81.943712);
  const Columbus = myMap.latLngToPixel(39.996891, -82.809103);
  const adamsco = myMap.latLngToPixel(38.679044, -83.424200);
  
  
  
  
  if(dist(meadowhollow.x,meadowhollow.y,mouseX,mouseY)<=15){
   fill(0,100);
   image('images/Meadow Hollow.jpg',meadowhollow.x,meadowhollow.y,200,200);
  }else{
    fill(255,100);
  }
  ellipse(meadowhollow.x,meadowhollow.y,20,15);
    
    
    
 if(dist(morganco.x,morganco.y,mouseX,mouseY)<=15){
   fill(0,100);
   image('images/Morgan County.jpg',morganco.x,morganco.y,200,200);
  }else{
    fill(255,100);
  }
  ellipse(morganco.x,morganco.y,20,15);
    
    
    
 if(dist(Columbus.x,Columbus.y,mouseX,mouseY)<=15){
   fill(0,100);
   image('images/Columbus.jpg',Columbus.x,Columbus.y,200,200);
  }else{
    fill(255,100);
  }
  ellipse(Columbus.x,Columbus.y,20,15);
    
    
    
    
 if(dist(adamsco.x,adamsco.y,mouseX,mouseY)<=15){
   fill(0,100);
   image('images/Adams County.jpg',adamsco.x,adamsco.y,200,200);
  }else{
    fill(255,100);
  }
  ellipse(adamsco.x,adamsco.y,20,15);
  
    
      
  print(zoom);
}



$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});




