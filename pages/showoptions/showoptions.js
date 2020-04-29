// pages/showoptions/showoptions.js
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
    const name = options.name? options.name : options.type;
    wx.request({
      url: 'http://crm.test/api/options/'+options.type,
      success:res => {
        this.setData({
          datas:res.data,
          option:options.type,
          name:name
        })
      }
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

  select:function(e) {
    const id = e.currentTarget.dataset.id
    let pages  = getCurrentPages();
    const prevPage = pages[pages.length - 2];
    let key = "postData."+this.data.name
    const itemData = this.data.datas.find(item => item.id == id)  
    let selected_key = "selected."+this.data.name; 

    prevPage.setData({
      [selected_key]:itemData.name,
      [key] : itemData.id
    })
    wx.navigateBack({
    });
  }
})