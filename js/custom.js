 // MDB Lightbox Init
/*
        $(function () {
            $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
        });

        // Adding animations to the sections
        $("section").addClass("wow fadeIn");

        // Animations Init
        new WOW().init();
*/

var slides;
var slide_count = 0;
var slide = 0;
$(document).ready(function() {
    slides = $(".carousel-item");
    slide_count = slides.length;
    console.log(slides);
    
    setInterval(function() {
        // var s = slide++;
        slides[slide].setAttribute('class', 'carousel-item');
        // slides[slide].toggle("slide:left");
        
        /* console.log(slide);
        ++slide;
        console.log(slide); */
        
        ++slide;
        if(slide >= slide_count) slide = 0;
        
        slides[slide].setAttribute('class', 'carousel-item active');
        // slides[slide].toggle("slide:right");
    }, 5000);
});