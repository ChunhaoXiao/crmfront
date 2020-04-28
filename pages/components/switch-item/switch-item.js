// pages/components/switch-item/switch-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type:String,
      default:''
    },
    name: {
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
     getChecked(e) {
       const data = {
        [this.data.name] : e.detail.value
       }
       this.triggerEvent('getChecked', data); //getChecked 是在父组件 bind 的名字：bindgetChecked
     }
  }
})
