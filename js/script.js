$(function () {
    "use strict";

    // Todo: Slick slider activation code
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: '<i class="fa-solid fa-angle-left prev_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right next_arrow"></i>'
    });
})