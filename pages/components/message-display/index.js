// pages/components/message-display/index.js

const api = require("../../../utils/request");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type:String,
    },
    url:{
      type:String,
    },
    data:{
      type:Object,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showmodal() {
      this.setData({
        show:true
      })
    }
  },
  options:{
    multipleSlots:true
  },
  
})
