// pages/goods/detail.js
const WXAPI = require('apifm-wxapi')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: {},
    goodsId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('on load');
    // this.data.goodsId = options.id
    this.data.goodsId = 5781
    console.log(this.data.goodsId)
  },
  async getGoodsDetailAndKanjieInfo(goodsId) {
    // network /goods/:id
    const goodsDetailRes = await WXAPI.goodsDetail(goodsId)
    console.log(goodsDetailRes)
    this.setData({
      goodsDetail: goodsDetailRes.data
    })
  },
  onReady: function () {
    console.log('on ready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('on show');
    // 晚一点去做数据请求 css + html 完成页面结构的绘制
    this.getGoodsDetailAndKanjieInfo(this.data.goodsId)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('on hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('on unload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
