function Animal(name){
}

Animal.prototype.species = '动物'

function Cat(name,color) {
    this.name = name;
    this.color = color;
}


//F就执行个链而已
var F =function() {};// 空的构造函数 空对象
F.prototype = Animal.prototype;
Cat.prototype = new F();
// 空函数f内存不大，没有2的内存问题，没有3的修改问题
Cat.prototype.contructor = Cat;

var cat = new Cat("小花","白色");
console.log(Animal.prototype.contructor);
console.log(cat.species);