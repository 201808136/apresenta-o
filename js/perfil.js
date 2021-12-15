// check for JS
console.log("hello world!");
$("#badges").hide();
// check for jquery
$(function () {
  console.log("hello jquery!");
});

let badg = localStorage.getItem('badges');
if(badg == "yes"){
    $("#badges").show();
    $("#nobadge").hide();
}

var aValue = localStorage.getItem("nome");
$("#mood").hide();
$(".container").hide();
$("#id").html("Hello, "+ aValue);
$("#name").html( aValue);

//PERFIL
$("#change").on('click', edit);

function edit(){
    console.log('edit');
    $("#name").html('<label for="nome">Name</label><br><input type="text" name="nome" id="nome" class="login_field">');
    $("#birthday").html('<label for="birth">Birthday</label><br><input type="date" id="birth" value="2000-01-01">');
    $("#location").html('<label for="locate">Location</label><br><input type="text" name="locate" id="locate" class="login_field">');
    $("#education").html('<label for="educ">Education</label><br><input type="text" name="educ" id="educ" class="login_field">');
    $("#education").after('<button id="save">Save Changes</button>')
    $("#change").hide();

$("#save").on('click', save);
    function save(){
        var aniv = document.getElementById("birth").value;
        var nome = $("#nome").val();
        //var aniv = $("#birth").val();
        var local = $("#locate").val();
        var ed = $("#educ").val();
        localStorage.setItem("nome", nome);
        localStorage.setItem("aniversário", aniv);
        localStorage.setItem("localização", local);
        localStorage.setItem("educação", ed);
        
    $("#name").html('<h3 id="name">'+nome+'</h3>');
    $("#birthday").html('<p id="birthday">Birthday | '+aniv+'</p>');
    $("#location").html('<p id="location">Location | '+ local+'</p>');
    $("#education").html('<p id="education">Education | '+ed+'</p>');
    $("#save").remove();
    $("#change").show();
}
}

$("#logout").on('click', logout);

function logout(){
    window.location.href= '/html/index.html';
}