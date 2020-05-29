// pages/components/calls/index.js
const api = require('../../../utils/request');
Component({
  lifetimes: {
    attached: function() {
      this.getData()
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
    showform:false,
    calls:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCall() {
      this.setData({
        showform:true
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
    getValue(e) {
      let exists = this.data.postData;
      let datas = {...exists, ...e.detail}
      console.log(datas);
      this.setData({
        postData:datas
      });
    },

    createCall() {
      console.log(this.data.postData)
      this.setData({
        "postData.customer_id":this.data.customer.id
      })
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
          this.getData();
        }
      }, 'call')
    },
    getData() {
      api.request({
        method:'GET',
        data:{customer_id:this.data.customer.id},
        success:res => {
          console.log(res)
          this.setData({
            datas:res.data.data
          })
        }
      }, 'call')

    }


  }
  
})
