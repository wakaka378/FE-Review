## 输出结果

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
alert(object.getNameFunc()());  //"The Window"
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
ccc();  //结果为1
ccc();  //结果为2
var ddd=aaa();
ddd();  //结果为1
ddd();  //结果为2
```
