const key = 'pk.eyJ1Ijoia2VpdGhyb2IxNCIsImEiOiJja20wc3Z4MXcwYzFyMnFxdGQzcW5yM2gwIn0.Zd4sexHlb0zblGiORQl2Tw';
let img;

const mappa = new Mappa('MapboxGL', key)
let myMap;
let canvas;

const options= {
  lat: 39.162020,
  lng: -82.681140,
  zoom: 5,
  style:'mapbox://styles/keithrob14/ckmz75bco1d4b17ntgoqsrzbr', 
  pitch:20,
};


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  //greenhouse = loadTable('Greenhouse_Data.csv','csv','header')
  img = createImg('images/meadowhollow.jpg');
  img2 = createImg('images/canon.jpg');
  img.hide();
}


function draw() {
  clear();
  
  //noFill();
  stroke(255);
  strokeWeight(2);
  const zoom = myMap.zoom();
  const meadowhollow = myMap.latLngToPixel(39.162020,-82.681140);
  const aep = myMap.latLngToPixel(39.703600, -81.683414);
  const home = myMap.latLngToPixel(40.339175, -82.416691);
  const canon = myMap.latLngToPixel(38.630889, -82.650441);
  const shawnee = myMap.latLngToPixel(38.675166, -83.151572);
  const av = myMap.latLngToPixel(40.414123, -82.367495);
  
  
  
  if(dist(meadowhollow.x,meadowhollow.y,mouseX,mouseY)<=15){
   fill(0,100);
   image(img,meadowhollow.x,meadowhollow.y,200,200);
  }else{
    fill(255,100);
  }
  ellipse(meadowhollow.x,meadowhollow.y,20,15);
  

  
    
  
  
  

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




