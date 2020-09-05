'use strict'

$(document).ready(function(){

  

        //theme selector
        var theme = $("#theme");

        var first_img = $("#first_img");
        var second_img = $("#second_img");
        var third_img = $("#third_img");


        if(localStorage.getItem("green") != null){
            theme.attr("href", "css/green.css");
            imgGreenTheme();

        }else if(localStorage.getItem("red") != null){
            theme.attr("href", "css/red.css")
            imgRedTheme();
            
        }else if(localStorage.getItem("blue") != null){
            theme.attr("href", "css/blue.css");
            imgBlueTheme();
        }


        function imgGreenTheme(){
            first_img.attr("src","./img/hojas.jpg");
            second_img.attr("src","./img/rojo.jpg");
            third_img.attr("src","./img/cielo.jpg");
        }

        function imgRedTheme(){
            first_img.attr("src","./img/rojo.jpg");
            second_img.attr("src","./img/hojas.jpg");
            third_img.attr("src","./img/cielo.jpg");

        }

        function imgBlueTheme(){
            first_img.attr("src","./img/cielo.jpg");
            second_img.attr("src","./img/hojas.jpg");
            third_img.attr("src","./img/rojo.jpg");

        }

        $("#to-green").click(function(){
            theme.attr("href","css/green.css");

            imgGreenTheme();

		 	localStorage.setItem("green", "green");
 
		 	localStorage.removeItem("red");
		 	localStorage.removeItem("blue");
        });
        
        $("#to-red").click(function(){
            theme.attr("href","css/red.css");

            imgRedTheme();

            localStorage.setItem("red", "red");
 
		 	localStorage.removeItem("green");
		 	localStorage.removeItem("blue");
        });

        $("#to-blue").click(function(){
            theme.attr("href","css/blue.css");

            imgBlueTheme();

            localStorage.setItem("blue", "blue");
 
		 	localStorage.removeItem("green");
		 	localStorage.removeItem("red");
        });






})