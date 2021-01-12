//es6 提供两种新的数据结构  Set Map
//1. 为了数组优化而来
const people = new Set();//[]
people.add('黄伦');
people.add('廖辉');
people.add('过宇谭');
people.add('明平贵');
for (const person of people){
    console.log(person);
}
const student = new Set('王殿虎','谢文航','夏原骏' );
student.add('支恩泽');
console.log(people);
