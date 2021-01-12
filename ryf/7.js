//阮一峰mai面向对象第二篇
function Animal(name){
    this.species = "动物";
    this.name = name;
    // this.Cat()
}
//Animal -> Function

// 函数是一等对象 Object()
//拿函数的原型链上的方法，靠它
// console.log(Animal.__proto__);
function Cat(name,color) {
    // 拿到Animal的属性，归Cat所有
    // 猫应该是Animal的子类 继承?   需要父类的属性
    // 借用一下，指定Cat内部的this为当前的this，让this继承父类的属性
    // Animal.call(this,name,color);//call()
    Animal.apply(this,arguments);
    console.log(arguments,'-----------------');
    // this.name = name;
    this.color = color;
}

var cat1 = new Cat("大毛","黄色");
console.log(cat1);


