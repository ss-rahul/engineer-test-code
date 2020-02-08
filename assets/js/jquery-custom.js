// Header scroll
$(window).scroll(function () {
    var srollDistance = $(window).scrollTop();
    if (srollDistance >= 100) {
        $(".header-navbar-wrap").addClass("header-fixedtop");
    }
    else {
        $(".header-navbar-wrap").removeClass("header-fixedtop");
    }
});

// Menu overlay
$(document).ready(function(){
    $('.humburger-menu-ico').click(function(){
        $('.header-menu').addClass('header-menu-open');
        $('.menu-overlay').addClass('menu-overlay-show');
        
    });
    $('.menu-overlay').click(function(){
        $('.header-menu').removeClass('header-menu-open');
        $('.menu-overlay').removeClass('menu-overlay-show');
    });

    $('.trainer-card').mouseenter(function (){
        $(this).addClass('flip');
    });
    $('.trainer-card').mouseleave(function (){
        $(this).removeClass('flip');
    });
});

// Slider
var stlen = $('#slider .strip a').size();
var stx = 0;
var stpos = 0;
var stspeed = 500;
var stdelay = 5000;
var stpause = false;
var stto = null;
var stwidth = 1920;

function sliderTopRun() {
    if(!stpause) {
        stx = stpos * -stwidth;
        $('#slider .strip').animate({left: stx+'px'}, stspeed);
    }
    if(stto) clearTimeout(stto);
    stto = setTimeout(sliderTopNext, stdelay);
}
function sliderTopPrev() {
    if(!stpause) {
        stpos--;
        if(stpos < 0) stpos = stlen - 1;
    }
    sliderTopRun();
}
function sliderTopNext() {
    if(!stpause) {
        stpos++;
        if(stpos >= stlen) stpos = 0;
    }
    sliderTopRun();
}
$('#slider .strip').css('width', (stlen * stwidth)+'px');
$('#slider .next').click(sliderTopNext);
$('#slider .prev').click(sliderTopPrev);
$('#slider .strip').hover(
    function(e) { stpause = true; },
    function(e) { stpause = false; }
);
sliderTopRun();