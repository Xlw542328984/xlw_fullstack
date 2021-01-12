function Animal(name){
    this.species = "动物";
}

function Cat(name,color) {
    this.name = name;
    this.color = color;
}


// cat1 -> cat -> new Animal(){species: }
//一心只想species
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat = new Cat("大毛","黄色");
console.log(cat.species);
console.log(Cat.prototype.constructor);
