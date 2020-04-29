// pages/components/textarea-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      default:''
    },
    defaultvalue:{
      type:String,
      default:''
    },
    name:{
      type:String,
      default:''
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
    getValue(e) {
      const value = e.detail.value;
      const data = {[this.data.name] : value}
      this.setData({
        defaultvalue:value
      })
      this.triggerEvent('getInput', data);
    }
  }
})
