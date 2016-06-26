$(document).ready(function () {
    $('.carousel').slick({
        arrows: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        onAfterChange: function(){
            var cat = ($('#carousel').slickCurrentSlide()) + 1;
            $('.client-text > li').hide();
            $('.client-text > li:nth-child('+ cat +')').show();
        }
    });
});