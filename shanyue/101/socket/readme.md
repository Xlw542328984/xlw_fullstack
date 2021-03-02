1. 安装node的开发狂i加，express MVC
    - 引入express require('express')
    - app = express() 中小型的项目适合用node
    - http 服务简单，传输完就断开的 简单协议
    - app.get('/',(reea,res) => {
        res.send('内容')
    })
    -101 协议的跳转 ？ 比较复杂，聊天室 webscoket
        不要断开我要一直保持链接
        聊天室http协议无法实现的，需要用websocket      npm i socket.io
    - app.listen(:port)
    - 101在wx应用场景下，服务器用socket.io(凤凰尊贵了websocket的实现)
        客户端主动的申请切换协议
    - socket.io在服务器端启动后，他会提供/scoket.io.js/scoket.io.js
    - 客户端n:1服务端 io()