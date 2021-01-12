    prototype   
    call() 借
    apply()

- call apply 借用方法    fn.call(绑定this,参数1,参数2,参数3,...)
                        fn.apply(绑定this,[参数1,参数2,参数3,...])    arguments


## 继承的几种方式 7-9
1. 构造函数绑定
2. prototype模式
3. 直接继承prototype
4. 利用空对象作为中介
5. 

2跟3相比好处是，3优点效率比较高,不用建立执行和建立Animal实例，
                缺点是Cat.prototype和Animal.prototype指向同一个对象，Animal.prototype被污染了
