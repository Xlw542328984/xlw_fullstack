const getUserInfoWithTs = (user:{name:string,age:number}):String => `name:${user.name} age:${user.age}`
console.log(getUserInfoWithTs({name: 'kaola',age: 18}));