function Animal(){}
Animal.prototype.species = "动物";



function extend(Child,Parent){
    var F=function(){}
    F.prototype=Parent.prototype;
    Child.prototype = new F();
    Child.prototype.Constructor = Child;
    Child.uber = Parent.prototype;
}


extend(Cat,Animal);
var cat1 = new Cat('h','h');
console.log(cat1.species);
