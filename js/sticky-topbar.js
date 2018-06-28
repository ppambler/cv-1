! function () {
    var view = document.querySelector('#topNavBar')
    view.style.border = '1px solid red'
    var controller = {
        view: null,
        // 这个初始化联想到巴贝奇差分机的运算（参见计算机专业导论）
        init: function (view) {
            this.view = view
            this.bindEvents()
            // this.bindEvents,call(this)
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', function (x) {
                if (window.scrollY > 0) {
                    view.classList.add('sticky')
                } else {
                    view.classList.remove('sticky')
                }
            })
        }

    }
    controller.init(view)
    // controller.init.call(controller,view)
}.call()