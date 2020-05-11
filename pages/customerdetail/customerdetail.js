// pages/customerdetail/customerdetail.js
const app = getApp();
const api = require('../../utils/request');
const nav = require('../../datas/customernav')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      customer:{},
      nav:nav.customernav,
      type:'info',
      showform:false,
      call_index:0,
      postData:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const customer_id = options.id 
    api.request({
      method:'GET',
      success: res => {
        console.log(res);
        this.setData({
          customer:res.data.data,
        })
      }
    }, 'customer/'+customer_id)
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
  switchtab(e) {
    const name = e.currentTarget.dataset.name
    
    this.setData({
      type:name,
      showform:false
    })
    console.log(name)
  },
  addCall() {
    this.setData({
      showform:true,
      "postData.customer_id" : this.data.customer.id
    })
    api.request({
      method:'GET',
      success: res => {
        console.log(res.data.data)
        this.setData({
          calls:res.data.data,
          "postData.call_method_id":res.data.data[0].id
        })
      }
    }, 'options/call_method');
  },
  selectCall(e) {
    const index = e.detail.value;
    this.setData({
      "postData.call_method_id":this.data.calls[index].id,
      call_index:index
    })
  },
  createCall() {
    console.log(this.data.postData)
    api.request({
      method:"POST",
      data:this.data.postData,
      success:res => {
        console.log(res)
        wx.showToast({
          title: '添加成功',
        })
        this.setData({
          postData:{},
          showform:false
        })
      }
    }, 'call')
  },
  getCallList() {
    api.request({
      method:'GET',
      data:{customer_id:this.data.customer.id},
      success: res => {
        console.log(res)
      }
    }, 'call')
  }
})