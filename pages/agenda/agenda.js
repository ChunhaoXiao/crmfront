// pages/agenda/agenda.js
const api = require('../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.request({
      success:res => {
        this.setData({
          agenda:res.data.data
        })
      }
    }, 'options/agenda')
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

  sendData() {
    //console.log(this.data.postData);
    api.request({
      method:'POST',
      data:this.data.postData,
      success:res => {
        console.log(res);
        this.setData({
          postData:{}
        })
      }
    }, 'agenda')
  },

  onPickerChange(e) {
    const name = e.currentTarget.dataset.name;
    const key = "postData."+name;
    this.setData({
      [key] : e.detail.value
    })
  },
})