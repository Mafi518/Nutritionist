const disableScroll = function() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    document.body.classList.toggle('scroll-lock')
    document.body.style.paddingRight = paddingOffset
}

const burger = document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.querySelector('.menu')
    this.classList.toggle('menu-icon__active')
    menu.classList.toggle('menu__active')
    disableScroll()

    let links = document.querySelectorAll('.menu__link').forEach(element => {
        element.onclick = () => {
            menu.classList.toggle('menu__active')
            this.classList.toggle('menu-icon__active')
            disableScroll()
        }
    })
})

const submit = document.querySelector('.contacts__button').addEventListener('click', e => {
    e.preventDefault()
    const popup = document.querySelector('.success')
    const popupBg = document.querySelector('.success__bg')
    const popupExit = document.querySelector('.success__exit')
    disableScroll()


    popup.classList.toggle('success-active')
    popupBg.classList.toggle('success__bg-active')

    popupBg.addEventListener('click', () => {
        popup.classList.remove('success-active')
        popupBg.classList.remove('success__bg-active')
        disableScroll()

    })
    popupExit.addEventListener('click', () => {
        popup.classList.remove('success-active')
        popupBg.classList.remove('success__bg-active')
        disableScroll()
    })
})

$(document).ready(function(){
    $('.feedback__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
});
