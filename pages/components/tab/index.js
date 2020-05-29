// pages/components/tab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options:{
      type:Array,
      default:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTab:''
    
  },

  lifetimes:{
    attached() {
      this.setData({
        currentTab:this.data.options[0]['name']
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e) {
     let type =  e.currentTarget.dataset.tab;
     this.setData({
      currentTab:type
     })
     this.triggerEvent('changetab', {type:type});
    }
  }
})
