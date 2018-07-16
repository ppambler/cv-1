'use strict';

!function () {
  var view = View('section.message');

  var model = Model({ resourceName: 'Message' });

  var controller = Controller({
    messageList: null,
    form: null,
    init: function init(view, model) {
      // 这3个家伙是特殊的，这就是为什么在写模板的时候会有个遍历对象
      this.messageList = view.querySelector('#messageList');
      this.form = view.querySelector('form');
      this.loadMessages();
    },
    loadMessages: function loadMessages() {
      var _this = this;

      // 获取某张表的数据
      // 这里实现JS的两大常用功能，一个是请求和DOM
      this.model.fetch().then(function (message) {
        // console.log(message)
        // 这里的map的作用，拿到所需要的内容然后封装成数组,有种过滤的味道
        var array = message.map(function (item) {
          return item.attributes;
        });
        // console.log(array)
        array.forEach(function (item) {
          var li = document.createElement('li');
          li.innerText = item.name + ': ' + item.content;
          // 如果这个形参为message的函数不用箭头函数表示的话，那么这个this就是window了
          // console.log(this)
          _this.messageList.appendChild(li);
        });
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      // 监听form表单的submit事件
      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        // console.log(this)
        // 使用箭头函数，不然这个this的值就是这个form元素了，而不是这个controller
        _this2.saveMessage();
      });
    },
    saveMessage: function saveMessage() {
      // 这里用了一个中间变量，这样就不需要添加很多个this.form
      // 之前不理解为啥芳芳说变量只用一次的话就不需要弄个变量出来了，如果需要多次出现那就搞个变量出来吧
      // 如这个myForm
      var myForm = this.form;
      var content = myForm.querySelector('input[name=content]').value;
      var name = myForm.querySelector('input[name=name]').value;
      // console.log(content)
      this.model.save({
        'name': name,
        'content': content
      }).then(function (object) {
        // 用户提交后然后就创建元素,不会和查询冲突
        var li = document.createElement('li');
        li.innerText = object.attributes.name + ': ' + object.attributes.content;
        var messageList = document.querySelector('#messageList');
        messageList.appendChild(li);
        // 清空内容
        myForm.querySelector('input[name=content]').value = '';
        // console.log(object)
      });
    }

  });

  controller.init(view, model);
}.call();