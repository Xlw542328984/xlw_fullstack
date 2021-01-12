let ran_num = Math.random();//0-1随机数
console.log(ran_num);
console.log(Math.floor(2.5));//向下
console.log(Math.ceil(7.1));//向上
console.log(Math.round(25.6));//四舍五入
//0-9之间的整数随机
console.log(Math.floor(Math.random()*10));
let max = 100,min = 0;
//在最小值与最大值之间取随机数
console.log(Math.floor(Math.random()*(max-min))+min);
