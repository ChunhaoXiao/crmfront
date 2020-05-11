// pages/components/calls/index.js
const api = require('../../../utils/request');
Component({
  lifetimes: {
    attached: function() {
      console.log('attached')
      api.request({
        method:'GET',
        data:{customer_id:this.data.customer.id},
        success:res => {
          this.setData({
            datas:res.data
          })
        }
      }, 'call')
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    customer: {
      type:Object,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showform:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCall() {
      this.setData({
        showform:true
      })
    }
  }
})
