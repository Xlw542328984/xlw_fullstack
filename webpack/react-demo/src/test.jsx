import React from 'React';//es6的模块化引入
// page react 组件作为最小的单元 小程序的组件概念一样 
// React.Component 父类 匿名类
//module.exports 

export default class extends React.Component {
    // render 方法是react 组件必须实现的 接口
    render() {
        return (
        <p>测试一下</p>
        )
    }    
}