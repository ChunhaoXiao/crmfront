const pageExtend = Page => {
  return object => {
    // 导出原生Page传入的object参数中的生命周期函数
    // 由于命名冲突，所以将onLoad生命周期函数命名成了onLoaded
    const { onLoaded } = object

    // 公共的onLoad生命周期函数
    // object.onLoad = function (options) {
    //   // 在onLoad中执行的代码
    //   //console.log('loadedddd')

    //   // 执行onLoaded生命周期函数
    //   if (typeof onLoaded === 'function') {
    //     onLoaded.call(this, options)
    //   }
    // }

    // 公共的onShareAppMessage事件处理函数
    // object.onShareAppMessage = () => {
    //   return {
    //     title: '分享标题',
    //     imageUrl: '分享封面'
    //   }
    // }
    object.getValue = (e) => {
        let exists = this.data.postData;
        let datas = {...exists, ...e.detail}
        console.log(datas);
        this.setData({
          postData:datas
        });
      }
    return Page(object);
  }
  
// 获取原生Page
const originalPage = Page
// 定义一个新的Page，将原生Page传入Page扩展函数
Page = pageExtend(originalPage)
}