// 初始化demo
var APP_ID = '5CggGB6NC7wymcDfvdKuUFDB-gzGzoHsz';
var APP_KEY = 'ShdTwSrYm6RyqYguiUeGTkVa';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
// console.log('你能看到我吗？能看到的话，那么初始化就成功了，毕竟没有报错')

// 获取某张表的数据
// 这里实现JS的两大常用功能，一个是请求和DOM

var query = new AV.Query('Message');
query.find()
  .then(
    function(message) {
      // console.log(message)
      // 这里的map的作用，拿到所需要的内容然后封装成数组,有种过滤的味道
      let array = message.map((item) => item.attributes)
      // console.log(array)
      array.forEach((item)=>{
        let li = document.createElement('li')
        li.innerText = item.content
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
      })
    }
  )
let myForm =document.querySelector('#postMessageForm')
// 监听form表单的submit事件
myForm.addEventListener('submit',function(e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    console.log(content)
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        'content': content
    }).then(function(object) {
        alert('存入成功')
        window.location.reload()
        console.log(object)
    })
})
/*
// 测试demo
// 创建TestObject表
var TestObject = AV.Object.extend('TestObject');
// 在表中创建一行数据
var testObject = new TestObject();
// 保存数据内容是words: 'Hello World!'到testObject里去
// 如果保存成功，则运行这个alert('')
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/