const arr = [3,4,5];
// 给出在数组尾部头部添加 删除的方法
arr.push(6);//面向对象的
console.log(arr.pop());
arr.unshift(1);
arr.shift(1);
console.log("-----one-----");
//把数组打印出来有多少种方法
console.log(arr);
console.log("-----two-----");
for( let num in arr){
    console.log(arr[num]);
}
console.log("-----three-----");
arr.forEach(item => {
    console.log(item);
})
console.log("-----four-----");
console.log(arr.join(" "));
console.log("-----five-----");
console.log(arr.splice(0,arr.length));
console.log("----six------");
console.log(arr.map(item => item));