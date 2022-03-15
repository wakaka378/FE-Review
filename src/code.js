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
// class EventEmitter {
//   constructor() {
//     // 事件列表
//     this.eventList = {};
//   }

//   // 监听
//   on(name, callBack) {
//     // 以 name 为 key  创建容器   如果有容器就不用创建
//     if (!this.eventList[name]) {
//       this.eventList[name] = []
//     }

//     // 把事件放入容器
//     this.eventList[name].push([callBack])
//   };

//   // 触发
//   emit(name, data) {
//     if (!this.eventList[name]) {
//       return new Error('没有找到事件！')
//     };

//     // 从容器中取出事件进行调用
//     this.eventList[name].forEach((item) => {
//       item(data)
//     })
//   };

//   // 只触发一次
//   once(name, callBack) {
//     if (!this.eventList[name]) return;
//     // 利用off  在callBack执行后  关闭订阅
//     function onceFn(callBack) {
//       callBack();
//       this.off(name, callBack);
//     };
//     this.on(name, onceFn)
//   };

//   // 关闭监听  若第二个参数没有  移除 name 下所有的事件
//   off(name, callBack) {
//     if (!this.eventList[name]) return;

//     if (callBack) {
//       // 只移除对应的callBack
//       this.eventList[name] = this.eventList[name].filter((item) => {return item !== callBack});

//       // name容器长度为0 直接删除整个 name 事件订阅发布
//       if (this.eventList[name].length === 0) {
//         delete this.eventList[name];
//       };
//     } else {
//       // 没有 callBack  直接删除整个 name 事件订阅发布
//       delete this.eventList[name];
//     };

//   };

// };

// 函数柯里化
// 将能够接收多个参数的函数转化为接收单一参数的函数 并且返回接收余下参数且返回结果的新函数的技术。 例如实现 muilt(2)(3)(4) = 24
// 函数柯里化的两个特点：提前返回和延迟执行。参数复用。本质上是降低通用性，提高适用性。
// function curry =  (func, ...arguments) => {
//   const fnLen = func.length

//   return function(...innerArgs) {
//     innerArgs = arguments.concat(...innerArgs)
//     if (innerArgs.length < fnLen) {
//       return curry.call(this, func, ...innerArgs)
//     } else {
//       func.apply(this, innerArgs)
//     }

//   }
// }

// 观察者模式  Observer  一个目标对应多个观察者   目标负责维护和观察者之间的联系  目标状态变更通知所有观察者
// 目标类
// class Subject {
//   constructor() {
//     // 观察者列表
//     this.observerList = []
//   }

//   // 添加一个观察者
//   addObserver (observer) {
//     if (observer) {
//       this.observerList.push(observer)
//     }
//   }

//   // 删除观察者
//   removeObserver (observer) {
//     const index = this.observerList.findIndex(item => item === observer)
//     index === -1 && this.observerList.splice(index ,1)
//   }

//   // 通知所有观察者
//   notify() {
//     this.observerList.forEach((item) => {
//       item.update()
//     })
//   }
// }
// // 观察者类
// class Observer {
//   constructor(name) {
//     this.name = name
//   }

//   // 观察者接受通知  处理时间逻辑
//   update() {
//     console.log('我被通知了')
//   }
// }

// 列表转树
const data = [
  // 注意这里，专门把pid为1的元素放一个在前面
  { id: 2, name: '部门2', pid: 1 },
  { id: 1, name: '部门1', pid: 0 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
  { id: 7, name: '部门7', pid: 6 },
];

function toTree(list) {
  const obj = {};
  const result = [];

  list.forEach((item) => {
    obj[id] = {
      ...item,
    };
  });

  return result;
}
