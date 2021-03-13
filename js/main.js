$(document).ready(function () {

    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });
    
    // wow js
    
    new WOW().init();
    
    // scroll to top js
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".scroll_to_top").fadeIn();
        } else{
            $(".scroll_to_top").fadeOut();
        }
    });
    
    $(".scroll_to_top").click(function(){
        $("html, body").animate({
            scrollTop:0
        }, 1000);
    });
    
    // preloader js
    
    $(window).on("load", function(){
        $(".preloader").delay(2000).fadeOut(500);
    });
    
    // responsive menu js
    
    $(".openNav").click(function(){
        $(".overlay").slideDown();
    });
    
    $(".closeNav").click(function(){
        $(".overlay").slideUp();
    });
    
    $(".overlay_content a").click(function(){
        $(".overlay").slideUp(300);
    });
    
    $(".overlay a img").click(function(){
        $(".overlay").slideUp(300);
    });
    
    
    

});





