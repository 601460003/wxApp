import Storage from "../storage";


class Navigate {
  constructor() {
    this.__skill = {
      to: "navigateTo",
      back: "navigateBack",
      tabs: "switchTab",
      reLaunch: "reLaunch",
      redirectTo: "redirectTo"
    };
  }


  /**
   * 页面跳转
   * @param url 路径
   * @param data 参数
   */
  link(url, data) {
    var p = "";
    p = this.__splice(data, p);

    wx[this.__skill["to"]]({
      url: url + p
    });
  };

  /**
   * 关闭当前页面，返回上一页面或多级页面。
   * @param delta 页面数
   */
  back(delta) {
    if (typeof  data === "number") {
      wx[this.__skill["back"]]({
        delta: delta
      });
    } else {
      console.error("请输入页面层数！");
    }
  }

  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * @param path tabBar路径
   */
  tabs(path) {
    if (typeof  data === "string") {
      wx[this.__skill["tab"]]({
        url: path
      });
    } else {
      console.error("tabBar 页面的路径错误");
    }
  }

  /**
   * 关闭所有页面，打开到应用内的某个页面
   * @param url
   * @param data
   */
  reLaunch(url, data) {
    var p = "";
    p = this.__splice(data, p);
    wx[this.__skill["tab"]]({
      url: url + p
    });
  }

  /**
   * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
   * @param url
   * @param data
   */
  redirectTo(url, data) {
    var p = "";
    p = this.__splice(data, p);
    wx[this.__skill["tab"]]({
      url: url + p
    });
  }

  /**
   * 拼接字符串
   * @param data
   * @param p
   * @return {*}
   * @private
   */
  __splice(data, p) {
    if (!data && data != "undefined") {
    } else if (typeof data === "String") {
      p = "?" + data;
    } else if (typeof data === "object") {
      var params = [];
      for (var k in data) {
        params.push(`${k}=${data[k]}`);
      }
      p = "?" + params.join("&");
    }
    return p;
  }

}

export default Navigate;
