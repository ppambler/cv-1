!function () {
    var view = document.querySelector('#topNavBar')
    view.style.border = '1px solid red'
    var controller = function(view) {
        window.addEventListener('scroll', function (x) {
            if (window.scrollY > 0) {
                view.classList.add('sticky')
            } else {
                view.classList.remove('sticky')
            }
        })
    }
    controller(view)
}.call()