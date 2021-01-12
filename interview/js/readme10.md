# 把面试题当作高考题
  1. 以题目来检验下当前js之所学 推动之
     题目 -- 面试题目
  2. 衡水一中 -- 清北方法论
        打卡    在课后的任何事情    一天至少打一次卡
        - 能力增长点
        - js能力
            null和undefined的区别是什么
            Object.prototype.__proto__ == null;
            undefined 意义是类型，当一个声明了一个未初始化时，得到的是undefined
            1. 箭头函数和普通函数不一样
            es5时代的arguments 有用的
            不只是便利，也被干掉了arguments
            () => {}        function和{}都可以省掉  但es6里面提供了...reset运算符
            arguments    
            function(){}
            2. Object的原型对象
            new Object()
            Object(函数).prototype
            父(原型)对象
            Object(函数).prototype.__proto__
            为什么?
            因为到顶了，不该有原型，null此处没有对象， 不该有值
            跟禅宗一样，充满了智慧
            {
                console.log(null);
                // 账户余额为null；就单指空吗
                // 没有对象，该处不该有值
                // 此处（原型链最顶端Object）不应该有对象
                console.log(Object.prototype.__proto__);//输出null
            }

- 选择元素可以通过便签,id 选择器(),类名,子元素(),
任何元素都有这些方法,不只是document

/