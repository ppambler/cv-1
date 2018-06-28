!function () {
    var view = document.querySelector('#mySlides')
    view.style.border = '1px solid red'
    // console.dir(view)
    // 这里的view.querySelector的用法我是没有想到的，我一直以为它只能
    // 通过document.这样，没想到元素也可以这样
    var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
}.call()