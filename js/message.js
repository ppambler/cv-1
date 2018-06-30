! function () {
  var view = document.querySelector('section.message')
  var controller = {
    view: null,
    messageList: null,
    form: null,
    init: function (view) {
      this.view = view
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.initAV()
      this.loadMessages()
      this.bindEvents()
    },
    initAV: function () {
      // 初始化demo
      var APP_ID = '5CggGB6NC7wymcDfvdKuUFDB-gzGzoHsz';
      var APP_KEY = 'ShdTwSrYm6RyqYguiUeGTkVa';

      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })

    },
    loadMessages: function () {
      // 获取某张表的数据
      // 这里实现JS的两大常用功能，一个是请求和DOM
      var query = new AV.Query('Message');
      query.find()
        .then(
          (message) => {
            // console.log(message)
            // 这里的map的作用，拿到所需要的内容然后封装成数组,有种过滤的味道
            let array = message.map((item) => item.attributes)
            // console.log(array)
            array.forEach((item) => {
              let li = document.createElement('li')
              li.innerText = `${item.name}: ${item.content}`
              // 如果这个形参为message的函数不用箭头函数表示的话，那么这个this就是window了
              // console.log(this)
              this.messageList.appendChild(li)
            })
          }
        )
    },
    bindEvents: function () {
      // 监听form表单的submit事件
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        // console.log(this)
        // 使用箭头函数，不然这个this的值就是这个form元素了，而不是这个controller
        this.saveMessage()
      })
    },
    saveMessage: function () {
      // 这里用了一个中间变量，这样就不需要添加很多个this.form
      // 之前不理解为啥芳芳说变量只用一次的话就不需要弄个变量出来了，如果需要多次出现那就搞个变量出来吧
      // 如这个myForm
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      // console.log(content)
      var Message = AV.Object.extend('Message')
      var message = new Message()
      message.save({
        'name': name,
        'content': content
      }).then(function (object) {
        // 用户提交后然后就创建元素,不会和查询冲突
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        // 清空内容
        myForm.querySelector('input[name=content]').value = ''
        // console.log(object)
      })
    }
  }

  controller.init(view)
}.call()