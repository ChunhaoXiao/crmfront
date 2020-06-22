//index.js
//获取应用实例
const app = getApp()
const api = require('../../utils/request');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentTab:'agenda',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getAgenda();
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  afterTapDay(e) {
    const year = e.detail.year
    const month = e.detail.month
    const day = e.detail.day
    const fullyear = year+'-'+month+'-'+day;
    this.getAgenda(fullyear);
  },
  whenChangeMonth(e) {
    console.log('whenChangeMonth', e.detail.next);
    const day = new Date().getDate();
    const year = e.detail.next.year;
    const month = e.detail.next.month;
    const date = year+'-'+month+'-'+day;
    this.getAgenda(date);
  },

  getAgenda(dt='') {
    api.request({
        data:{date:dt},
        success:res => {
          console.log(res)
          this.setData({
            datas:res.data
          })
        }
    }, 'agenda')
  },

  changeTab(e) {
    this.setData({
      currentTab:e.currentTarget.dataset.tab
    })
  }
})
