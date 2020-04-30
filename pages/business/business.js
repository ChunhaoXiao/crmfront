// pages/business/business.js
const app = getApp();
const api = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showform:true,
    products:[],
    total_price:0,
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
  getDate(e) {
    console.log(e.detail)
    this.setData({
      "postData.expected_deal_date":e.detail
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

  productselected(e) {
    if(!this.data.products.find(item => item.id == e.detail.id))
    {
      let products = this.data.products;
      products.push(e.detail)
      this.setData({
        products:products,
        showform:true,
      })
      this.setTotalPrice()
     // console.log(this.data.postData.name);
      
    }    
  },

  chooseproduct() {
    this.setData({
      showform:false
    })
    api.request({
      method:'GET',
      success:res => {
        console.log(res);
        let selectedIds = this.data.products.map(item => item.id);
        let datas = res.data.data.filter(item => !selectedIds.includes(item.id))
        this.setData({
          datas:datas
        })
      }
    }, 'product')
  },
  productRemoved(e) {
    const datas = this.data.products.filter(item => item.id != e.detail.id)
    this.setData({
      products:datas
    })
    this.setTotalPrice()
  },

  setTotalPrice() {
    let price = 0;
    this.data.products.forEach(item => {
      price += Number(item.price)
    })
    this.setData({total_price:price})
  },
  sendData() {
    let posts = this.data.postData;
    posts.products  = this.data.products.map(item => item.id) 
    console.log(posts);
    
    api.request({
      method:'POST',
      data:posts,
      success:res => {
        wx.showToast({
          title: '操作成功',
        })
        this.setData({
          postData:{},
          selected:{},
          products:[]
        })
      }
    }, 'business')
  }
})