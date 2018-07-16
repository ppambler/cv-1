'use strict';

/* 
Controller({
  init:(){
    this.view
    this.model
    this.xxx()
    this.yyy()
  },
  xxx(){}
  yyy(){}
})
  */
//  传入一个家伙，改造这个家伙为其添加必须的属性，然后返回出去
//  Controller是个类，而返回值就是个实例
window.Controller = function (options) {
    var _init = options.init;

    var object = {
        view: null,
        model: null,
        init: function init(view, model) {
            this.view = view;
            this.model = model;
            this.model.init();
            _init.call(this, view, model);
            this.bindEvents.call(this);
        }
    };

    for (var key in options) {
        if (key !== 'init') {
            object[key] = options[key];
        }
    }

    return object;
};