console.log(null);
// 账户余额为null；就单指空吗
// 没有对象，该处不该有值
// 此处（原型链最顶端Object）不应该有对象
console.log(Object.prototype.__proto__);//输出null