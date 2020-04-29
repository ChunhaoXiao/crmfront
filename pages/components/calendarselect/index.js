// pages/components/calendarselect/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type:String,
      default:'下次回访日期'
    },
    selected_date:{
      type:String,
      default:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    display:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showCalendar() {
      this.setData({
        display:!this.data.display
      });
    },
    afterTapDay(e) {
      const dateStr = e.detail.year+'-'+e.detail.month+'-'+e.detail.day
      this.setData({
        display:false,
        //selected_date: dateStr
      })
      this.triggerEvent('dateset', dateStr);
    },  
  }
})
