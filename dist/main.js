'use strict';

var disableScroll = function disableScroll() {
    var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.toggle('scroll-lock');
    document.body.style.paddingRight = paddingOffset;
};

var burger = document.querySelector('.menu-icon').addEventListener('click', function () {
    var _this = this;

    var menu = document.querySelector('.menu');
    this.classList.toggle('menu-icon__active');
    menu.classList.toggle('menu__active');
    disableScroll();

    var links = document.querySelectorAll('.menu__link').forEach(function (element) {
        element.onclick = function () {
            menu.classList.toggle('menu__active');
            _this.classList.toggle('menu-icon__active');
            disableScroll();
        };
    });
});

var submit = document.querySelector('.contacts__button').addEventListener('click', function (e) {
    e.preventDefault();
    var popup = document.querySelector('.success');
    var popupBg = document.querySelector('.success__bg');
    var popupExit = document.querySelector('.success__exit');
    disableScroll();

    popup.classList.toggle('success-active');
    popupBg.classList.toggle('success__bg-active');

    popupBg.addEventListener('click', function () {
        popup.classList.remove('success-active');
        popupBg.classList.remove('success__bg-active');
        disableScroll();
    });
    popupExit.addEventListener('click', function () {
        popup.classList.remove('success-active');
        popupBg.classList.remove('success__bg-active');
        disableScroll();
    });
});

$(document).ready(function () {
    $('.feedback__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
});