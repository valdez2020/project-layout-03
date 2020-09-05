'use strict'

$(document).ready(function(){

    
     //Slider

         $('.gallery').bxSlider({
             mode: 'fade',
             captions: true,
             slideWidth: 1200
            });
            

    //Posts

        var posts = [
            {
                title: "title test 1",
                date: " publication day: " + moment().format("dddd") + ", " + moment().format("MMMM") + " " + moment().date() + ",  " + moment().format("YYYY"),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus."
            },
            {
                title: "title test 2",
                date: " publication day: " + moment().format("dddd") + ", " + moment().format("MMMM") + " " + moment().date() + ",  " + moment().format("YYYY"),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus."
            },
            {
                title: "title test 3",
                date: " publication day: " + moment().format("dddd") + ", " + moment().format("MMMM") + " " + moment().date() + ",  " + moment().format("YYYY"),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus."
            },
            {
                title: "title test 4",
                date: " publication day: " + moment().format("dddd") + ", " + moment().format("MMMM") + " " + moment().date() + ",  " + moment().format("YYYY"),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus."
            },
            {
                title: "title test 5",
                date: " publication day: " + moment().format("dddd") + ", " + moment().format("MMMM") + " " + moment().date() + ",  " + moment().format("YYYY"),
                content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum cumque repellendus, vitae odit, eius dignissimos odio modi debitis minima veritatis perferendis? Rerum beatae a exercitationem consectetur, nesciunt sint repellendus."
            },
        ];
        
        
        posts.forEach((element, index) => {
            
            var post = `
            <article class="post">
            <h2>${element.title}</h2>
            <span class="date">${element.date}</span>
            <p>
            ${element.content}
            </p>
            <a href="#" class="buttom-more">Read more...</a>
            </article>
            `;
            

            $("#posts").append(post);
            
        });
        
        //scroll to web up

        $(".to-up").click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            },1000);

            return false;
        });

});