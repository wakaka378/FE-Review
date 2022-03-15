## JS 基础

#### 基础数据类型

`string`、`number`、`boolean`、`object`、`function`、`undefined`、`null`、`symbol`

`null`和`undefined`的区别：`null`表示对是一个空的对象(object)、`undefined`是申明了但没赋值，在使用`typeo`f 检测类型时，`nul`l 为`object`，`undefined`为`undefined`

```js
null == undefined; // true

null === undefined; //false
```

值类型（基本数据类型）：`string`、`number`、`boolean`、`undefined`、`null`、`symbol`

引用类型：`object`、`function`、`array`

值类型和引用类型区别：

- 值类型保存在**栈**中，**占用空间固定**，当一个方法执行时，每个方法都会创建自己的内存栈，方法中定义的变量会存放在这个内存栈中。当方法执行结束时，这个内存栈也会被销毁。所以，栈中存储的是基础变量。而引用变量存储在栈中是指向堆中的数组或对象的引用地址。这也就是为何修改引用类型总会影响到其它指向这个地址的引用变量。
- 值类型可以使用`typeof`进行数据类型检测
- 引用类型保存在**堆**中，**占用空间不固定**。创建对象会保存到堆内存中，这个内存不回随着方法结束而销毁，因为这个对象还可能被另外一个变量所引用，只有当一个对象没有被任何变量引用时，系统的垃圾回收机制会将它回收。
- 引用类型使用`instanceof`检测数据类型
- 使用 new（）方法构造出来的对象是引用类型

#### 闭包

闭包就是能够读取到其它函数内部变量的函数，创建一个最简单的闭包，就是在一个函数内部创建另外一个函数，创建的函数可以访问到当前函数的局部变量。

**闭包优点：**

- 创建全局私有变量，避免变量全局污染
- 可以实现封装、缓存等

**闭包缺点：**

- 创建的变量不能被回收，容易消耗内存，使用不当会导致内存溢出

#### 变量提升、作用域、作用域链

##### 变量提升

js 代码在解析的时候，会将所有的变量函数，提升到代码的最上面。变量提升，提升的只是变量申明，并不会吧变量赋值提升上来

```js
console.log(i); // 4
var i = 4;
```

##### 作用域

作用域是一个变量或函数的可访问范围，作用域控制着变量或函数的可见性和生命周期

1. 全局作用域：可以全局访问

   - 最外层函数和最外层定义的变量拥有全局作用域
   - window 上的对象属性方法拥有全局作用域
   - 为定义直接复制的变量自动申明拥有全局作用域
   - 过多的全局作用域变量会导致变量全局污染，命名冲突

2. 函数作用域：只能在函数中访问使用哦

   - 在函数中定义的变量，都只能在内部使用，外部无法访问
   - 内层作用域可以访问外层，外层不能访问内存作用域

3. ES6 中的块级作用域：只在代码块中访问使用

   - 使用 ES6 中新增的`let`、`const`什么的变量，具备块级作用域，块级作用域可以在函数中创建（由{}包裹的代码都是块级作用域）

   - `let`、`const`申明的变量不会变量提升，`const`也不能重复申明

   - 块级作用域主要用来解决由变量提升导致的变量覆盖问题

     ```js
     var i = 3;
     function fnc() {
       console.log(i);
       var i = 6;
     }
     fnc(); // undefined
     ```

##### 作用域链

变量在指定的作用域中没有找到，会依次向上一层作用域进行查找，直到全局作用域。这个查找的过程被称为作用域链。

#### call、apply、bind 区别

- 都可以用作改变`this`指向
- `call`和`apply`的区别在于传参，`call`、`bind`都是传入对象。`apply`传入一个数组。
- `call`、`apply`改变 this 指向后会立即执行函数，`bind`在改变 this 后返回一个函数，不会立即执行函数，需要手动调用。

#### new 操作符干了什么操作

1. 创建一个空对象

2. 设置原型，将对象的原型设置到函数的`prototype`对象上

3. 改变 this 指向，将 this 指向该对象，并执行构造函数。

4. 判断函数的返回类型，如果是值类型，返回创建的对象。如果是引用类型，返回这个引用类型的对象。

#### 原型、原型链

- 原型: 每个对象在内部初始化的时候，都会初始化一个`prototype`原型属性 ，而对象的 `_proto_`属性，指向它的原型对象。

- 原型链: 当我们访问英国对象属性时，如果这个属性不存在，那么就会去它的原型对象上进行查找，而这个原型对象又会有自己的原型，会这样一直查找，知道找到顶级对象 object 为止。这个查找的过程被称为原型对象。

#### 继承

##### 原型链继承

利用对象的原型链，将子类`Son.prototype`指向父类的构造函数创建出来的实例对象`new Person()`

🌰

```js
function Person() {
  ...
};

function Son() {
  ....
};

// 关键代码
Son.prototype = new Person();
```

**优点：**

- 子类可以继承父类构造函数、原型上的属性方法

**缺点：**

- 父类引用类型的实例对象被共享，容易造成修改的混乱。
- 创建子类的时候不能向父类传参

##### 构造函数继承

利用`.call()`或者`.apply()`方法，在子类中借用父类的构造函数，初始化父类构造函数。

🌰

```js
function Person(name) {
  ...
};

function Son(name) {
	// 关键代码
  Person.call(this, name)
  ...
}
```

**优点：**

- 子类在继承父类时，可以向父类构造函数中传参。
- 不会造成子类势力之间引用属性共享。

缺点：

- 只能继承父类构造函数中的属性方法，无法访问原型上的方法。
- 每个子类都会创建一个父类副本

##### 组合继承

组合继承，将原型链继承和构造函数继承融合在一起。

🌰

```js
function Person(name) {
  ...
};

function Son(name) {
  // 借用构造函数继承关键代码
	Person.call(this, name);
};

// 原型链式继承关键代码
Son.prototype = new Person();
// 将子类的构造函数指向自己
Son.prototype.constructon = Son;
```

**优点：**

- 结合前面两种继承方式的优点，子类的实例可以访问到父类原型上的属性方法
- 子类的实例之间不会被共享

**缺点：**

- 调用了两次父类构造函数

##### 原型式继承

用函数包装一个对象，返回这个函数的调用（也就是 ES5 的 Object.create 的模拟实现），将传入的对象作为创建对象的原型

🌰

```js
function create(obj) {
  // 创建一个空的的构造函数
	function F() {};

  // 将空的构造函数原型指向传递进来的对象
  F.prototype = obj;

  // 返回一个实例对象
  return new F();
}


const obj = {
  name: 'zs',
  ...
};

const newObj1 = create(obj);
const newObj2 = create(obj);
```

优缺点和原型链式继承一样，引用类型还是会被共享。

##### 寄生式继承

在原型式继承基础上，在函数内部来做增强函数，返回对象。

🌰

```js
function createObj(obj){
  // 获取继承的子类对象，也就是上面的create方法实现
  const newObj = Object.create(obj);

  // 函数增强
  newObj.say = function() {
    ...
  }

  // 返回对象
  return newObj;
}
```

类似原型式继承，但在原有的基础上可以自定义属性方法，依旧没有解决引用值被共享问题。（跟借用构造函数模式一样，每次创建对象都会创建一遍方法。）

##### 寄生组合式继承

结合寄生继承和组合式继承优缺点，组合式继承缺点为调用了两次父类构造函数，优点为解决了引用值被共享问题。而寄生式继承缺点为没有解决引用值被共享问题，只要将两者结合就得到完美的继承方式。

🌰

```js
function createObj(son, parent) {
  // 寄生式继承，利用父类构造函数的原型对象创建出一个新的对象，解决组合式继承创建两个父类问题
  const newObj = Objcet.create(parent.prototype)；

  // 将新对象的constructor构造函数执行子类
	newObj.constructor = son;

  // 将子类构造函数的原型指向心的  原型式继承
  son.protoytype = newObj;

}

function Person(name) {
  ...
};

function Son(name) {
  // 构造函数继承
  Person.call(this, name);
  ...
};


// 实现继承
createObj(Son, Person)
// 更简洁的方式  在组合式继承的基础上  直接将son的原型通过API指向person的原型
Son.prototype = Object.create(Person.prototype);

const obj1 = new Son('zx');
const obj2 = new Son('lw');
```

#### 深拷贝、浅拷贝

##### 浅拷贝

浅拷贝只是复制对象的值类型，通过`Object.assign`或者扩展运算符即可实现

##### 深拷贝

通过递归实现

```js
function deepClone(obj) {
  // 判断是否为对象
  if (!obj || typeof obj !== 'object') return obj;

  // 根据obj类型创建数组还是对象
  let newObj = obj instanceof Object ? {} : [];

  // 循环遍历obj，处理子元素为对象，递归拷贝
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      newOb[key] = deepClone(obj[key]);
    }
  }

  return newObj;
}
```

#### 事件循环机制 EventLoop（浏览器）

##### 栈、队列理解

- `栈（Stack）`中的任务**后进先出**，js 中的执行栈是一个存储函数的栈结构，栈中的任务执行遵循先进后出的原则依次执行。
- `队列（Queue）`中的任务**先进先出**，js 运行时创建一个任务队列，用来处理列表（事件）和待执行的回调函数

##### 宏观任务、微观任务

js 中的任务分为两种：**宏观任务**`(MacroTask|Task)`、**微观任务**`(MicorTask)`。

- 宏任务：`script全部代码`、`setTimeout`、`setInterval`、`I/O`、`UI Rendering`
- 微任务：`Promise.then`、`Process.nexTick(Node独有)`、`MutationObserver`

##### 同步任务、异步任务

js 有一个**主线程**和一个**执行栈（调用栈）**，所有的任务都会放到执行栈中等待被主线程执行。

js 代码在执行时，所有函数都会压入**执行栈**中。同步任务会按照**后进先出**原则依次执行，直到执行栈清空。异步任务会在异步任务有了结果后，将注册的回掉函数放入异步任务队列中，**等待主线程空闲后（执行栈中的同步任务执行完毕）**。

异步队列中的任务又分为**宏观任务**和**微观任务**，当当前执行栈清空后，处理异步队列中的任务时，首先会判断是否有微观任务可执行，如果有就将微观任务压入执行栈中执行。当微观队列中的任务在执行栈被执行完毕，再来异步队列中将宏观任务放入执行栈。

简单的来说：

1. 执行同步代码，这属于宏观任务
2. 所有代码执行完毕，执行栈清空，执行异步队列中任务
3. 异步队列中，先执行微观任务
4. 微观任务执行完毕，再执行宏观任务

#### 节流防抖

节流（throttle）：在 n 秒内只允许执行一次，

防抖（debounce）：在 n 秒内多次触发但不执行，而是在 n 秒后执行，如果 n 秒内触发则重新计算。

#### 事件冒泡、事件委托

事件发生的三个阶段：**捕获阶段**、**目标阶段**、**冒泡阶段**

- 事件冒泡：在一个对象上触发某类事件，如果此对象绑定了事件，就会触发事件，如果没有，就会向这个对象的父级对象传播，最终父级对象触发事件。
  - 如何阻止：
    - 普通浏览器：`event.stopPropagation()`
    - IE 浏览器：`event.cancelBubble = true`;
- 事件委托：利用浏览器事件冒泡机制。事件在冒泡的过程中会传到父节点，并且父节点可以通过事件对象获取到目标节点，可以吧子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件
  - 事件委托可以不必要为每一个子节点都绑定监听事件，减少内存上的消耗。
  - 使用事件委托还可以实现事件的动态绑定，比如新增一个子节点，并不需要为此单独增加一个监听事件，可以由父元素中的监听函数来处理。

#### 对 DOM 元素进行增删改查

##### 增

```js
document.createElement();
```

##### 删

```js
element.removeAttribute();
element.removeChild();
```

##### 改

```js
element.innerHTML();
element.setAttribute();
```

##### 查

```html
getElementById() getElementsByClassName() getElementsByTagName() querySelector()
querySelectorAll()
```

#### ajax、axios、fetch 区别

**ajax**

- 基于原生的 XHR 开发
- 本身针对 MVC 编程，不符合现在前端 MVVM 潮流

**axios**

- 从浏览器中创建`XMLHttpRequest`

- 支持`promise`

- 支持请求拦击和响应拦截

- 从 node.js 创建 http 请求

- 客服端支持防止`CSRF/XSRF`

**fetch**

- 浏览器原生实现的请求方式，ajax 的替代品
- 只对网络请求报错，对 400、500 都当做成功的请求，需要封装
- fetch 默认不会带 cookie，需要添加配置项
- fetch 不支持 abort，不支持超时控制，使用 setTimeout 及 Promise.reject 的实现的超时控制并不能阻止请求过程继续在后台运行，造成了量的浪费
- fetch 没有办法原生监测请求的进度，而 XHR 可以

## ES6

### var、let、const 区别

- `var`声明变量可以重复声明，而`let`不可以
- `var`是不受限于块级作用域，而`let`受限
- `var`存在变量提升，`let`和`const`不存在变量提升
- `cons`t 声明的变量不可变
- `const`声明之后必须赋值，否则会报错

### Promise

`Promise`是异步编程的一种解决方案，将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。

它有三种状态

- `pending`初始状态
- `fulfilled`操作成功
- `rejected`操作失败。

`Promise`状态改变只有两种可能

- 从`pending`------>`fulfilled`
- 从`pending`------>`rejected`

`Promise`构造函数接收一个参数和一个带有`resolve`和`reject`参数的回调函数。

- `resolve`的作用是将`Promise`状态从`pending`变为`fulfilled`，在异步操作成功时调用，并将异步结果返回，作为参数传递出去
- `reject`的作用是将`Promise`状态从`pending`变为`rejected`，在异步操作失败后，将异步操作错误的结果，作为参数传递出去

`Promise`实例方法

- `promise.then()` 对应`resolve`成功的处理
- `promise.catch()`对应`reject`失败的处理
- `promise.call()`将多个`Promise`实例，包装成一个新的`Promise`实例，返回的实例就是普通的`Promise`。有一个失败，代表该`Primise`失败。当所有的子`Promise`完成，返回值时全部值的数组
- `promise.race()`类似`promise.all()`，区别在于有任意一个完成就算完成（例如：将异步和定时器放在一起，设置请求超时）

### 箭头函数和普通函数的区别

- 箭头函数时**匿名函数**，不能作为构造函数，不能使用`new`
- 箭头函数不绑定`arguments`
- 箭头函数没有自己的`this`，将所在的上下文的`this`作为自己的`this`值
- 没有`prototype`
- `call()`、`applay()`、`bind()`方法不能改变箭头函数中的`this`指向

### forEach 和 map 的区别

- `forEach`返回值是`undefined`，不可以链式调用
- `map()`返回一个新的数组，不改变原数组。`forEach`改变原数组。

### Set、Map 的区别

#### Set

- 创建：` new Set([1, 1, 2, 3, 3, 4, 2])`
- `add(value)`：添加某个值，返回 Set 结构本身。
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否为 Set 的成员。
- `clear()`：清除所有成员，没有返回值。

#### Map

- `set(key, val):` 向`Map`中添加新元素
- `get(key):` 通过键值查找特定的数值并返回
- `has(key): `判断`Map`对象中是否有`Key`所对应的值，有返回`true`,否则返回`false`
- `delete(key): `通过键值从`Map`中移除对应的数据
- `clear():` 将这个`Map`中的所有元素删除

#### 区别

- `Map`是一种键值对的集合，和对象不同的是，键可以是任意值
- `Map`可以遍历，可以和各种数据格式转换
- `Set`是类似数组的一种的数据结构，但在 Set 中没有重复的值

### 谈谈你对 ES6 对理解

- 解构赋值
- 扩展运算符
- 模版字符串
- 箭头函数
- `async/await`
- `Class`
- 引入`Moldule`语法
- `class`类
