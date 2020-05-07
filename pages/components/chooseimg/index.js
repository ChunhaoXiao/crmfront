// pages/components/chooseimg/index.js
const app = getApp();
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
          //console.log(res.tempFilePaths);
          this.uploadImg(res.tempFilePaths);
        }
      })
    },

    uploadImg(piclist) {

      if(!piclist || piclist.length < 1) {
        return ;
      }
      let f = piclist.shift();
      
      wx.uploadFile({
        filePath: f,
        name: 'picture',
        url: app.globalData.apiUrl+'upload',
        header:{
          "Authorization" : "Bearer "+wx.getStorageSync('token'),
          "Accept" : "application/json"
        },
        success:res => {
          let pictureObj = JSON.parse(res.data);
          this.triggerEvent('setpicture', pictureObj.savepath);
          let picturelist = this.data.picturelist;
          picturelist.push(pictureObj.path);
          this.setData({
            picturelist:picturelist
          })
          this.uploadImg(piclist);
        },
        fail:res => {
          console.log(res)
        }
      })
    }
  }
})
