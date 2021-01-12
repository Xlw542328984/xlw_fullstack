// 有哪些情况是undefined？
let a; //  声明，没有赋值   one1
// 变量声明时，js类型由值来决定
console.log(typeof a);//输出undefined
// two  函数没有返回值   two2
const fnNoReturn = () => {}
console.log(fnNoReturn(),'2');
// 参数不传值
const fn = (b) => {
    // 一运行就会有this ->指针对象 指向一个对象   three3 
    console.log(arguments);
    console.log(typeof b);
}
console.log(fn(1,2,3));



const o = {c: '1'};
console.log(o.d,'4');//undefined
console.log(zr);//语法错误

console.log(null == undefined);//true
console.log(null === undefined);//false
