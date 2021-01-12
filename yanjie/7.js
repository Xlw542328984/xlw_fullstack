var reg = /(\d{4})-(\d{2})-(\d{2})-(\d{3})/;

var data = '0791-13-14-520';

console.log(reg.test(data));

console.log(RegExp.$1);
console.log(RegExp.$2);
console.log(RegExp.$3);
console.log(RegExp.$4);
console.log(RegExp.$1,RegExp.$2,RegExp.$3,RegExp.$4);

