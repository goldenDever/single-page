$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky

    // $(window).on('scroll', function (event) {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 20) {
    //         $(".navbar-area").removeClass("sticky");
    //         $(".navbar-area img").attr("src", "assets/images/logo.svg");
    //     } else {
    //         $(".navbar-area").addClass("sticky");
    //         $(".navbar-area img").attr("src", "assets/images/logo-2.svg");
    //     }
    // });

    
    //===== close navbar-collapse when a  clicked

    // $(".navbar-nav a").on('click', function () {
    //     $(".navbar-collapse").removeClass("show");
    // });

    // $(".navbar-toggler").on('click', function () {
    //     $(this).toggleClass("active");
    // });

    // $(".navbar-nav a").on('click', function () {
    //     $(".navbar-toggler").removeClass('active');
    // });
    
    
    // //===== Sidebar

    // $('[href="#side-menu-left"], .overlay-left').on('click', function (event) {
    //     $('.sidebar-left, .overlay-left').addClass('open');
    // });

    // $('[href="#close"], .overlay-left').on('click', function (event) {
    //     $('.sidebar-left, .overlay-left').removeClass('open');
    // });
    
    //===== Isotope Project 4

    $('.container').imagesLoaded(function () {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s'
        });

        // filter items on button click
        $('.portfolio-menu ul').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.portfolio-menu ul li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
});