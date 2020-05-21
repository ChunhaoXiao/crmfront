// pages/mybusiness/show.js
const api = require('../../utils/request')
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
    const id = options.id
    api.request({
      method:'GET',
      success: res => {
        console.log(res)
        this.setData({
          business:res.data.data
        })
      }
    }, 'business/'+id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // const arr = [
    //   {name:'aaa', age:10},
    //   {name:'bbb', age:20}
    // ];
    // arr.map(item => {
    //   item.age = 888
    // })
   // console.log(arr)
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

  }
})