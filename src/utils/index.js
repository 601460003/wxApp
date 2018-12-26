
/*
 * 格式化数值 不够2位前面补0
 * n 数值
 */
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

/*
 * 格式化数值 保留小数点后两位
 * n 数值
 */
function formatMoney (n) {
  return Number(n).toFixed(2);
}

/*
 * 格式化时间
 * date 
 * return 2018.12.25 16:00
 */
export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('.')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime
}
