// 你只需要知道model能做的事有以下几点：
// 1.model.init();2.model.fetch();3.model.save({name:'xxx',content:'xxx'})
// 你不需要去关注init()/fectch()/save()的函数体是怎样的
// 你只需知道这几个函数都干了什么
// 这就是所谓的「Model办事，我放心」
// 没有这个Model,你就需要写很多遍的类似的demo，而现在用了这个就不需要了
// 你只需要 var model1 = Model({resourceName:'xxx'});var model2 = Model({rescourceName:'yyy'})
// 只要是其它模块必须要的操作，就可以弄成模板，假如其它模块的Model需要的功能更多的话，比如删除等操作啊，那就需要继承了

/*
var model = Model({
  resourceName: '表名'
})
*/
window.Model = function (options) {
    // 这里用到了闭包，这个局部变量被fetch和save函数内部的家伙引用了
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = '5CggGB6NC7wymcDfvdKuUFDB-gzGzoHsz';
            var APP_KEY = 'ShdTwSrYm6RyqYguiUeGTkVa';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            // Promise对象
            return query.find()
        },
        save: function (Object) {
            var X = AV.Object.extend(resourceName)
            var x = new X()
            // 这里同样是个Promise对象，可见Promise的好处
            return x.save(Object)
        }
    }
}