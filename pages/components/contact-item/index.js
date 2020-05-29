// pages/components/contact-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    contact:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    makeCall() {
      wx.makePhoneCall({
        phoneNumber: this.data.contact.mobile //仅为示例，并非真实的电话号码
      })
    }
  }
})
