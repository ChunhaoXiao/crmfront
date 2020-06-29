//const host = 'http://test.test.cn'
const app = getApp();
const wxRequest = function (params, url) {
  // wx.showToast({
  //   title: '加载中...',
  //   icon: 'loading'
  // })
  let header = {};
  if(params.method == 'POST') {
    header.Accept = 'application/json'
  }
  header.Authorization = 'Bearer '+wx.getStorageSync('token');
  
  wx.request({
    url: app.globalData.apiUrl+url,
    method: params.method || 'GET',
    data: params.data || {},
    header:header,
    success: function (res) {
      console.log(res.statusCode);
      if(res.statusCode == 429) {
        wx.showToast({
          title: '请求太频繁，稍后再试',
          icon:"none"
        })
        return;
      }

      if(res.statusCode == 500) {
        wx.showToast({
          title: '服务器错误',
          icon:'none'
        })
        return
      }
      if(res.statusCode == 422) {
        
        const error = Object.values(res.data.errors)[0][0];
        wx.showToast({
          title: error,
          icon:'none'
        })
        return
      }
      params.success && params.success(res)
      
    },
    fail: function (res) {
      params.fail && params.fail(res)
    },
    complete: function (res) {
      params.complete && params.complete(res)
    }
  })
}

//const bindCode = function (params) { wxRequest(params, host + '/AppPhone/Api') }
module.exports.request = wxRequest