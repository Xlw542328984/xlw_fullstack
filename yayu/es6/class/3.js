// babel也是可以写的，源码分析篇

// 1. Person class -> function new 普通函数第哦啊用报错
// 转义出的代码 不可能是class
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function')
    }
}

var Person = function Person(name) { //es5 
    // 函数运行方式，不是new的方式
    _classCallCheck(this,Person);
    // if (this instanceof Person) {
    //     throw new TypeError('Cannot call as a function')
    // }
    this.name = name;
}
new Person();
Person();