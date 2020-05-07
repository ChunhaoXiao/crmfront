// pages/thread/thread.js
const api =require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thread_from:{},
    call_date:'',
    showCalendar:false,
    postData: {},
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

  showOptions: function(e) {
    const name = e.currentTarget.dataset.name;
    this.setData({
      type:e.currentTarget.dataset.type
    })
    wx.navigateTo({
      url: '/pages/showoptions/showoptions?type='+this.data.type+'&name='+name,
    })
  },

  // afterTapDay(e) {
  //   const dateStr = e.detail.year+'-'+e.detail.month+'-'+e.detail.day
  //   this.setData({
  //     "postData.call_date":dateStr,
  //     showCalendar:false
  //   })
  // },

  // displayCalendar() {
  //   this.setData({
  //     showCalendar:!this.data.showCalendar
  //   })
  // },

  getValue(e) {
    let exists = this.data.postData;
    let datas = {...exists, ...e.detail}
    console.log(datas);
    this.setData({
      postData:datas
    });
  },
  submitData() {
    api.request({
      method:'POST',
      data:this.data.postData,
      success:res => {
        wx.showToast({
          title: '操作成功',
        })
        this.setData({
          postData:{},
          selected:{}
        })
      }
    }, 'thread')
    //console.log(this.data.postData)
    // wx.request({
    //   url: 'http://crm.test/api/thread',
    //   header:{
    //     "Accept":"application/json"
    //   },
    //   data:this.data.postData,
    //   method:'POST',
    //   success:res => {
    //     if(res.statusCode == 422) {
    //       const error = Object.values(res.data.errors)[0][0];
    //       wx.showToast({
    //         title: error,
    //         icon:"none"
    //       })
    //       return 
    //     }
    //     wx.showToast({
    //       title: '添加成功',
    //     })
    //     this.setData({
    //       postData:{},
    //       selected:{}
    //     })

    //   },
    //   fail:data => {

    //   }

    // })
  }
})