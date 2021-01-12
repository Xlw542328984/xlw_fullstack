# node 自动发邮件
- 队长每天被辅导员烦
 每天发一条信息
 npm i -g stylus   // -g即global全局
 npm i nodemailer   //当前项目

 - JS require + module.exports common.js 模块化
 1. 内置模块
 2. 自己封装模块 一个文件就是一个模块,一个文件夹就是一个模块组
    原始社会到封建社会  (module + require)  -> 资本主义社会 (docker + k8s 省钱,快速运维) ->共产主义社会(投资人) 
3. nodemailer 常用的邮件模块



cpmlqbgixaotbdgc

noʎ ʇnq ǝʌol ɹǝɥʇo oN



// require 关键字 ，引入库

// const fs = require('fs');//文件系统   内置模块
const nodemailer = require('nodemailer');//第三方，安装的
const {default: Axios } = require('axios');
// 模块 语法 -> 函数模块化 -> module('水电工','木工','等等')
// 现代语言中，一个文件就是一个模块 ....
// const modA = require('/a.js');//相对地址
// console.log(modA.add(1,2));
// fs.readFile('./readme.md', function(err,res){
//     if (err){
//         throw new Error(err);
//     }
//     console.log(res.toString());
// })
// 异步函数
// 土味情话
function getHoneyedWords(){
    const url = 'https://chp.shadiao.app/api.php';
    return Axios.get(url);
}
// 把发邮件这件事封装给一个函数
async function sendMail(words){
    let user = "542328984@qq.com";
    let pass = "cpmlqbgixaotbdgc";
    let to = "542328984@qq.com";
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        port: 587,
        secure: false,
        auth:{
            user: user,
            pass: pass
        }
    });
    let info = await transporter.sendMail({
        form: `几分钟前的自己<${user}>`,
        to: `几分钟后的自己<${to}>`,
        subject: "写给自己的一封信",
        text: words
    })
    console.log("发送成功");
}
getHoneyedWords()
    .then(res => {
        sendMail(res.data);
        // console.log(res.data);
    })
//sendMail();