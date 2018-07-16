'use strict';

!function () {
    var view = View('nav.menu');
    // view.style.border = '1px solid red'
    var controller = {
        view: null,
        aTags: null,
        liTags: null,

        init: function init() {
            this.view = view;
            this.initAnimation();
            this.bindEvents();
            this.bindEventsForliTags();
        },
        initAnimation: function initAnimation() {
            // 这个叼毛我似乎忘记它的作用了
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function scrollToElement(element) {
            var top = element.offsetTop;

            var currentTop = window.scrollY;
            var targetTop = top - 80;
            var s = targetTop - currentTop;

            var coords = {
                y: currentTop
            }; // Start at (0, 0)
            // 设行驶100px需要0.3s，回头会变为负像素，即s为负值，于是t也为负，导致t>500,显得很慢，因此需要绝对值  
            var t = Math.abs(s / 100 * 300);
            // 如果抵达目的地超过0.5s,那就规定最多在0.5s之内抵达目的地
            if (t > 500) {
                t = 500;
            }
            var tween = new TWEEN.Tween(coords).to({
                y: targetTop
            }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
                window.scrollTo(0, coords.y);
            }).start(); //开始缓动
        },
        bindEvents: function bindEvents() {
            var _this = this;

            this.aTags = this.view.querySelectorAll('ul > li > a');
            for (var i = 0; i < this.aTags.length; i++) {
                this.aTags[i].onclick = function (x) {
                    x.preventDefault();
                    var a = x.currentTarget;
                    //    a.preventDefault()
                    var href = a.getAttribute('href');
                    //    debugger
                    var element = document.querySelector(href);
                    _this.scrollToElement(element);
                };
            }
        },
        // 这个功能不应该放在这儿的,为什么？一个模块做了两件事
        // 还有一点让我产生疑问的是，把this.liTags换成是let liTags到底好不好？？、
        // 如果换了，那么前面的liTags:null有没有存在的必要呢？？？
        bindEventsForliTags: function bindEventsForliTags() {
            this.liTags = this.view.querySelectorAll('ul > li');
            for (var i = 0; i < this.liTags.length; i++) {
                this.liTags[i].onmouseenter = function (x) {
                    x.currentTarget.classList.add('active');
                };
                this.liTags[i].onmouseleave = function (x) {
                    x.currentTarget.classList.remove('active');
                };
            }
        }
    };
    controller.init(view);
}.call();