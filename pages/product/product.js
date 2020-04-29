// pages/product/product.js
const app = getApp();
const api = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictures:[],
    postData:{},
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

  getValue(e) {
    let exists = this.data.postData;
    let datas = {...exists, ...e.detail}
    console.log(datas);
    this.setData({
      postData:datas
    });
  },
  getPictures(e) {
    let pictures = this.data.pictures;
    if(e.detail) {
      pictures.push(e.detail)
      this.setData({
        "postData.pictures":pictures
      })
    }
  },

  sendData() {
    console.log(this.data.postData)
    api.request({
      method:'POST',
      data:this.data.postData,
      success: res => {
        wx.showToast({
          title: '操作成功',
        })
        this.setData({
          postData:{},
          pictures:[],
          picturelist:[],
        })
      }
    }, 'product')
  }
})