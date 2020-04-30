const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getInputValue = (e) => {
  let exists = this.data.postData;
  console.log(e.detail);
  let datas = {...exists, ...e.detail}  
  this.setData({
    postData:datas
  });
}

const getDateValue = (e) => {

}

module.exports = {
  formatTime: formatTime,
  getInputValue:getInputValue,
}
