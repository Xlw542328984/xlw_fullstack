//user 类型 Object name age
const getUserInfo = function(user){
    console.log(Object.keys(user).includes("name") );
    if(!user||typeof user != 'object')
        throw new Error('参数错误')
        //里面有name age
    return `name: ${user.name},age: ${user.age}`
}
console,log(getUserInfo({name: 'koala', age: 18}));
//有什么问题？
console.log(getUserInfo({name: 'kaola'}));
console.log(getUserInfo({name: 'kaola'}));