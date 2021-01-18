// 'use strict';//启用严格模式
var obj = {
    bar: 1,
    foo: function(){//obj 属性
        console.log(this.bar)
    }
}
var foo = obj.foo; //foo   函数
var bar = 2;
obj.foo();//this会指向obj本身，函数调用的该方式 作用域|运行环?
foo();