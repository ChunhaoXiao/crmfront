// pages/mycontract/mycontract.js
const api = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contracts:[],
    page:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getContractList()
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
  getContractList() {
    const contracts = this.data.contracts;
    api.request({
      data:{
        page:this.data.page
      },
      success:res => {
        console.log('contract list:',res.data.data)
        const datas = [...contracts, ...res.data.data]
        this.setData({
          contracts:datas
        })
      }
    }, 'contract')
  } 
})