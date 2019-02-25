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

//SLICK INTORDUCE

$('.member-slider__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: $('.member-slider__arrow-next'),
    prevArrow: $('.member-slider__arrow-prev'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
