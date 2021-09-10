## Vue

### 基础知识

#### MVVM

`MVVM`是一种软件架构模式，在vue中 M 代表`model`层（数据模型），负责数据模型。V代表`View`层（视图层），VM代表`ViewModel`（视图模型），它是`Model`和`View`之间的桥梁，数据会绑定到`viewModel`层，并自动将数据渲染到页面层，视图变化时会通知`viewModel`更新数据



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

##### $router 和$route

- `$router`是指整个路由对象，可以使用`this.$router.push({name: ;index'})`进行页面跳转
- `$route`时指当前页面的路由对象，可以使用`this.$route.parmas.id`来获取当前路由对象传递进来的参数



#### Vue性能优化





### 原理知识

#### 双向绑定原理

data在初始化的时候，会实例化一个`Observe`类，在它会将data数据进行递归遍历，并且通过`definereactive`方法，这个方法通过`Object.defineProperty`方法，给每个值添加上一个`getter`和一个`setter`。在数据读取的时候会触发getter进行依赖（Watcher）收集，当数据改变时，会触发`setter`，对刚刚收集的依赖进行触发，并且更新`watcher`通知视图进行渲染。


#### 依赖收集


#### Object.defineProperty()数据劫持缺陷

该方法只能监听到数据的修改，监听不到数据的新增和删除。vue2中会对数组的新增删除方法`push、pop、shift、unshift、splice、sort、reserve`通过重写的形式，在拦截里面进行手动收集触发依赖更新。



在vue2中，需要数据里添加或删除时，使用`vue.$set/vue.$delete`进行操作。



在Vue3中，改用`proxy`对对象进行代理，返回一个代理对象，只需要操作新对象就可以。





#### 双向绑定原理

Vue双向绑定是一个指令`v-model`，可以将数据动态绑定到视图上，同时视图中变化也可以改变改值。他的本质是 `v-bind` 和 `v-on` 的语法糖。在 ⼀个组件上使⽤ `v-model `，默认会为组件绑定名为 `value `的 prop 和名为 `input `的事件。

#### 依赖收集

依赖收集发生在`defineReactive()`方法中，在方法内`new Dep()`实例化一个`Dep()`实例，然后在`getter`中通过`dep.depend()`方法对数据依赖进行收集，然后在`settter`中通过`dep.notify()`通知更新。整个`Dep`其实就是一个观察者，吧收集的依赖存储起来，在需要的时候进行调用。在收集数据依赖的时候，会为数据创建一个`Watcher`，当数据发生改变通知每个`Watcher`，由`Wathcer`进行更新渲染。


#### nextTick的实现

vue中的`nextTick`是浏览器`eventLoop`是应用。`nextTick`是将回调函数放到一个异步队列中，保证在异步更新DOM的`watcher`后面，从而获取到更新后的DOM。

Vue在更新DOM时是异步执行的。只要侦听到数据变化，`Vue`将开启1个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个`watcher`被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和`DOM`操作是非常重要的。`nextTick`方法会在队列中加入一个回调函数，确保该函数在前面的dom操作完成后才调用；


#### 怎么理解 vue 中的虚拟 DOM

虚拟DOM，就是用一个`JS`对象来描述一个`DOM`节点。`Vue`是数据驱动视图的，数据发生变化视图就要随之更新，在更新视图的时候难免要操作`DOM`,而操作真实`DOM`又是非常耗费性能的，这是因为浏览器的标准就把 `DOM` 设计的非常复杂，所以一个真正的 `DOM` 元素是非常庞大的。`VNode`类中包含了描述一个真实`DOM`节点所需要的一系列属性，`tag`表示节点的标签名，`text`表示节点中包含的文本，`children`表示该节点包含的子节点等。



#### 模版编译原理

模版编译主要过程：`template ---> ast ---> render`，分别对象三个方法

- `parse` 函数解析 `template`
- `optimize` 函数优化静态内容
- `generate` 函数创建 `render` 函数字符串



调用`parse`方法，将`template`转化为`AST`（抽象语法树），`AST`定义了三种类型，一种`html`标签，一种文本，一种插值表达式，并且通过 `children` 这个字段层层嵌套形成了树状的结构。



`optimize`方法对`AST`树进行静态内容优化，分析出哪些是静态节点，给其打一个标记，为后续更新渲染可以直接跳过静态节点做优化。



`generate`将`AST`抽象语法树编译成 `render`字符串，最后通过`new Function(render)`生成可执行的`render`函数





#### diff算法逻辑

`diff`算法发生在视图更新阶段，也就是当数据发生变化的时候，`diff`会对新就虚拟DOM进行对比，只渲染有变化的部分。

当数据发生变化的时候，依赖对应的`watcher`会通知更新，生成一个新的`vnode`，新的`vnode`会去和旧的`vnode`进行对比更新。

整个更新的过程就是调用path函数，主要做了三件事：

- 创建节点：新的`vnode`中有而旧的`vnode`中的节点，在旧`vnode`中进行创建
- 删除节点：新的`vnode`中没有二旧的`vnode`中有，在旧的`vnode`中删除
- 更新节点：新的`vnode`和旧的`vnode`中都有，以新的`vnode`位主，更新旧的`vnode`







#### new Vue的流程

合并配置，调用一些初始化函数，触发生命周期钩子函数，调用`$mount`开启下一个阶段。


#### keep-live原理

`keep-alive`是Vue.js的一个内置组件。它能够将不活动的组件实例保存在内存中，而不是直接将其销毁，它是一个抽象组件，不会被渲染到真实DOM中，也不会出现在父组件链中。



通过`include、exclude`来匹配和排除缓存，`max`定义缓存的上限。



`keep-alive`内部其实是一个函数式组件，没有`template`标签。在`render`中通过获取组件的`name`和`include、exclude`进行匹配。匹配不成功，则不需要进行缓存，直接返回该组件的Vnode。

匹配成功就进行缓存，获取组件的`key`在`this.cache`中进行查找，如果存在就直接将缓存的组件实例覆盖到当前的Vnode上，然后将当前组件的`key`从`keys`中进行删除，然后在`push(key)`添加到尾部，这样做是为了改变`key`当前的位置，也就实现了`max`功能。

不存在的话，就需要对组件进行缓存。将当前组件`push(key)`添加到尾部，然后再判断当前缓存的max是否超出指定个数，如果超出直接将第一个组件销毁（缓存淘汰策略LRU）。

> LRU（**Least recently used**，最近最少使用）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。


