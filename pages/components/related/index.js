// pages/components/related/index.js
const api = require('../../../utils/request')
Component({
  lifetimes: {
    attached: function() {
      console.log('attached')
      api.request({
        method:'GET',
        //data:{customer_id:this.data.customer.id},
        success:res => {
          console.log(res)
          this.setData({
            datas:res.data
          })
        }
      }, 'related/'+this.data.customer.id)
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    customer:{
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
