$("#goal").hide();
$("#news").hide();
$("#tryagain").hide();
$("#cong").hide();
$("#badges").hide();
      $("#submit").on('click', addaward)

      function addaward(){
        $("#form").hide();
        $("#submit").hide();
        $("#goal").show();
          if($( "input[type=checkbox]" ).length ==$( "input:checked" ).length){
            console.log("woo");
            localStorage.setItem("badges", "yes");
            $("#cong").show();
            $("#badges").show();
        } else {
            localStorage.setItem("badges", "no");
            $("#tryagain").show();
        }
        $("#goal").on('click', switchs)

        function switchs() {
            $("#form").show();
        $("#submit").show();
        $("#goal").hide();
        $("#tryagain").hide();
        $("#cong").hide();
$("#badges").hide();
        }
    }

    $("#newentry").on('click', addnew)
    function addnew(){
        $("#news").show();

        $("#add").on('click', function(){
            $("#news").hide();
          var addnews = $("#new").val();
          console.log('ho')
        $("#form").append(' <p><input type="checkbox" id="dc" name="dc" value="Daily challenge">'+addnews+'</p><br>')
        });
/*
        <input type="checkbox" id="dc3" name="dc3" value="Daily challenge 3">
	<label for="dc3"> Daily challenge 3</label>*/
    }