# weui 里面学习命名风格，腾讯系的套路
    .container + .page 业务惯例

- container,wrapper
    在pc端，负责页面容器的宽度，左右留白
    1200px + margin auto
    在移动端 没有auto的需要
    Pos:a + 100% +overlower:hidden
    一屏移动效果

- page
    良好垂直滚动的页面容器


- page_hd   page_bd   page_ft
    _国际命名规范 BEM _表示
    .page Block 区块
    Element 子元素    __两个下划线表示
    .page.page>(Block).page__hd(Element)>(.page__title+.page__desc)(Element,BE不受html结构的限制)+.page.bd
    .weui-uploader>.weui-uploader__hd+.weui-uploader__bd


- css 编写顺序
  1. css reset 把浏览器变成一张白纸，为了统一（margin padding）
  2. 业务央视 like .page .container 公用
  3. 业务样式 最少 BEM
     .page>.page__hd
     