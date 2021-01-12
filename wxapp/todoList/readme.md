# 小程序之左滑

- 小程序目录的意义
1. pages/ 是最简单的页面构架
  四大天王  wxml wxss js json
2. utils/
  工具目录
  各个页面公用的JS 工具函数 日期格式化
3. components/
  组件化
4. wxs 类JS的利用， utils
  直接就被模板利用，
  utils -> js文件中一i纳入 + wsml里面去复用
  新的语言wxs
- 你我他
  用户(隐私) ->  开发者 ->  小程序来自于微信(服务器)

- flex 等比例分配
  父元素上设置display： flex;
  子元素上设置flex：1; 等比例分配





  <!-- wxs 是微信程序的封装
module服务于代码的“复用” -->
<wxs src="../../wxs/api.wxs" module="api"/>
<view class="container" >
  <view class="userinfo">
  
    <button size="mini" open-type="getUserInfo" wx:if="{{!hasUserInfo && canIUse}}" bindgetuserinfo="getUserInfo" >登录</button>
    <block wx:else><image class="userinfo-avatar"></image>
    <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
</view>
<text>{{api.formatTime(1609397067763)}}</text>