'use strict';

!function () {
    // 添加offset类
    var specialTags = document.querySelectorAll('[data-x]');
    for (var i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }

    findClosestAndRemoveOffset();
    // 完成导航条的特效：
    // 添加事件队列，以防互相覆盖
    window.addEventListener('scroll', function (x) {
        findClosestAndRemoveOffset();
    });

    // helper,这个函数不需要去关注，只要知道这个函数是帮你找
    // 到最近的然后移除
    // 名字长点没事
    function findClosestAndRemoveOffset() {
        // 便于知道打印的值对应的变量
        // console.log('window.scrollY')
        // console.log(window.scrollY)
        // 根据属性标记获取被标记的元素

        // 遍历
        var specialTags = document.querySelectorAll('[data-x]');
        var minIndex = 0;
        for (var _i = 1; _i < specialTags.length; _i++) {
            // console.log('specialTags[i].offsetTop')
            // console.log(specialTags[i].offsetTop)
            // debugger
            // 之前的冒泡排序是单个变量的大小比较，现今是差值比较，得到现今位置离滚动条最近的元素
            // 如果满足这个条件，则……换一个元素
            if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = _i;
            }
            // minIndex 就是离窗口顶部最近的元素
            specialTags[minIndex].classList.remove('offset');
            var id = specialTags[minIndex].id;
            var a = document.querySelector('a[href="#' + id + '"]');
            var li = a.parentNode;
            var brotherAndMe = li.parentNode.children;
            for (var _i2 = 0; _i2 < brotherAndMe.length; _i2++) {
                brotherAndMe[_i2].classList.remove('highlight');
            }
            li.classList.add('highlight');
        }
    }
}.call();