! function () {
    var view = View('#mySlides')
    // view.style.border = '1px solid red'
    // console.dir(view)

    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
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
            }
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            // 这里的view.querySelector的用法我是没有想到的，我一直以为它只能
            // 通过document.这样，没想到元素也可以这样
            var mySwiper = new Swiper(
                this.view.querySelector('.swiper-container'),
                this.swiperOptions
            )
        }
    }
    // console.log(view)
    controller.init(view)
}.call()