//调用微信的缓存功能
class Storage {
  Storage(){
    console.log('success create Storage able')
  }

  /**
   *  设置缓存
   * @param key
   * @param val
   */
  setItem(key, val){
    wx.setStorageSync(key, val);
  }

  /**
   *  获取缓存
   * @param key
   */
  getItem(key) {
    wx.getStorageSync(key);
  }

  /**
   * 清除缓存
   * @param key
   */
  clear(key){
    wx.removeStorageSync(key);
  }
}
export default Storage

