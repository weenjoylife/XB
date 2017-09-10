// pages/editBasic/editBasic.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      height: options.height,
      weight: options.weight,
      size: options.size,
      location: options.location,
      birthday: options.birthday,
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  saveBasicField :function(){
    wx.request({
      url: 'http://localhost:8080/lover/love/saveBasicField',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data:{
        height: this.data.height,
        weight: this.data.weight,
        size: this.data.size,
        location: this.data.location,
        birthday: this.data.birthday,
        id: 1
      },
      success:function(e){
        console.log(e)
      }
    }),
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 3000
      })
      //这里要加入控制调回父页面时间的代码

      //重要代码，可以让子页面返回父页面时，将子页面中的值传给父页面
      var pages = getCurrentPages()
      var prePage = pages[pages.length - 2] //上一个页面
      prePage.setData({
        height: this.data.height,
        weight: this.data.weight,
        size: this.data.size,
        location: this.data.location,
        birthday: this.data.birthday
      }),

      wx.navigateBack({
        delta:1
      })
  },

  setBirthday : function(event){
    console.log('生日:' + event.detail.value)
    this.setData({
      birthday : event.detail.value
    })
  },

  setHeight : function (event) {
    
    this.setData({
      height: event.detail.value
    })
  },

  setWeight : function (event) {
    
    this.setData({
      weight: event.detail.value
    })
  },

  setSize : function (event) {
    
    this.setData({
      size: event.detail.value
    })
  },

  setLocation : function (event) {
    
    this.setData({
      location: event.detail.value
    })
  }
})