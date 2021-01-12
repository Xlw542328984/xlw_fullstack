function Animal(name){
    // call()  apply()
    // prototype new Animal()
    // this.species = "动物";
}

Animal.prototype.species = '动物'

function Cat(name,color) {
    this.name = name;
    this.color = color;
}

Cat.prototype = Animal.prototype;
console.log(Cat.prototype.contructor === Animal);


Cat.prototype.contructor = cat;