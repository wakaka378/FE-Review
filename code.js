// new 操作符
// 1、创建一个新的对象
// 改变这个对象的 this 指向
// 改变它的原型
// 判断返回数据类型
// function MyNew() {
//   // 1、创建一个空对象
//   let newObj = new Object();

//   // 2、设置原型 将对象的原型设置到函数上
//   let constructor = [].shift.call(arguments);
//   newObj = Object.create(constructor.prototype);

//   // 3、改变this指向  执行构造函数
//   let result = constructor.apply(newObj, arguments);

//   // 4、判断返回值类型
//   let tag = result && (typeof result === 'object' || typeof resul === 'function')

//   return tag ? result : newObj
// }


// 订阅模式
class EventEmitter {
  constructor() {
    // 事件列表
    this.eventList = {};
  }

  // 监听
  on(name, callBack) {
    // 以 name 为 key  创建容器   如果有容器就不用创建
    if (!this.eventList[name]) {
      this.eventList[name] = []
    }

    // 把事件放入容器
    this.eventList[name].push([callBack])
  };

  // 触发
  emit(name, data) {
    if (!this.eventList[name]) {
      return new Error('没有找到事件！')
    };

    // 从容器中取出事件进行调用
    this.eventList[name].forEach((item) => {
      item(data)
    })
  };

  // 只触发一次
  once(name, callBack) {
    if (!this.eventList[name]) return;
    // 利用off  在callBack执行后  关闭订阅
    function onceFn(callBack) {
      callBack();
      this.off(name, callBack);
    };
    this.on(name, onceFn)
  };

  // 关闭监听  若第二个参数没有  移除 name 下所有的事件
  off(name, callBack) {
    if (!this.eventList[name]) return;

    if (callBack) {
      // 只移除对应的callBack
      this.eventList[name] = this.eventList[name].filter((item) => {return item !== callBack});

      // name容器长度为0 直接删除整个 name 事件订阅发布
      if (this.eventList[name].length === 0) {
        delete this.eventList[name];
      };
    } else {
      // 没有 callBack  直接删除整个 name 事件订阅发布
      delete this.eventList[name];
    };

  };

};
