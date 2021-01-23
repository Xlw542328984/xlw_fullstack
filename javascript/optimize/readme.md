性能优化 永远的大厂主题

- DOM是最贵的性能开销

- 差点挂了
10000次吗？ 不会
1. chrome tab 都会有一定的内存的最高值
    一万条在边缘
    训练专注度
2. 内存消耗在哪呢？
    12行for循环不高 1ms
    13 document 性能开销
        js 文档对象 通过js操作dom


    两步
    1. 下载html，css；浏览器渲染页面的第一步
        - html DOM树 树的查询 c++
        tree 的结构
        - css去解析执行 基于DOM 树生成css
        css渲染树   selector 属性构成
        render tree 
        layout width
        height margin padding
        position
        遍历这颗渲染树
        selector    node    css
        attribute 节点上的数据
        
        js极其差性能的家伙
        1. js跟Java比，慢点
        c/c++、java 内存操作级别
        js  1/5 php python 脚本语言
        js是目前唯一可以做前端的语言
        node 后端 移动端 
        2. js 就是个第三者，浏览器逼的
            DOM树 + css渲染树   快速的把静态页面
            js nb第三者 动态DOM ajax  
            document.getElementById('')  巨大的开销、
            js(语言世界) -> html + css 属世界
            别的语言没有
            
        3. 分屏加载