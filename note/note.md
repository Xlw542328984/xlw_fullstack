- js介绍
已经并不不局限于前端验证
ecmaScript
js=es+DOM+BOM
js特点 解释性语言  类似玉c和java的语言结构
动态语言 基于原型的面向对象


- 输出语句
1. document.write("向body输出内容");
2. console.log("向控制台输出内容");
3. alter("弹窗");

- js代码编写的位置
<!-- 1. 写到标签的onclick属性中 -->
<!-- 2. 将js代码写在超链接的href属性中 -->
<!-- 3. 将js代码写在script标签中 -->
<!-- 4. 将js代码编写在外部js文件中，进行引入 -->
<script type="text/javascript" src="js/script.js"></script>
script标签用于引入外部js文件后就不能在编写代码了，写了也没用


- 基本语法
1. 注释
/*
js注释 
*/

//单行注释

2. 严格区分大小写
3. 分号结尾
```不写分号会消耗系统资源，系统会加错分号
```
4. js会忽略多个空格，可以利用空格进行格式化（不懂）


字面量，都是一些不可改变的值   都是可以直接使用的    但是你一般不会直接使用
变量 可以用来保存字面量 变量可以任意改变  开发中通过变量保存字面量




声明变量 
js中用var关键字来声明一个变量
1. 声明变量，为变量赋值   var a; a = 123; a = 456; console.log(a);
2. 声明变量赋值一起  var age = 123；




- 标识符
js中所有可以有我们自主命名的都是可以称为标识符
标识符命名规则
1. 标识符中可以含有字母，数字，_,$等 eg    var a_1_$ = 123;
2. 不能以数字开头
3. 不能是es中的关键字或保留字  eg    var var = 123;(报错)  var if = 123;(报错)  皇帝叫张三，你能叫张三吗？
        保留字   eg   class enum等              还有其他不建议使用的字符
4. 驼峰命名法    -首字母小写，每个单词开头字母大写，其余字母小写  eg  helloWorld   xxxYyyZzz
补充：js保存标识符是实际上采用的是UNicode编码，理论上讲所有UTF-8中含有的内容都可以作为标识符 eg中文但千万别用


- 数据类型 指字面量的类型
在js中一共有6种数据类型
        String 字符串
        Number 数值
        Boolean布尔值
        Null 空值
        Undefined 未定义
        Object 对象
    String 字符串 Number 数值  Boolean布尔值 Null 空值 Undefined 未定义 5种基本数据类型
- String字符串
1. 在js中使用字符串需要使用引号引起来   双引号单引号都可以 但不要混着用
    eg  var str = "hello"; console.log(str);
    error 错误示例   str = "我说"今天天气真不错”"
          正确  str = '我说"今天天气真不错”'    外面用单引号或者外面用双引号
2. 在字符串中也可以使用\作为转义字符，当表示一些特殊符号是可以使用\进行转义
        eg str = "我说\"今天天气真不错\”"   
         用\"表示一个双引号
         \'表示'
         \n表示换行
         \t表示一个制表符tab
         \\表示打印一个\   eg   str = "\\\\\\";    alter(str);     输出\\\


- Number
1. js中所有数值都是Number类型，包括整数和浮点数(小数)
2. 可以使用一个运算符typeof来检查一个变量的类型
        语法： typeof 变量
        eg console.log(typeof a);
3. js中可以表示的数字的最大值console.log(Number.MAX_VALUE)   
        如果使用Number表示的数字超过了最大值则会返回Infinity,表示正无穷；返回-Infinity,表示负无穷
        可以这样表示 var a = Infinity；
        使用typeof检查Infinity会返回number
        Number.MIN_VALUE会返回5e-324，表示大于0的最小值
4. NaN是一个特殊的数字,表示如果var a = NaN；使用typeof检查NaN也会返回number
5. 计算 var c = 123 + 123;
        使用js进行浮点数计算，可能得到一个不精确的数 var c = 0.1 + 0.2;
        所以千万不要使用js进行对精确度要求比较高的计算，例如钱


- Boolean布尔值
1. 只有两个true和false，主要用来做逻辑判断
    true - 表示真
    false - 表示假
    使用typeof检查时返回boolean
    <!-- 如何判断一个值是true还是false？ -->

- Null空值
1. Null类型的值只有一个，就是null，这个值专门用来表示一个空对象
        使用typeof检查时返回object


- Undefined(未定义)
1. Undefined类型的值只有一个，就是Undefined
        当声明一个变量，但不赋值时，它的值就是undefined
        
        未定义不等于为声明
        
        使用typeof检查时返回undefined
        {
                let a; // 声明，没有赋值
                console.log(typeof a);
        }
        有哪些情况是undefined？

- 强制类型转换
1. 将一个数据类型强制转换成其他数据类型
        类型转换主要指将其他的数据类型转换成String Number Boolean
                1. 转换成String
                方式一: - 电泳被转换数据类型的toString方法,
                        - 该方法不会影响到原数据，它会返回转换结果
                        - 注意： null和undefined两个值没有toString()方法，调用会报错
                        var a = 123;
                        //调用a的toString()方法
                        //调用xxx的yyy()方法，就是xxx.yyy();
                        a = a.toString();
                        局限：如果a=null；a = a.toString();会报错
                方式二：- 调用String()函数，并将被转换的数据作为作为参数传递给函数
                        a = String(a);
                        - 使用String()函数函数做强制类型转换时，对于Number和Boolean实际上就是调用toString()方法
                        对于null和undefined，就不调用toString()方法
                        将undefined和null直接转换成"null"和"undefined"字符串
                2. 转换成Number
                方法一: 使用Number函数    a = a.Number();
                                - 字符串转数字
                                1. 纯数字的字符串，则直接将其转换为数字
                                2. 字符串中含有非数字，则转换成NaN
                                3. 字符串为空串或者全是空格，则转换为0
                                - Boolean类型转数字 true转1，false转0
                                - Null转数字是0
                                - Undefined转数字是NaN
                方式二：专门对付字符串
                                - parseInt()把一个字符串转换成一个整数；将字符串中的有效的整数读出来
                                - parseFloat()把一个字符串转换成一个浮点数,将字符串中的有效的小数读出来
                                a = "123.456px"; a = parseInt(a);  //结果123 
                                a = "123.456.789px"; a = parseFloat(a);  //结果123.456
                                如果对非String类型使用parseInt()和parseFloat()，先将其转换为String再操作


- 其他进制的数字
在js中如果需要表示        - 十六进制的数字，用0x开头   a = 0xcafe;   //输出51966   
                        - 八进制数字用0开头
                        - 二进制的数字用0b开头，但不是所有的浏览器都支持
                        注意070这种字符串有些会解析成八进制，有些会解析成十进制
                        可以用这种方法解决a = '070';  a= parseInt(a,10);指定成十进制
                                                     a= parseInt(a,8); 指定成八进制
                3. 转换成Boolean
                方法一： -使用Boolean()函数
                        Number转String
                        a = 123； a = Boolean(a);//结果true
                        a = -123； a = Boolean(a);//结果true
                        a = 0； a = Boolean(a);//结果false
                        a = NaN； a = Boolean(a);//结果false
                        a = Infinity； a = Boolean(a);//结果true
                        - 除了0和NaN是false，其余都是true
                        字符串转Boolean
                        null和undefined都是false
                        - 字符串除了空串是false，其余都是true
                        对象也会转换成true


- 运算符 也叫做操作符 eg +-等
1. 通过运算符可以对一个或者多个值进行运算，并获取运算结果
        typeof也是运算符  ，可以获取一个值的类型,返回值是一个字符串
        var a = 123;    var result = typeof a;  console.log(result);
2. 当对非Number值进行计算是会将其转换成Number在计算
        +计算
                任何数与NaN计算都为NaN
                对两个字符串进行+计算，会进行拼串操作
                双引号要在同一行
                任何值和字符串做加法操作，会先转化成字符串再操作
                隐式类型转换 c = c + "";
                console.log("c = " + c);
                resul = 1 + 2 +"3";//33
                resul = "1" + 2 + 3;//123
        -计算
                转换成Number进行计算
        *计算
                任何值进行- * /计算时,会先转换成Number再计算
                        利用这一特点做隐式类型转换 -0 *1  /1
        %计算   取余数


- 一元运算符
1.      -取负
        +取正
        对其他数据类型进行取正，可以转换成Number


- 自增自减
1. 自增 ++
        后++    a++;    先运算再++
        前++    ++a;    先++在运算
        相同点：都会进行自增
        区别：在本次运算中是否使用新值
        {
                var a = 20;
                a = a++;
                console.log(a);//输出a=20
        }
2. 自减 --
        后--    a--;
        前--    --a;
        同自增一样


- 三种逻辑运算符        !非     &&与    ||或
1. !非
        对布尔值进行取反操作
       {
               var a = true;
               a = !a;
               console.log(a);//false;
       } 
       对非布尔值进行运算，会转化成布尔值再运算
       对任意数据类型取两次!!装换成布尔值a = !!a;
2. &&与
        && 对符号两侧的的值进行运算，两个true才是true
        js的与属于短路的与，第一个值为false时，不会检查第二个值
3. ||或
        有一个为true就是true
        短路的或，第一个值为true时，直接返回第一个值，不会检查第二个值
                 第二个值为false ，直接返回第二个值



- 赋值运算符
        可以降幅哈皮右侧之赋值给符号左侧的变量
        =       +=      -=      *=      /+     %=

