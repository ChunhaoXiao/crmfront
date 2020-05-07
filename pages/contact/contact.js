// pages/contact/contact.js
const app = getApp();
const api = require('../../utils/request')
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    selected:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const name = options.name;
    const customer_id = options.id;
    this.setData({
      "postData.customer_id": customer_id,
      "selected.customer_id":name
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

  showOptions: function(e) {
    // this.setData({
    //   type:e.currentTarget.dataset.type,
    //   name:e.currentTarget.dataset.name
    // })
    // wx.navigateTo({
    //   url: '/pages/showoptions/showoptions?type='+this.data.type+'&name='+this.data.name,
    // })
  },

  displayCalendar() {
    this.setData({
      showCalendar:!this.data.showCalendar
    })
  },

  getValue(e) {
    let exists = this.data.postData;
    let datas = {...exists, ...e.detail}
    console.log(datas);
    this.setData({
      postData:datas
    });
  },
  getDate(e) {
    console.log(e.detail)
    this.setData({
      "postData.next_contact_date":e.detail
    })
  },
  sendData() {
    api.request({
      method:'POST',
      data:this.data.postData,
      success: res => {
        wx.showToast({
          title: '操作成功',
        })
        this.setData({
          postData:{},
          selected:{}
        })
      }
    }, 'contact')
  }
})