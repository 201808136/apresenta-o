var x = 0;
var array = Array();
document.querySelector(".data").innerHTML = new Date().toDateString();
var modal = document.getElementById("journalentries");
// check for JS
console.log("hello world!");

// check for jquery
$(function () {
  console.log("hello jquery!");
});

console.log("hola");
var count = 0;
let today = new Date();
let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
$(".currentdate").html(date);
let prompts = ["How does your favourite song make you feel?", "What's your happy place?", "Describe your happiest childhood memory", "How can you celebrate yourself today?", "What do you feel grateful for?", "What can you do today that you didn’t think you could do a year ago?", "How do you calm your nerves in a difficult situation?", "What does your ideal day look like?", "Where do you see yourself in 6 months? A year? 5 years? 10 years?", "What does happiness mean to you?", "If you could give advice to your younger self, what would you say?", "If today was your last day, what would you do?", "If you could have any three things in the world, what would they be?", "What are 10 things you love about yourself? Why?", "Who do you look up to the most? Why?", "At the end of life, what would you want to be remembered by?"];
let prompt = prompts[Math.floor(Math.random()*prompts.length)];
$(".writingprompt1").html(prompt);

    $("#refreshbutton").on("click", refresh);
function refresh() {
    let prompt = prompts[Math.floor(Math.random()*prompts.length)];
    $(".writingprompt1").html(prompt);
}

    $("#submitbtn").on("click", function() {
      modal.style.display = "block";
      $("#submitbtn").hide();
      $("#refreshbutton").hide();
    });

    function add_element_to_array()
{
 array[x] = document.getElementById("entry").value;
 x++;
 document.getElementById("entry").value = "";
 var e = "";   
    
   for (var y=0; y<array.length; y++)
   {
     e +="<div class='post' id = '"+ y +"'<h3>"+prompt +"</h3> <h4 class='data'>"+ date + "</h4> <p>" + array[y] + "</p><hr></div>";
   }
  document.getElementById("journalentries").innerHTML = '<span class="close">&times;</span>'+e;
   localStorage.setItem("post", JSON.stringify(e));
 
   var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  $("#submitbtn").show();
      $("#refreshbutton").show();
}
}
// Get the modal



// Get the image and insert it inside the modal - use its "alt" text as a caption

$("#newentry").on("click", function() {
  modal.style.display = "block";
  $("#submitbtn").hide();
      $("#refreshbutton").hide();
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  $("#submitbtn").show();
      $("#refreshbutton").show();
}/*
$("#newentry").on("click", function() {
  var modal = document.getElementById("journalentry");
modal.style.display = "block";
});*/