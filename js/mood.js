let phase = 0;
let zoff = 0;

var amazing;
var great;
var okay;
var notgreat;
var awful;

var bgcolor;
var bgcolor2;
var bgcolor3;
var bgcolor4;
var bgcolor5;

$(".container").hide();
$("#changedays").hide();
$("#mood").hide();

// check for JS
console.log("hello world!");

// check for jquery
$(function () {
  console.log("hello jquery!");

});

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgcolor = color(157, 167, 135);
  bgcolor2 = color(245, 209, 202);
  bgcolor3 = color(250, 219, 161);
  bgcolor4 = color(228, 218, 127);
  bgcolor5 = color(217, 218, 157);
  bgcolor6 = color(157, 167, 135);
  bgcolor7 = color(228, 218, 127);
  bgcolor8 = color(250, 219, 161);
}

function draw() {
  background(255);
  translate(800, 200);
  strokeWeight(3);
  noFill();
  
    //criar o circulo com Perlin Noise
  beginShape();
   stroke(bgcolor2);
 //radians -- nú mero de vértices
 //criar forma
  for (let a = 0; a < TWO_PI; a +=  radians(2)) {
     //entre -1 e 1
     //definir movinhento
    let xoff = map(cos(a + phase), -20, 10, 20, 50);
    let yoff = map(sin(a + phase), -20, 10, 20, 50);
    
    //definir tamanho
    //o range do Perlin Noise é entre 0 e 1 
    let r = map(noise(xoff, yoff, zoff), 0, 1, 0, height / 4);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  stroke(bgcolor3);
//radians -- número de vértices
 //criar forma
 for (let a = 0; a < TWO_PI; a +=  radians(2)) {
    //entre -1 e 1
   let xoff = map(cos(a + phase), -20, 10, 20, 50);
   let yoff = map(sin(a + phase), -20, 10, 20, 50);
   
   //muda de tamanho de cada vez que corre
   //o range do Perlin Noise é entre 0 e 1 
   let r = map(noise(xoff, yoff, zoff), 0, 1, 40, height / 4);
   let x = r * cos(a);
   let y = r * sin(a);
   vertex(x, y);
 }
 endShape(CLOSE);

 beginShape();
 stroke(bgcolor4);
//radians -- nú mero de vértices
 //criar forma
for (let a = 0; a < TWO_PI; a +=  radians(2)) {
   //entre -1 e 1
  let xoff = map(cos(a + phase), -20, 10, 20, 50);
  let yoff = map(sin(a + phase), -20, 10, 20, 50);
  
  //muda de tamanho de cada vez que corre
  //o range do Perlin Noise é entre 0 e 1 
  let r = map(noise(xoff, yoff, zoff), 0, 1, 80, height / 4);
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x, y);
}
endShape(CLOSE);

beginShape();
 stroke(bgcolor5);
//radians -- nú mero de vértices
 //criar forma
for (let a = 0; a < TWO_PI; a +=  radians(2)) {
   //entre -1 e 1
  let xoff = map(cos(a + phase), -20, 10, 20, 50);
  let yoff = map(sin(a + phase), -20, 10, 20, 50);
  
  //muda de tamanho de cada vez que corre
  //o range do Perlin Noise é entre 0 e 1 
  let r = map(noise(xoff, yoff, zoff), 0, 1, 120, height / 4);
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x, y);
}
endShape(CLOSE);

 //criar o circulo com Perlin Noise
 beginShape();
 stroke(bgcolor6);
//radians -- nú mero de vértices
//criar forma
for (let a = 0; a < TWO_PI; a +=  radians(2)) {
   //entre -1 e 1
   //definir tamanho e movinhento
  let xoff = map(cos(a + phase), -20, 10, 20, 50);
  let yoff = map(sin(a + phase), -20, 10, 20, 50);
  

  
  //muda de tamanho de cada vez que corre
  //o range do Perlin Noise é entre 0 e 1 
  let r = map(noise(xoff, yoff, zoff), 0, 1, 160, height / 4);
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x, y);
}
endShape(CLOSE);

 //criar o circulo com Perlin Noise
 beginShape();
 stroke(bgcolor7);
//radians -- nú mero de vértices
//criar forma
for (let a = 0; a < TWO_PI; a +=  radians(2)) {
   //entre -1 e 1
   //definir tamanho e movinhento
  let xoff = map(cos(a + phase), -20, 10, 20, 50);
  let yoff = map(sin(a + phase), -20, 10, 20, 50);
  
  //muda de tamanho de cada vez que corre
  //o range do Perlin Noise é entre 0 e 1 
  let r = map(noise(xoff, yoff, zoff), 0, 1, 200, height / 4);
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x, y);
}
endShape(CLOSE);

 //criar o circulo com Perlin Noise
 beginShape();
 stroke(bgcolor8);
//radians -- nú mero de vértices
//criar forma
for (let a = 0; a < TWO_PI; a +=  radians(2)) {
   //entre -1 e 1
   //definir tamanho e movinhento
  let xoff = map(cos(a + phase), -20, 10, 20, 50);
  let yoff = map(sin(a + phase), -20, 10, 20, 50);
  
  //muda de tamanho de cada vez que corre
  //o range do Perlin Noise é entre 0 e 1 
  let r = map(noise(xoff, yoff, zoff), 0, 1, 240, height / 4);
  let x = r * cos(a);
  let y = r * sin(a);
  vertex(x, y);
}
endShape(CLOSE);

  phase += 0.003;
  zoff += 0.01;
  
}

$(".mood").on('click', change);
function change(){
  bgcolor3 = color(245, 209, 202);
  bgcolor4 = color(250, 219, 161);
  bgcolor5 = color(228, 218, 127);
  bgcolor6 = color(217, 218, 157);
  bgcolor7 = color(157, 167, 135);
  bgcolor8 = color(228, 218, 127);
  $(".container").show();
  $("#feel").hide();
  $("#mood").show();
  $("#changedays").show();

}

$("#amazing").on('click', amazing);

function amazing(){
    bgcolor2 = color(157, 167, 135);
    $("#today").css("background-color", bgcolor2);
    localStorage.setItem("1", "amazing");
}

$("#great").on('click', great);

function great(){
    bgcolor2 = color(217, 218, 157);
    $("#today").css("background-color", bgcolor2);
    localStorage.setItem("1", "great");
}

$("#okay").on('click', okay);

function okay(){
  bgcolor2 = color(228, 218, 127);
  $("#today").css("background-color", bgcolor2);
    localStorage.setItem("1", "okay");
}

$("#notgreat").on('click', notgreat);

function notgreat(){
  bgcolor2 = color(250, 219, 161);
  $("#today").css("background-color", bgcolor2);
    localStorage.setItem("1", "not great");
}


$("#awful").on('click', awful);

function awful(){
  bgcolor2 = color(245, 209, 202);
  $("#today").css("background-color", bgcolor2 );
    localStorage.setItem("1", "awful");
}

$("#mood").on('click', moodEdit);

function moodEdit(){
  $(".container").hide();
    $("#feel").show();
    $("#changedays").hide();
    $("#mood").hide();
}

//DIAS EDITÁVEIS
$(".days #dates").on('click', changecolor);

function changecolor(){
  $(this).css("background-color", bgcolor);

  $("#am").on('click', am);
function am(){
    bgcolor = color(157, 167, 135);
    $(this).css("background-color", bgcolor);
}

$("#gr").on('click', gr);
function gr(){
    bgcolor = color(217, 218, 157);
    $(this).css("background-color", bgcolor);
}

$("#ok").on('click', ok);

function ok(){
  bgcolor = color(228, 218, 127);
  $(this).css("background-color", bgcolor);
}

$("#ng").on('click', ng);

function ng(){
  bgcolor = color(250, 219, 161);
  $(this).css("background-color", bgcolor);
}


$("#aw").on('click', aw);

function aw(){
  bgcolor = color(245, 209, 202);
  $(this).css("background-color", bgcolor);
}
}