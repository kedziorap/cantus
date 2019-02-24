//MENU
$('#hamburger').click(function(){
    $('.navbar__menu--main').slideToggle();
});

$('.navbar__link').click(function(){
    if($(window).width() <= 992) $('.navbar__menu--main').slideToggle();
});

$(window).resize(function(){
    if($(window).width() > 992) $('.navbar__menu--main').removeAttr('style');
});

//SLIDER
//progress
var slides = $('.slider__item');
var index = 0;
var progress = $('.slider__progress');
function changeSlide() {
    progress.css({
        transition: 'none',
        width: 0+'%'
    });
    slides.eq(index).addClass('slider__item--hide');
    (index == slides.length - 1) ? index = 0 : index += 1;
    slides.eq(index).removeClass('slider__item--hide');
    progressBar();
}
function progressBar() {
    progress.animate({width: 100+'%'},5000,'linear',function(){
        changeSlide();
    });
}
progressBar();

