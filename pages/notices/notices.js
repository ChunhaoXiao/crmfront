// pages/notices/notices.js
const api = require('../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    showinfo:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNoticeList();
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
  getNoticeList() {
    api.request({
      success:res => {
        console.log(res)
        this.setData({
          lists:res.data.data
        })
      }
    }, 'notices')
  },
  
  getDetail(e) {
    const id = e.currentTarget.dataset.id;
    api.request({
      success:res => {
        console.log(res)
        
        this.setData({
          detail:res.data
        })
      }
    }, 'notices/'+id);
  }
})