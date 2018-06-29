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
            // 箭头函数没有this,即你传入一个this值也不会有效果
            // 它只会往上找
            // 这里监听window是个缺陷，这意味着这个this的值是scroll的地址
            // 所以要么你就用bind指明这个this的值，要么你就用箭头函数
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        // 一个函数只做一件事
        active: function() {
            this.view.classList.add('sticky')
        },
        deactive: function() {
            this.view.classList.remove('sticky')
        }

    }
    controller.init(view)
    // controller.init.call(controller,view)
}.call()