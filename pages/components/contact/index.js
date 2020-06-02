// pages/components/contact/index.js
const api = require('../../../utils/request');
Component({

  lifetimes: {
    attached:function() {
      console.log('customer', this.data.customer);
      api.request({
        methods:'GET',
        success:res => {
          console.log('contact:',res);
          this.setData({
            datas:res.data
          })
        }
      }, this.data.customer.id+'/contact')
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    customer: {
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

  }
  
})
