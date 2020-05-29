// pages/customerlist/customerlist.js
const api = require('../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    list:{customer:[], contact:[]},
    tabs:[
      {
        text:"客户",
        name:'customer',
      },
      {
        text:"联系人",
        name:"contact",
      }
    ],
    type:'customer',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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

  // getCustomers() {
  //   api.request({
  //     method:'GET',
  //     data:{page:this.data.page},
  //     success:res => {
  //       console.log(res);
  //       this.setData({
  //         list:res.data.data
  //       })
  //     }
  //   }, 'customer')
  // },

  getData() {
    api.request({
      method:'GET',
      data:{page:this.data.page},
      success: res => {
        console.log(res)
        const lists = this.data.list;
        const datas = [...lists, ...res.data.data]
        const key = "list."+this.data.type;
        this.setData({
          [key]:datas
        })
      }
    },this.data.type);
  },
  changetab(e) {
    this.setData({
      type:e.detail.type
    })
    this.getData();
  }

  // getData(e) {
  //   this.setData({
  //     type:e.detail.type
  //   })

  //   api.request({
  //     method:'GET',
  //     data:{page:this.data.page},
  //     success:res => {
  //       console.log(res);
  //       this.setData({
  //         list:res.data.data
  //       })
  //     }
  //   }, this.data.type)

  // }
})