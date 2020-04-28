// pages/center/center.js
const menus = require('../../datas/menus');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      menus:menus.menus
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },
  img() {
    wx.chooseImage({
      complete: (res) => {
        const f = res.tempFilePaths[0]
        wx.uploadFile({
          filePath: f,
          name: 'img',
          url: 'https://service-6u0vuyiw-1256330218.gz.apigw.tencentcs.com/release/upload',
          success:res => {
            console.log(res);
          }
        })
        
      },
    })
  }
})