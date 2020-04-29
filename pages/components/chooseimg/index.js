// pages/components/chooseimg/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    picturelist:{
      type:Array,
      default:[]
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
    chooseimg() {
      wx.chooseImage({
        complete: (res) => {
          console.log(res.tempFilePaths);
          this.uploadImg(res.tempFilePaths);
        }
      })
    },

    uploadImg(piclist) {

      if(piclist.length < 1) {
        return ;
      }
      let f = piclist.shift();
      
      wx.uploadFile({
        filePath: f,
        name: 'picture',
        url: 'http://crm.test/api/upload',
        success:res => {
          let pictureObj = JSON.parse(res.data);
          this.triggerEvent('setpicture', pictureObj.savepath);
          let picturelist = this.data.picturelist;
          picturelist.push(pictureObj.path);
          this.setData({
            picturelist:picturelist
          })
          this.uploadImg(piclist);
        }
      })
    }
  }
})
