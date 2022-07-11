// index.ts

import { testApi } from "../../api/test/test"


// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    message: "初始化文本"
  },
  test() {
    testApi().then(res => {
      this.setData({
        message: res
      })
    })
  }
})
