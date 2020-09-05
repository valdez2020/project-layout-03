'use strict'

$(document).ready(function(){

   //funciones

   function inspectorWidth(){
    $(window).resize(function(){ 
        width = $(window).width(); 
        
        if(width > 500 || (form_name !== null && form_name !== undefined)){
            mostrarInfo();
        }else{
            ocultarInfo();
        }
        });
};

function mostrarInfo(){
    info.css('display','block');
    console.log("falso");
    show = true;
}

function ocultarInfo(){
    info.css('display','none');
    console.log("verdadero");
    show = false;
}


        //login button
        var info = $('#info');
        var button = $('#login_button');
        var width = $(window).width();
        var show = false;


    button.click(function(){  

        if(show == false){
            mostrarInfo();
        }else{
            ocultarInfo();
        }
    });
    inspectorWidth();

            
        
        //false login

        $("#login form").submit(function(){
        var new_form_name = $("#form_name").val();

        localStorage.setItem("form_name",new_form_name);
        
        });

        var form_name = localStorage.getItem("form_name");

        if (form_name !== null && form_name !== undefined){
           var about_parrafo = $("#about p");
            $('#login_button').css('display','none');
            info.css('display','block');


           about_parrafo.html("<br><strong>Bienvenido/a, " + form_name +"</strong>");
           about_parrafo.append('<br><a href="#" id="logout">Log Out</a>');

           $("#login").hide();

           $("#logout").click(function(){
            localStorage.clear();
            location.reload();
            if(width < 501){
            info.css('display','none');
                        show = false;}
           });


        }














});