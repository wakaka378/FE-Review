# 2021-FE-Review

## HTML5、CSS3

### HTML5

#### HTML5新增特性

- 语义化标签：`header`、`nav`、`footer`、`section...`

- 媒体标签：`audio`音频、`video视频`
- 表单类型属性：`email`、`number`、`时间控件`、`color颜色拾取器`、`placeholder`、`autofocus自动获取焦点...`
- cavas绘图
- web存储：`localStorage`、`sessionStorage`


#### 行内元素、块级元素有哪些

行内元素：`a`、`span`、`img`、`input...`

块级元素：`div`、`ul`、`li`、`ol`、`dt`、`dh`、`li`、`p`、`h1-6`

#### iframe的优缺点

**优点**：

-   原封不动的吧嵌入网页展示出来
-   增加代码的可重用
-   用来加载速度较慢的内容

**缺点**：

-   iframe阻塞onload事件加载
-   网页内容无法被搜索引擎识别，对SEO不友好
-   会产生很多页面，不利于管理

#### canvas和SVG的区别

**canvas**：通过javaScript来绘制2D图形，是逐像素进行渲染

-   依赖分辨率
-   不支持事件处理
-   能够以.png或.jpg的格式进行保存
-   适合做游戏

**SVG**：基于XML描述的2D图形语言，是矢量图

-   不依赖分辨率
-   支持事件处理
-   适合做大型区域渲染


#### 回流重绘

**回流：** 当DOM变化影响了元素，比如元素的尺寸、布局、显示隐藏等改变了，需要重写构建。每个页面至少需要一次回流，就是在页面第一次加载的时候，这个时候一定会发生回流。

**重绘：** 当一个元素的外观发生变化，但是没有改变布局，重新渲染元素的外观。比如`background-color`、`color`

**回流必将引起重绘，而重绘不一定会引起回流**

**如何避免回流重绘：**

-   避免使用`table`布局
-   尽可能在`DOM`树的最末端改变`class`
-   避免设置多层内联样式
-   开启GPU加速
-   将动画效果应用到`position`属性为`absolute`或者`fixed`的元素上


#### src和href的区别

**src：** src指向外部资源的位置，将指向的内容嵌入到文档中当前标签所在的位置，如js脚本、`img`图片、`iframe`等

**href：** 用于在当前文档和引用资源之间确立联系，一般是用在`link`、`a`等元素


### CSS3

#### CSS3新增特性

- 新增CSS选择器、伪类
- 特效：`text-shadow`、`box-shadow`
- 渐变：`gradient`
- 旋转过度：`transform`、`transtion`
- 动画：`animation`



#### 盒模型

盒模型都是有四部分组成：`content`、`padding`、`border`、`margin`

标准盒模型和IE盒模型的区别在于设置`width`和`height`时，对应的范围不同

- 标准盒模型的`width`、`height`只包含了`content`

- IE盒模型的`width`、`height`包含了`border`、`margin`、`padding`



通过修改元素的`box-sizing`属性来改变元素的盒模型

- `box-sizeing: content-box`表示标准盒模型（默认值）
- `box-sizeing: border-box`表示IE盒模型（怪异盒模型)





#### trastion和aniamtion的区别

`transtion`：属于过度属性，强调过度，需要一个事件进行触发（如鼠标进入、离开）类似`flash`的补间动画，设置一个开始帧和结束帧

`aniamtion`：属于动画属性，它的实现不需要触发事件，设定好后可自动执行，且可以循环播放。也是类似补间动画，但是可以设置多个关键帧



#### 元素水平垂直居中

- 绝对定位：先将元素的左上角通过`top:50%`和`left:50%`定位到页面的中心，然后再通过`translate`来调整元素的中心点到页面的中心。

  ```css
  .parent {    
    position: relative;
  } 
  .child {    
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  ```

  

- 绝对定位：设置四个方向的值都为0，并将`margin`设置为`auto`，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。

  ```css
  .parent {
      position: relative;
  }
   
  .child {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
  }
  ```

- 使用`flex`弹性盒子布局，通过`align-items:center`和`justify-content:center`设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。

  ```css
  .parent {
      display: flex;
      justify-content:center;
      align-items:center;
  }
  ```

  

#### p、em、rem的区别

- `px` 固定像素单位，不能随其它元素的变化而变化
- `em`是相对于父元素的单位，会随着父元素变化而变化
- `rem`是相对于根元素`html`，它会随着html元素变化而变化



`rem`常用在移动端项目，设置根元素的`fong-size`，其它元素会随着根元素的变化而变化，从而达到不同手机屏幕的自适应大小。通常会配合`postcss-pxtorem`插件进行使用



#### 如何解决1px问题

- 直接写`0.5px`
- 利用伪元素，先放大再缩小
- 使用viewport缩放来解决





#### 什么是BFC布局，如何创建BFC布局？

BFC布局为**块格式化上下文**（Block Formatting Context，BFC）， 是CSS布局的一个概念，里面的元素不会影响到外面的元素。



**创建BFC**：

- 元素设置浮动：`float`有值并不为空
- 元素设置绝对定位：` position（absolute、fixed）`
- `overfilow`值为：`hidden`、`auto`、`scroll`
- `display`值为：`inline-block`、`table-cell`、`table-caption`、`flex`等



**BFC作用**：

- 解决`margin`重叠问题：由于BFC是一个独立的区域，内部元素和外部元素互不影响，将两个元素变为BFC，就解决了margin重叠问题
- 创建自适应两栏布局：可以用来创建自适应两栏布局，左边宽高固定，右边宽度自适应。
- 解决高度塌陷问题：在子元素设置浮动后，父元素会发生高度的塌陷，也就是父元素的高度为0.解决这个问题，只需要将父元素变成一个BFC。


#### link和@import的区别

-   link是HTML提供的标签，不仅可以加载CSS文件，还可以定义RSS、rel连接属性等
-   @import是CSS提供等语法规则，只有导入样式表带作用。
-   link标签引入的CSS被同时加载，而@import引入的CSS将在页面加载完毕后被加载
-   @import是CSS2.1才有的语法，存在兼容性，而link作为HTML标签不存在兼容性问题

#### CSS选择器优先级

-   `@important`
-   内联样式
-   ID选择器
-   类选择器/属性选择器/伪类选择器
-   元素选择器/伪元素选择器
-   关系选择器/通配符选择器

## JS基础

#### 基础数据类型

`string`、`number`、`boolean`、`object`、`function`、`undefined`、`null`、`symbol`



`null`和`undefined`的区别：`null`表示对是一个空的对象(object)、`undefined`是申明了但没赋值，在使用`typeo`f检测类型时，`nul`l为`object`，`undefined`为`undefined`



```js
null == undefined // true

null === undefined //false
```



值类型（基本数据类型）：`string`、`number`、`boolean`、`undefined`、`null`、`symbol`

引用类型：`object`、`function`、`array`



值类型和引用类型区别：

- 值类型保存在**栈**中，**占用空间固定**，当一个方法执行时，每个方法都会创建自己的内存栈，方法中定义的变量会存放在这个内存栈中。当方法执行结束时，这个内存栈也会被销毁。所以，栈中存储的是基础变量。而引用变量存储在栈中是指向堆中的数组或对象的引用地址。这也就是为何修改引用类型总会影响到其它指向这个地址的引用变量。
- 值类型可以使用`typeof`进行数据类型检测
- 引用类型保存在**堆**中，**占用空间不固定**。创建对象会保存到堆内存中，这个内存不回随着方法结束而销毁，因为这个对象还可能被另外一个变量所引用，只有当一个对象没有被任何变量引用时，系统的垃圾回收机制会将它回收。
- 引用类型使用`instanceof`检测数据类型
- 使用new（）方法构造出来的对象是引用类型





#### 闭包

闭包就是能够读取到其它函数内部变量的函数，创建一个最简单的闭包，就是在一个函数内部创建另外一个函数，创建的函数可以访问到当前函数的局部变量。



**闭包优点：**

- 创建全局私有变量，避免变量全局污染
- 可以实现封装、缓存等

**闭包缺点：**

- 创建的变量不能被回收，容易小号内存，使用不当会导致内存溢出



#### 变量提升、作用域、作用域链

##### 变量提升

js代码在解析的时候，会将所有的变量函数，提升到代码的最上面。变量提升，提升的只是变量申明，并不会吧变量赋值提升上来

```js
console.log(i) // 4
var i = 4
```



##### 作用域

作用域是一个变量或函数的可访问范围，作用域控制着变量或函数的可见性和生命周期

1. 全局作用域：可以全局访问

   - 最外层函数和最外层定义的变量拥有全局作用域
   - window上的对象属性方法拥有全局作用域
   - 为定义直接复制的变量自动申明拥有全局作用域
   - 过多的全局作用域变量会导致变量全局污染，命名冲突

2. 函数作用域：只能在函数中访问使用哦

   - 在函数中定义的变量，都只能在内部使用，外部无法访问
   - 内层作用域可以访问外层，外层不能访问内存作用域

3. ES6中的块级作用域：只在代码块中访问使用

   - 使用ES6中新增的`let`、`const`什么的变量，具备块级作用域，块级作用域可以在函数中创建（由{}包裹的代码都是块级作用域）

   - `let`、`const`申明的变量不会变量提升，`const`也不能重复申明

   - 块级作用域主要用来解决由变量提升导致的变量覆盖问题

     ```js
     var i = 3
     function fnc() {
       console.log(i);
       var i = 6;
     }
     fnc() // undefined
     ```

     

##### 作用域链

变量在指定的作用域中没有找到，会依次向上一层作用域进行查找，直到全局作用域。这个查找的过程被称为作用域链。



#### call、apply、bind区别

- 都可以用作改变`this`指向
- call和apply的区别在于传参，call、bind都是传入对象。apply传入一个数组。
- call、apply改变this指向后会立即执行函数，bind在改变this后返回一个函数，不会立即执行函数，需要手动调用。



#### new操作符干了什么操作

1. 创建一个空对象

2. 设置原型，将对象的原型设置到函数的`prototype`对象上

3. 改变this指向，将this指向该对象，并执行构造函数。

4. 判断函数的返回类型，如果是值类型，返回创建的对象。如果是引用类型，返回这个引用类型的对象。

   



#### 原型、原型链

- 原型: 每个对象在内部初始化的时候，都会初始化一个`prototype`原型属性 ，而对象的 `_proto_`属性，指向它的原型对象。

- 原型链: 当我们访问英国对象属性时，如果这个属性不存在，那么就会去它的原型对象上进行查找，而这个原型对象又会有自己的原型，会这样一直查找，知道找到顶级对象object为止。这个查找的过程被称为原型对象。



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

用函数包装一个对象，返回这个函数的调用（也就是ES5的Object.create的模拟实现），将传入的对象作为创建对象的原型



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
  if (!obj || typeof obj !=='object') return obj;
  
  // 根据obj类型创建数组还是对象
  let newObj = obj instanceof Object ? {} : [];
  
	// 循环遍历obj，处理子元素为对象，递归拷贝
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      newOb[key] = deepClone(obj[key])
    };
  };
  
  return newObj;
};
```



#### 事件循环机制EventLoop（浏览器）

##### 栈、队列理解

- `栈（Stack）`中的任务**后进先出**，js中的执行栈是一个存储函数的栈结构，栈中的任务执行遵循先进后出的原则依次执行。
- `队列（Queue）`中的任务**先进先出**，js运行时创建一个任务队列，用来处理列表（事件）和待执行的回调函数



##### 宏观任务、微观任务

js中的任务分为两种：**宏观任务**`(MacroTask|Task)`、**微观任务**`(MicorTask)`。

- 宏任务：`script全部代码`、`setTimeout`、`setInterval`、`I/O`、`UI Rendering`
- 微任务：`Promise.then`、`Process.nexTick(Node独有)`、`MutationObserver`



##### 同步任务、异步任务

js有一个**主线程**和一个**执行栈（调用栈）**，所有的任务都会放到执行栈中等待被主线程执行。



js代码在执行时，所有函数都会压入**执行栈**中。同步任务会按照**后进先出**原则依次执行，直到执行栈清空。异步任务会在异步任务有了结果后，将注册的回掉函数放入异步任务队列中，**等待主线程空闲后（执行栈中的同步任务执行完毕）**。



异步队列中的任务又分为**宏观任务**和**微观任务**，当当前执行栈清空后，处理异步队列中的任务时，首先会判断是否有微观任务可执行，如果有就将微观任务压入执行栈中执行。当微观队列中的任务在执行栈被执行完毕，再来异步队列中将宏观任务放入执行栈。



简单的来说：

1. 执行同步代码，这属于宏观任务
2. 所有代码执行完毕，执行栈清空，执行异步队列中任务
3. 异步队列中，先执行微观任务
4. 微观任务执行完毕，再执行宏观任务


#### 节流防抖

节流（throttle）：在n秒内只允许执行一次，

防抖（debounce）：在n秒内多次触发但不执行，而是在n秒后执行，如果n秒内触发则重新计算。

#### 事件冒泡、事件委托

事件发生的三个阶段：**捕获阶段**、**目标阶段**、**冒泡阶段**

- 事件冒泡：在一个对象上触发某类事件，如果此对象绑定了事件，就会触发事件，如果没有，就会向这个对象的父级对象传播，最终父级对象触发事件。
  - 如何阻止：
    - 普通浏览器：`event.stopPropagation()`
    - IE浏览器：`event.cancelBubble = true`;
- 事件委托：利用浏览器事件冒泡机制。事件在冒泡的过程中会传到父节点，并且父节点可以通过事件对象获取到目标节点，可以吧子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件
  - 事件委托可以不必要为每一个子节点都绑定监听事件，减少内存上的消耗。
  - 使用事件委托还可以实现事件的动态绑定，比如新增一个子节点，并不需要为此单独增加一个监听事件，可以由父元素中的监听函数来处理。





#### 对DOM元素进行增删改查

##### 增

```js
 document.createElement()
```

##### 删

```js
element.removeAttribute()
element.removeChild()
```

##### 改

```js
element.innerHTML()
element.setAttribute()
```

##### 查

```html
getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()
```



#### ajax、axios、fetch区别

**ajax**

- 基于原生的XHR开发
- 本身针对MVC编程，不符合现在前端MVVM潮流



**axios**

- 从浏览器中创建`XMLHttpRequest`

- 支持`promise`

- 支持请求拦击和响应拦截

- 从node.js创建http请求

- 客服端支持防止`CSRF/XSRF`

  

**fetch**

- 浏览器原生实现的请求方式，ajax的替代品
- 只对网络请求报错，对400、500都当做成功的请求，需要封装
- fetch默认不会带`cookie`，需要添加配置项
- fetch不支持abort，不支持超时控制，使用`setTimeout`及`Promise.reject`的实现的超时控制并不能阻止请求过程继续在后台运行，造成了量的浪费
- fetch没有办法原生监测请求的进度，而XHR可以


## ES6
### var、let、const区别

- `var`声明变量可以重复声明，而`let`不可以
- `var`是不受限于块级作用域，而`let`受限
- `var`存在变量提升，`let`和`const`不存在变量提升
- `cons`t声明的变量不可变
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

- `promise.then()`  对应`resolve`成功的处理
- `promise.catch()`对应`reject`失败的处理
- `promise.call()`将多个`Promise`实例，包装成一个新的`Promise`实例，返回的实例就是普通的`Promise`。有一个失败，代表该`Primise`失败。当所有的子`Promise`完成，返回值时全部值的数组
- `promise.race()`类似`promise.all()`，区别在于有任意一个完成就算完成（例如：将异步和定时器放在一起，设置请求超时）



### 箭头函数和普通函数的区别

- 箭头函数时**匿名函数**，不能作为构造函数，不能使用`new`
- 箭头函数不绑定`arguments`
- 箭头函数没有自己的`this`，将所在的上下文的`this`作为自己的`this`值
- 没有`prototype`
- `call()`、`applay()`、`bind()`方法不能改变箭头函数中的`this`指向



### forEach和map的区别

- forEach返回值是undefined，不可以链式调用
- map()返回一个新的数组，不改变原数组。forEach改变原数组。



### Set、Map的区别

#### Set

- 创建：`  new Set([1, 1, 2, 3, 3, 4, 2])`
- `add(value)`：添加某个值，返回Set结构本身。 
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。 
- `has(value)`：返回一个布尔值，表示该值是否为Set的成员。 
- `clear()`：清除所有成员，没有返回值。



#### Map

- `set(key, val):` 向`Map`中添加新元素
- `get(key):` 通过键值查找特定的数值并返回
- `has(key): `判断`Map`对象中是否有`Key`所对应的值，有返回`true`,否则返回`false`
- `delete(key): `通过键值从`Map`中移除对应的数据
- `clear():` 将这个`Map`中的所有元素删除



#### 区别

- Map是一种键值对的集合，和对象不同的是，键可以是任意值
- Map可以遍历，可以和各种数据格式转换
- Set是类似数组的一种的数据结构，但在Set中没有重复的值



### 谈谈你对ES6对理解

- 解构赋值
- 扩展运算符
- 模版字符串
- 箭头函数
- `async/await`
- `Class`
- 引入`Moldule`语法




## Vue

### 基础知识

#### MVVM

MVVM是一种软件架构模式，在vue中 M 代表model层（数据模型），负责数据模型。V代表View层（视图层），VM代表ViewModel（视图模型），它是Model和View之间的桥梁，数据会绑定到viewModel层，并自动将数据渲染到页面层，视图变化时会通知viewModel更新数据



#### Vue生命周期

**创建前后：**

- `beforeCreated（创建前）：` 数据观测和初始化事件还未开始，不能访问`data`、`computed`、`watch`、`methods`上的数据方法。
- `created(创建后)：`实例创建完成，可以访问`data`、`computed`、`watch`、`methods`上的数据方法，但此时渲染节点还未挂在到DOM上，所以不能访问。

**挂载前后：**

- `beforeMounted（挂载前）:` Vue实例还未挂在到页面html上，此时可以发起服务器请求
- `mounted（挂载后）:`Vue实例已经挂在完毕，可以操作DOM

**更新前后：**

- `beforeUpdate（更新前）:` 数据更新之前调用，还未渲染页面
- `updated（更新后）:`DOM重新渲染，此时数据和界面都是新的。

**销毁前后：**

- `beforeDestoryed（销毁前）:`实例销毁前调用，这时候能够获取到`this`
- `destoryed（销毁后）:`实例销毁后调用，实例完全被销毁。



#### watch和computed的区别

watch：监听属性，用来监听数据的变化，没有缓存，当监听到的数据发生变化时都会执行毁掉函数

computed：计算属性，被监听的值有缓存，只有它依赖的属性值发生变化后，下一次获取computed的值时才会重新计算computed的值。（只有依赖发生变化后才会重新计算）



#### v-for中key的作用

key是为了更高效的对比虚拟DOM中的每个节点是否相同，避免页面更新时重复更新节点



#### v-if和v-show的区别

`v-if`元素不可见 删除dom元素

`v-show`元素可见  通过设置元素的`display：none`样式属性





#### 组件中的data为什么是一个函数

因为对象是一个引用类型，如果data时一个对象的情况下会造成多个组件共用一个data，data为一个函数，每个组件都会有自己的私有数据空间，不会干扰其他组件的运行。



#### Vue组件通信

##### 父子组件

父传子

- props
- $children
- $refs

子传父

- $emit
- $parent

##### 兄弟组件

- provied
- inject
- eventBus
- Vuex





#### Vuex的基本使用

Vuex用于vue中的数据状态管理，有五种属性：

1. `state`：`Vuex`的基本数据，用于存储变量
2. `getter`：从`state`派生出来的数据，当相遇`state`的计算属性，在这里可以对`state`数据进行过滤、筛选等操作
3. `mutation`：提交更新`state`数据的方法
4. `action`：和`mutation`功能相似，都是用来提交更新，但`action`提交的是`mutation`，而不是直接变更数据，并且`action`可以包含异步操作
5. `module`：模块化Vuex，每个模块都有自己的`state`、`mutation`、`actoion`、`getter`



##### mutation和action的区别

- `mutation`更专注于修改`state`，必须是同步执行。
- `action`提交的是`mutation`，而不是直接更新数据，可以是异步的。
- `action`可以整合多个`mutation`



#### Vuex和localstory的区别

- `Vuex`存储在内存中，页面关闭刷新就会消失。而`localstorage`存储在本地，读取内存比读取硬盘速度要快
- `Vuex`应用于组件之间的传值，`localstorage`主要用于不同页面之间的传递
- `Vuex`是响应式的，`localstorage`需要刷新





#### 路由守卫

- 全局前置钩子：`beforeEach`、`beforeResolve`、`afterEach`
- 路由独享守卫：`beforeEnter`
- 组件内钩子：`beforeRouterEnter`、`beforeRouterUpdate`、`beforeRouterLeave`





#### hash和history的区别

##### hash

hash模式是vue开发中的默认模式，地址栏URL携带`#`，`#`后为路由。

原理是通过`onhashchange()`事件监听路由`hash`的变化，这个好处就是当`hash`值发生变化，不需要向后端发起请求，`window`就可以监听事件的改变，并按照规则加载项对应的代码。除此之外，`hash`值的变化对应的`URL`都会被浏览器记录下来，这样就能实现浏览器历史页面的前进后退。



##### history

vue还提供`history`模式，在`history`模式下URL中没有`#`，相比hash模式更加好看。但是需要后台配置支持。

`history`的原理是利用`HTML5中hostory`提供的`pushState`、`replaceState`这两个API，这两个API记录了浏览器历史栈，并且当在修改`URL`时不会触发页面刷新和后台请求。



#### 动态路由

##### 定义方式

- params传参
  - 路由配置： `/index/:id`
  - 路由跳转：`this.$router.push({name: 'index', params: {id: "zs"}});`
  - 路由参数获取：`this.params.id`
  - 最后形成的路由：`/index/zs`
- query传参
  - 路由配置：`/index`正常的路由配置
  - 路由跳转：`this.$rouetr.push({path: 'index', query:{id: "zs"}});`
  - 路由参数获取：`this.query.id`
  - 最后形成的路由：`/index?id=zs`

##### `$router`和`$route`的区别

- `$router`是指整个路由对象，可以使用`this.$router.push({name: ;index'})`进行页面跳转
- `$route`时指当前页面的路由对象，可以使用`this.$route.parmas.id`来获取当前路由对象传递进来的参数


### 原理知识
### 待补充...

### Vue扩展
### 待补充...

## 网络协议、安全相关
### TCP、UDP协议

`TCP`和`UDP`都是在传输层定义的两种传输协议。基于`UDP`协议传输不能保证数据准确无误的送达，但`UDP`不仅可以支持一对一的传输方式，还可以支持一对一、一对多等形式。也不需要像`TCP`一样建立连接，所以传输速度快。

`TCP`的目的是提供可靠的数据，并且需要在传输前建立连接（三次握手）。只支持一对一进行传输。



**区别：**

- `TCP`协议可靠，`UDP`协议不可靠
- `TCP`面向连接，`UDP`采用无连接
- `TCP`可以保证数据顺序，`UDP`不能
- `TCP`一对一传输，`UDP`可以一对多、多对一等形式





### HTTP和HTTPS区别

- `HTTP`是明文传输，不安全。`HTTPS`基于`SSL`进行加密传输，比较安全。
- `HTTPS`需要`CA`证书，`HTTP`不需要。
- `HTTP`端口为`80`，`HTTPS`端口为`443`





### HTTP状态码

- 1XX: 请求正在处理
- 2XX：正常状态码
  - 200 ：请求处理成功
  - 201 ： 请求成功并且服务器创建了新资源
  - 202 ：服务器已经接收请求，但尚未处理
- 3XXX：重定向状态
  - 301 ：请求重定向
  - 302:  临时重定向
  - 303:  临时重定向，使用get请求新的url
  - 304：浏览器缓存相关
- 4XX：错误状态码
  - 400: 服务器无法理解请求格式，需要修改请求内容后再次发起请求
  - 401: 请求未授权
  - 403: 禁止访问
  - 404: 服务器上无法找到请求资源
- 5XX：服务器错误
  - 500: 服务端错误
  - 503: 服务器暂时无法处理请求



### HTTP三次握手、四次挥手

#### 三次握手

三次握手是在建立`TCP`连接时，客户端和服务端总共发送三个包。进行三次握手的主要目的就是为了确认双方的接受能力和发送能力都是正常的，为后面传输可靠数据做准备。

**报文：**

- 序号：表示发送的数据字节流，确保TCP传输有序，对每个字节编号
- 确认序号：发送方期待接收的下一序列号，接收成功后的数据字节序列号加 1。只有`ACK=1`时才有效。
- `ACK`：确认序号的标志，`ACK=1`表示确认号有效，`ACK=0`表示报文不含确认序号信息
- `SYN`：连接请求序号标志，用于建立连接，`SYN=1`表示请求连接
- `FIN`：结束标志，用于释放连接，`FIN=1`表示关闭本方数据流



**三次握手：**

1. 第一次握手：客户端给服务端发一个 `SYN `报文，并指明客户端的初始化序列号` ISN`，此时客户端处于 `SYN_SEND` 状态。
2. 务器收到客户端的` SYN` 报文之后，会以自己的` SYN `报文作为应答，并且也是指定了自己的初始化序列号` ISN`。同时会把客户端的 `ISN + 1 `作为`ACK`的值，表示自己已经收到了客户端的` SYN`，此时服务器处于 `SYN_REVD `的状态。
3. 客户端收到` SYN `报文之后，会发送一个 `ACK `报文，当然，也是一样把服务器的 `ISN + 1 `作为 `ACK `的值，表示已经收到了服务端的 `SYN `报文，此时客户端处于` ESTABLISHED` 状态。服务器收到 `ACK `报文之后，也处于 `ESTABLISHED 状`态，此时，双方已建立起了连接。



#### 四次挥手

1. 客户端会发送一个` FIN `报文，报文中会指定一个序列号。此时客户端处于 `FIN_WAIT1 `状态。
2. 服务端收到 `FIN` 之后，会发送 `ACK` 报文，且把客户端的序列号值 +1 作为 `ACK `报文的序列号值，表明已经收到客户端的报文了，此时服务端处于` CLOSE_WAIT` 状态。
3. 如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 `FIN `报文，且指定一个序列号。此时服务端处于 `LAST_ACK `的状态。
4. 客户端收到` FIN` 之后，一样发送一个` ACK `报文作为应答，且把服务端的序列号值 +1 作为自己 `ACK `报文的序列号值，此时客户端处于 `TIME_WAIT `状态。需要过一阵子以确保服务端收到自己的 `ACK` 报文之后才会进入 `CLOSED `状态，服务端收到 `ACK `报文之后，就处于关闭连接了，处于 `CLOSED` 状态。



#### 为什么需要四次挥手

因为当服务端收到客户端的`SYN`连接请求报文后，可以直接发送`SYN+ACK`报文。其中`ACK`报文是用来应答的，`SYN`报文是用来同步的。但是关闭连接时，当服务端收到`FIN`报文时，很可能并不会立即关闭`SOCKET`，所以只能先回复一个`ACK`报文，告诉客户端，“你发的`FIN`报文我收到了”。只有等到我服务端所有的报文都发送完了，我才能发送`FIN`报文，因此不能一起发送。故需要四次挥手。





### HTTP缓存

#### 强缓存

使用强制缓存策略，如果缓存资源有效，就直接使用缓存资源，不需要向服务器发送请求。强制缓存通过两种方式来设置，在`request headers`中的`Expires`属性和`Cache-Contorl`属性。

`Expires`属性，指定资源的过期时间。在过期时间以内，改资源可以被缓存使用，不需要向浏览器发送请求。这个时间依赖于服务器时间，会存在服务器时间和客户端时间不一致。

`Cache-Control`属性：

- `private`： 仅浏览器可以缓存
- `public`：浏览器和代理服务器都可以缓存
- `max-age=xxx` 过期时间，单位为秒
- `no-cache` 不进行强缓存，但会有协商缓存
- `no-store `不强缓存，也不协商缓存



如果`request header`中，`Cache- Control`的值中有`max-age=xxx`，这个时候走强缓存。如果值为`no-cache`，表明没有命中，走协商缓存。如值为`no-store`，不使用缓存。



#### 协商缓存

如果没有命中强制缓存，在设置协商缓存情况下，先向服务器发送一个请求，如果资源没有发生修改，则返回一个`304`的状态，让浏览器使用本地的缓存副本。如果资源发生修改，则返回修改后的资源。在`request headers`中的`Etag`属性和`Last-Modified`属性，来进行设置。其中，`ETage`优先于`Last-Modified`。



命中协商缓存条件：

- `Cache-Control: no-cache`
- `max-age`时间过期



**Last-Modified（文件的修改时间）：**

服务器在响应头中添加`Last-Modified`属性，来指出资源最后一次修改时间。当浏览器发起请求时，会在`request headers`中添加一个`If-None-Match`属性，值为上一次请求的资源返回的`Last-Modified`值。服务端会通过这个属性和资源最后一次修改时间进行对比，以此来判断资源是否修改。如果资源没有修改，请求返回304状态，客户端使用本地缓存。如果资源有修改，则返回修改的资源。

这种方式有一个缺点，`Last-Modified`标记的时间只能精确到秒。



**ETag（文件改动）：**

同样在服务器返回资源的时候，在头信息中添加`ETag`属性，这个属性是资源的唯一标识符。当资源改变时，这个值也会改变。在一下次请求资源时，会在`request headers`中添加一个`If-None-Match`属性，值为上一次请求的资源返回的`ETag`值。服务端会通过这个属性和资源最后一次修改时间进行对比，以此来判断资源是否修改。这种方式比`Last-Modified`更加准确。



#### 区别

- 强缓存优先级高于协商缓存
- 强缓存不需要发请求，协商缓存需要。
- 强缓存返回的状态码为`200`，协商缓存返回`304`
- ctrl+F5强制刷新会跳过所有缓存，而F5刷新跳过强缓存，但是会检查协商缓存。



### POST和GET的区别

- 传递的参数不同，`POST`传递的参数在`request body`中，`GET`传递的参数在`url`后拼接
- `POST`相对`GET`请求安全
- `GET`请求长度有限制，`POST`没有
- `GET`请求会被浏览器主动缓存，`POST`不会，要手动设置
- `GET`请求一般用于查询，`POST`一般用于提交某种信息进行某些修改操作 



### XSS、csrf攻击

#### XSS（跨站脚本攻击）

`Xss(cross-site scripting)` 是一种代码注入攻击，攻击者往` Web `页面里插入恶意 `html` 标签或者 `javascript `代码。在骗取用户点击后获取用户，获取用户信息。



**避免方式：**

- `url`参数通过`encodeURIComponent`方法进行转义
- 尽量不使用`InnerHtml`插入`HTML`内容
- 对用户输入的地方和变量都需要仔细检查长度和对 ”<”,”>”,”;”,”’” 等字符做过滤



#### CSRF（跨站请求伪造）

`CSRF`（`Cross-site request forgery`）攻击者盗用你的身份信息，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

**避免方式：**

- 添加验证码验证
- 使用`token`
  - 服务端给用户生成一个`token`，加密后传递给用户
  - 用户在提交请求时，需要携带这个`token`
  - 服务端验证`token`是否正确




## 浏览器相关
### 待补充...

## 性能优化
### 待补充...

### 前端工程化
### 待补充...

## 手写系列🤮
### 待补充...

## 输出结果系列

### 闭包

```js
var name = "The Window";   
　　var object = {   
　　　　name : "My Object",   
　　　　getNameFunc : function(){   
　　　　　　return function(){   
　　　　　　　　return this.name;   
　　　　　};   
　　　　}   
};   
alert(object.getNameFunc()());  //"The Window"
```

```js
function aaa(){
 var a=0;
 function bbb() {
  a++;
  alert(a);
 }
 return bbb
}
var ccc=aaa();
ccc();  //结果为1
ccc();  //结果为2
var ddd=aaa();
ddd();  //结果为1
ddd();  //结果为2
```
### 待补充...


> 参考：
>
> [2021」高频前端面试题](https://juejin.cn/post/6941194115392634888#heading-2)
>
> [2021年我的前端面试准备](https://juejin.cn/post/6989422484722286600#heading-43)
>
>[震惊！前端300基础面试题+答案、分类学习整理（良心制作）持续更新](https://juejin.cn/post/6914831351271292936#heading-60)
>
> [高级知识点](https://juejin.cn/post/6917816624040902670#heading-21)