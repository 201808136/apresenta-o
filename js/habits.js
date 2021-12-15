//check for JS
console.log("hello world!");
$("#gr").hide();
$("#ok").hide();
$("#ng").hide();
$("#aw").hide();

var sleep = 0;

// check for jquery
$(function () {
  console.log("hello jquery!");
});
/*
function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
 } */

var bgcolor;


function setup() {
  bgcolor = color(157, 167, 135);
}


//DIAS EDITÁVEIS
$(".days #dates").on('click', changecolor);
//só deixar carregar num botão depois do submit
function changecolor(){
  sleep = sleep + 1;
 console.log(sleep);
  $(this).css("background-color", bgcolor);
  
  $("#am").on('click', am);

function am(){
  bgcolor = color(228, 218, 127);
    $(this).css("background-color", bgcolor);
}

$("#gr").on('click', gr);
function gr(){
  bgcolor = color(250, 219, 161);
    $(this).css("background-color", bgcolor);
}

$("#ok").on('click', ok);

function ok(){
  bgcolor = color(245, 209, 202);
  $(this).css("background-color", bgcolor);
}

$("#ng").on('click', ng);

function ng(){
 //fazer alguma coisa para as cores não mudarem mais
}

}


$("#am").on('click', am);

function am(){
   $("#gr").show();
   $("#am").hide();
   localStorage.setItem("slp", sleep);
}

$("#gr").on('click', gr);
function gr(){
  $("#ok").show();
  $("#gr").hide();
  localStorage.setItem("wakeup", sleep);
}

$("#ok").on('click', ok);

function ok(){
  $("#ng").show();
  $("#ok").hide();
  localStorage.setItem("eat", sleep);
}

$("#ng").on('click', ng);

function ng(){
  $("#ng").hide();
  localStorage.setItem("work", sleep);
  document.querySelector("#gráficos").style.opacity = "1";  
  $("#other").hide();
}

//esta parte ainda não funciona
//var k = localStorage.getItem("time");
const totalDays = 31;
const doneSleep = localStorage.getItem('slp');
const doneWake = localStorage.getItem("wakeup") - localStorage.getItem('slp');
const doneEat = localStorage.getItem("eat") - localStorage.getItem("wakeup");
const doneEx = localStorage.getItem("work") - localStorage.getItem("eat");

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
} 
//percentage(doneSleep, totalDays);

document.querySelector("#slp").innerHTML = Math.round(percentage(doneSleep, totalDays)) + "%";
document.querySelector("#wk").innerHTML = Math.round(percentage(doneWake, totalDays)) + "%";
document.querySelector("#et").innerHTML = Math.round(percentage(doneEat, totalDays)) + "%";
document.querySelector("#xx").innerHTML = Math.round(percentage(doneEx, totalDays)) + "%";
