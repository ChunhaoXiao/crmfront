// pages/components/cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon : {
      type:String,
      default:''
    },
    title:{
      type:String
    },
    border:{
      type:Number,
      value:1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    border:1
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
