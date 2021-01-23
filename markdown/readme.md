- 在提交代码前需要注意什么
    1. git add .
    git commit -m "提交说明"
    不要提交有bug的代码
    check 一次代码  bug 
    review 一下代码 
    git 中 怎么review 代码 ？
    2. 测试驱动开发 mocha

    ## 如何用markdown 表达代码跟上个版本的区别(diff)
    ```diff
    const unique = (arr) => {
    -    return Array.form(new Set(arr))
    +   return [...new Set()]
    }
    ```
    
    ## TodoList
      - [首页搜索] 待完成
      - [x] 首页swiper 完成
      - [] ~~icon未完成~~

    ## 展开

    <img src="" width="300" />

    <details>
    <summary>展开查看规范</summary>
    这是展开的内容
    </details>

