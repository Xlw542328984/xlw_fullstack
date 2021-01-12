# 电商是2021永恒的主题
1. 得物App
    新的细分领域的电商在上市过程中，
    - 得到 知识电商 
    - 得物 潮牌电商
        群体 25岁以下包括大学生的潮牌群体
        阿里电商/腾讯电商   互联网关系链
        拼多多/京东 

2. 功能细分 商品卡片的设计  
    - 难点是半圆 -> 更大半径的圆 -> 圆的中心在改变
    - 鞋    两个运动    1.向上    2.转角    animation
    - 文字部分
        opactio 0 - 1
        container
    - 良好的结构
    不要想样式，要毛坯
    .dw 项目代号 是项目不是简单的页面
    .container ?    5种方法
        容器 宽度 + margin auto ? 
        定位? 
        弹性布局    display：flex   水平居中
        stylus -w card.styl -o card.css


        &:before   //伪元素

        - stylus 用法
            前端都有这么多命令行
            stylus -w *.stylus -o *.css
            watch 监听
            output 向外输出
            1. 用tap缩进
            2. 嵌套的css


            .dw_card
                &:hover
                &:after
                .dw_card__imgBx
            .dw_card .dw_card__imgBx{

            }
            &不是下级，而是引用上级