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

    // Todo: [About video section] VenoBox (for video) activation code
    new VenoBox({
        selector: '.video-link',
        ratio: '4x3',
        spinner: 'wander'
    });

    // Todo [Gallery banner section] VenBox (for gallery images) activation code
    new VenoBox({
        selector: '.img-link',
        numeration: true,
        spinner: 'grid'
    });
})