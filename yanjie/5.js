const dogs = new Map();
const friends = new Map();
friends.set('君问归期未有期','巴山夜雨涨秋池');
friends.set('何当共剪西窗烛','却话巴山夜雨时');
// for (let key of friends.keys()) {
//     console.log(key);
// }
for (let [key, value] of friends) {
    console.log(key, value);
}

friends.forEach((val,key) => console.log(val,key));

for (let item of friends) {
    console.log(item[0], item[1]);
}

for(const [key,val] of friends){
    console.log(key,val);
}

const [a,b] = [1,2];
console.log(a,b);

// const [] = {a: '1',b: '2'};
// console.log(a,b);


