# react小书

- 简单应用，不是一个完整的上线应用website
  不需要router
  react 是现在最流行的web网站（应用）开发框架


- 组件组织起来？
1. CommentApp 根组件 index.js render
2. 子组件  comment 孙组件
3. 数据放在父组件中，通过prop 一路传递下去
  comments 放在 commentApp里面改的主要原因是
    CommentInput（
    CommentList 兄弟 
  ） 要push 兄弟的父组件要去加状态
  4. 个组件有专属的css 方便css的管理
  组件要卸载的时候 ，方便css移除干净
  5. 子组件要通知父组件 有事情怎么办？
  父组件将函数通过props方式来通知父组件洗地....