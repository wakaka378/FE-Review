// new 操作符
// 1、创建一个新的对象
// 改变这个对象的 this 指向
// 改变它的原型
// 判断返回数据类型
function MyNew() {
  // 1、创建一个空对象
  let newObj = new Object();

  // 2、设置原型 将对象的原型设置到函数上
  let constructor = [].shift.call(arguments);
  newObj = Object.create(constructor.prototype);

  // 3、改变this指向  执行构造函数
  let result = constructor.apply(newObj, arguments);

  // 4、判断返回值类型
  let tag = result && (typeof result === 'object' || typeof resul === 'function')

  return tag ? result : newObj
}