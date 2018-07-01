! function () {
    var view = View('nav.menu')
    // view.style.border = '1px solid red'
    var controller = {
        view: null,
        aTags: null,
        liTags: null,

        init: function () {
            this.view = view
            this.initAnimation()
            this.bindEvents()
            this.bindEventsForliTags()
        },
        initAnimation: function () {
            // 这个叼毛我似乎忘记它的作用了
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function () {
            let top = element.offsetTop

            let currentTop = window.scrollY
            let targetTop = top - 80
            let s = targetTop - currentTop

            var coords = {
                y: currentTop
            }; // Start at (0, 0)
            // 设行驶100px需要0.3s，回头会变为负像素，即s为负值，于是t也为负，导致t>500,显得很慢，因此需要绝对值  
            var t = Math.abs((s / 100) * 300)
            // 如果抵达目的地超过0.5s,那就规定最多在0.5s之内抵达目的地
            if (t > 500) {
                t = 500
            }
            var tween = new TWEEN.Tween(coords)
                .to({
                    y: targetTop
                }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start(); //开始缓动
        },
        bindEvents: function () {
            this.aTags = this.view.querySelectorAll('ul > li > a')
            for (let i = 0; i < this.aTags.length; i++) {
                this.aTags[i].onclick = function (x) {
                    x.preventDefault()
                    let a = x.currentTarget
                    //    a.preventDefault()
                    let href = a.getAttribute('href')
                    //    debugger
                    let element = document.querySelector(href)
                }
            }
        },
        // 这个功能不应该放在这儿的,为什么？一个模块做了两件事
        // 还有一点让我产生疑问的是，把this.liTags换成是let liTags到底好不好？？、
        // 如果换了，那么前面的liTags:null有没有存在的必要呢？？？
        bindEventsForliTags: function () {
            this.liTags = this.view.querySelectorAll('ul > li')
            for (let i = 0; i < this.liTags.length; i++) {
                this.liTags[i].onmouseenter = function (x) {
                    x.currentTarget.classList.add('active')
                }
                this.liTags[i].onmouseleave = function (x) {
                    x.currentTarget.classList.remove('active')
                }
            }
        }
    }
    controller.init(view)
}.call()