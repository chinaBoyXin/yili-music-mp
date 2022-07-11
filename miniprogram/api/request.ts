const baseUrl: string = "https://yili-music-2038774-1302259617.ap-shanghai.run.tcloudbase.com"


function getRequest(config: WechatMiniprogram.RequestOption) : Promise<string | Record<string, any> | ArrayBuffer>  {
  wx.showLoading({
    title: "加载中"
  })
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      url: baseUrl + config.url,
      success: (res) => {
        resolve(res.data)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

export const get = (url: string)  => {
  return getRequest({
    url,
    method: "GET"
  })
}