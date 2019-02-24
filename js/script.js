//menu
$('#hamburger').click(function(){
    $('.navbar__menu--main').slideToggle();
});

$('.navbar__link').click(function(){
    if($(window).width() <= 992) $('.navbar__menu--main').slideToggle();
});

$(window).resize(function(){
    if($(window).width() > 992) $('.navbar__menu--main').removeAttr('style');
});