## HTML5、CSS3

### HTML5

#### HTML5 新增特性

- 语义化标签：`header`、`nav`、`footer`、`section...`

- 媒体标签：`audio`音频、`video视频`
- 表单类型属性：`email`、`number`、`时间控件`、`color颜色拾取器`、`placeholder`、`autofocus自动获取焦点...`
- cavas 绘图
- web 存储：`localStorage`、`sessionStorage`

#### 行内元素、块级元素有哪些

行内元素：`a`、`span`、`img`、`input...`

块级元素：`div`、`ul`、`li`、`ol`、`dt`、`dh`、`li`、`p`、`h1-6`

#### iframe 的优缺点

**优点**：

- 原封不动的吧嵌入网页展示出来
- 增加代码的可重用
- 用来加载速度较慢的内容

**缺点**：

- iframe 阻塞 onload 事件加载
- 网页内容无法被搜索引擎识别，对 SEO 不友好
- 会产生很多页面，不利于管理

#### canvas 和 SVG 的区别

**canvas**：通过 javaScript 来绘制 2D 图形，是逐像素进行渲染

- 依赖分辨率
- 不支持事件处理
- 能够以.png 或.jpg 的格式进行保存
- 适合做游戏

**SVG**：基于 XML 描述的 2D 图形语言，是矢量图

- 不依赖分辨率
- 支持事件处理
- 适合做大型区域渲染

#### 回流重绘

**回流**当 DOM 变化影响了元素，比如元素的尺寸、布局、显示隐藏等改变了，需要重写构建。每个页面至少需要一次回流，就是在页面第一次加载的时候，这个时候一定会发生回流。

**重绘**当一个元素的外观发生变化，但是没有改变布局，重新渲染元素的外观。比如`background-color`、`color`

**回流必将引起重绘，而重绘不一定会引起回流**

**如何避免回流重绘：**

- 避免使用`table`布局
- 尽可能在`DOM`树的最末端改变`class`
- 避免设置多层内联样式
- 开启 GPU 加速
- 将动画效果应用到`position`属性为`absolute`或者`fixed`的元素上

#### src 和 href 的区别

**src**src 指向外部资源的位置，将指向的内容嵌入到文档中当前标签所在的位置，如 js 脚本、`img`图片、`iframe`等

**href**用于在当前文档和引用资源之间确立联系，一般是用在`link`、`a`等元素

### CSS3

#### CSS3 新增特性

- 新增 CSS 选择器、伪类
- 特效：`text-shadow`、`box-shadow`
- 渐变：`gradient`
- 旋转过度：`transform`、`transtion`
- 动画：`animation`

#### 盒模型

盒模型都是有四部分组成：`content`、`padding`、`border`、`margin`

标准盒模型和 IE 盒模型的区别在于设置`width`和`height`时，对应的范围不同

- 标准盒模型的`width`、`height`只包含了`content`

- IE 盒模型的`width`、`height`包含了`border`、`margin`、`padding`

通过修改元素的`box-sizing`属性来改变元素的盒模型

- `box-sizeing: content-box`表示标准盒模型（默认值）
- `box-sizeing: border-box`表示 IE 盒模型（怪异盒模型)

#### trastion 和 aniamtion 的区别

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
    transform: translate(-50%, -50%);
  }
  ```

- 绝对定位：设置四个方向的值都为 0，并将`margin`设置为`auto`，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。

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
    justify-content: center;
    align-items: center;
  }
  ```

#### p、em、rem 的区别

- `px` 固定像素单位，不能随其它元素的变化而变化
- `em`是相对于父元素的单位，会随着父元素变化而变化
- `rem`是相对于根元素`html`，它会随着 html 元素变化而变化

`rem`常用在移动端项目，设置根元素的`fong-size`，其它元素会随着根元素的变化而变化，从而达到不同手机屏幕的自适应大小。通常会配合`postcss-pxtorem`插件进行使用

#### 如何解决 1px 问题

- 直接写`0.5px`
- 利用伪元素，先放大再缩小
- 使用 viewport 缩放来解决

#### 什么是 BFC 布局，如何创建 BFC 布局？

BFC 布局为**块格式化上下文**（Block Formatting Context，BFC）， 是 CSS 布局的一个概念，里面的元素不会影响到外面的元素。

**创建 BFC**：

- 元素设置浮动：`float`有值并不为空
- 元素设置绝对定位：` position（absolute、fixed）`
- `overfilow`值为：`hidden`、`auto`、`scroll`
- `display`值为：`inline-block`、`table-cell`、`table-caption`、`flex`等

**BFC 作用**：

- 解决`margin`重叠问题：由于 BFC 是一个独立的区域，内部元素和外部元素互不影响，将两个元素变为 BFC，就解决了 margin 重叠问题
- 创建自适应两栏布局：可以用来创建自适应两栏布局，左边宽高固定，右边宽度自适应。
- 解决高度塌陷问题：在子元素设置浮动后，父元素会发生高度的塌陷，也就是父元素的高度为 0 解决这个问题，只需要将父元素变成一个 BFC。

#### link 和@import 的区别

- `link`是 HTML 提供的标签，不仅可以加载`CSS`文件，还可以定义`RSS、rel`连接属性等
- `@import`是 CSS 提供等语法规则，只有导入样式表带作用。
- `link`标签引入的 CSS 被同时加载，而`@import`引入的 CSS 将在页面**加载完毕**后被加载
- `@import`是 CSS2.1 才有的语法，存在兼容性，而`link`作为 HTML 标签不存在兼容性问题

#### CSS 选择器优先级

- `@important`
- 内联样式
- ID 选择器
- 类选择器/属性选择器/伪类选择器
- 元素选择器/伪元素选择器
- 关系选择器/通配符选择器
