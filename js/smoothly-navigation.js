! function () {
    var view = document.querySelector('nav.menu')
    view.style.border = '1px solid red'
    var controller = function (view) {
        let liTags = view.querySelectorAll('ul > li')
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function (x) {
                x.currentTarget.classList.add('active')
            }
            liTags[i].onmouseleave = function (x) {
                x.currentTarget.classList.remove('active')
            }
        }




        let aTags = document.querySelectorAll('nav.menu > ul > li > a')

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                x.preventDefault()
                let a = x.currentTarget
                //    a.preventDefault()
                let href = a.getAttribute('href')
                //    debugger
                let element = document.querySelector(href)
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
                    .start();
            }

        }
    }

    controller(view)
}.call()