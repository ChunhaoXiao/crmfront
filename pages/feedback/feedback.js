// pages/feedback/feedback.js
const api = require('../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictures:[],
    content:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  getUploadedPicture(e) {
    let pictures = this.data.pictures;
    pictures.push(e.detail);
    this.setData({
      pictures:pictures
    })
    console.log(this.data.pictures)
  },
  getContent(e) {
    //console.log(e.detail.value)
    this.setData({
      content:e.detail.value
    })
  },
  sendFeedback() {
    api.request({
      method:'POST',
      data:{
        content:this.data.content,
        pictures:this.data.pictures
      },
      success:res => {
        wx.showToast({
          title: '提交成功',
        })
        setTimeout(function(){
          wx.switchTab({
            url: '/pages/my/my',
          })
        },1000);
      }
    }, 'feedback')
  }
})