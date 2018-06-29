// 初始化demo
var APP_ID = '5CggGB6NC7wymcDfvdKuUFDB-gzGzoHsz';
var APP_KEY = 'ShdTwSrYm6RyqYguiUeGTkVa';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
console.log('你能看到我吗？能看到的话，那么初始化就成功了，毕竟没有报错')


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