'use strict'

$(document).ready(function(){
      

        //scroll to web up

        $(".to-up").click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            },1000);

            return false;
        });
        
        //login button

        let show = false;
        let info = $('#info');
        $('#login_button').click(function(){
            if(show == false){
               info.css('display','block');
                show = true;
            }else{
               info.css('display','none');
                show = false;
            }
        });
        //false login

        $("#login form").submit(function(){
        var new_form_name = $("#form_name").val();

        localStorage.setItem("form_name",new_form_name);
        
        });

        var form_name = localStorage.getItem("form_name");

        if (form_name !== null && form_name !== undefined){
           var about_parrafo = $("#about p");

           about_parrafo.html("<br><strong>Bienvenido/a, " + form_name +"</strong>");
           about_parrafo.append('<br><a href="#" id="logout">Log Out</a>');

           $("#login").hide();

           $("#logout").click(function(){
            localStorage.clear();
            location.reload();
            
           });

        }


        //watch
 setInterval(function(){
    var watch = moment().format("hh:mm:ss");
    $("#watch").html(watch);
 },1000);
});