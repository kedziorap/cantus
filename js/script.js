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
    nextArrow: $('#next-intro'),
    prevArrow: $('#prev-intro'),
    responsive: [
        {
          breakpoint: 845,
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
      ]
  });
//CONCERTS
var concerts = $('.concert__item');
var concertLength = concerts.length;
var concertsProgress = $('.concert__progress');
var indexConcert = 0;
function progressSecondBar() {
    concertsProgress.css({
        width: 1/concertLength*100 +'%',
        left: indexConcert/concertLength*100 +'%',
    }, setTimeout(changeConcert, 8000));
}
function changeConcert() {
    concerts.eq(indexConcert).addClass('concert__item--hide');
    (indexConcert == concertLength - 1) ? indexConcert = 0 : indexConcert += 1;
    concerts.eq(indexConcert).removeClass('concert__item--hide');
    progressSecondBar();
}
progressSecondBar();

//VIDEOS

$('.videos__list').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: $('#next-video'),
    prevArrow: $('#prev-video'),
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});