const host = 'http://test.test.cn'
const wxRequest = function (params, url) {
  // wx.showToast({
  //   title: '加载中...',
  //   icon: 'loading'
  // })
  let header = {};
  if(params.method == 'POST') {
    header.Accept = 'application/json'
  }
  wx.request({
    url: 'http://crm.test/api/'+url,
    method: params.method || 'GET',
    data: params.data || {},
    header:header,
    success: function (res) {
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