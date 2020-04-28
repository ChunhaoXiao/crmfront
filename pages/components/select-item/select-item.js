Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      default:''
    },
    selected: {
      type:Object,
      default:{}
    },
    name: {
      type:String,
      default:''
    },

    type: {
      type:String,
      default:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    datas:[],
  },
  pageLifetimes:{
    show() {
      console.log('selectedvaue=', this.data.selected);
      
      //const key = this.data.name;
      // if(key in this.data.selected) {
      //   this.setData({
      //     selected_text:this.data.selected[key]
      //   })
      // }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showOptions: function(e) {
      wx.navigateTo({
        url: '/pages/showoptions/showoptions?type='+this.data.type+'&name='+this.data.name,
      })
    }
  }
})
