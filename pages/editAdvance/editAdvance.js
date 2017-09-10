// pages/editAdvance/editAdvance.js
var util = require('../../utils/util.js')
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
      like_eat: options.like_eat,
      like_drink: options.like_drink,
      like_play: options.like_play,
      like_fun: options.like_fun,
      hate_eat: options.hate_eat,
      hate_drink: options.hate_drink,
      hate_play: options.hate_play,
      hate_fun: options.hate_fun
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
  setLikeEat : function(event){
    this.setData({
      like_eat: event.detail.value
    })
  },
  setLikeDrink: function (event) {
    this.setData({
      like_drink: event.detail.value
    })
  },
  setLikePlay: function (event) {
    this.setData({
      like_play: event.detail.value
    })
  },
  setLikeFun: function (event) {
    this.setData({
      like_fun: event.detail.value
    })
  },
  setHateEat: function (event) {
    this.setData({
      hate_eat: event.detail.value
    })
  },
  setHateDrink: function (event) {
    this.setData({
      hate_drink: event.detail.value
    })
  },
  setHatePlay: function (event) {
    this.setData({
      hate_play: event.detail.value
    })
  },
  setHateFun: function (event) {
    this.setData({
      hate_fun: event.detail.value
    })
  },
  saveAdvanceField : function(){
    wx.request({
      url: 'http://localhost:8080/lover/love/saveAdvanceField',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      data:{
        'likeAndHateList.like_eatList': this.data.like_eat,
        'likeAndHateList.like_drinkList': this.data.like_drink,
        'likeAndHateList.like_playList': this.data.like_play,
        'likeAndHateList.like_funList': this.data.like_fun,
        'likeAndHateList.hate_eatList': this.data.hate_eat,
        'likeAndHateList.hate_drinkList': this.data.hate_drink,
        'likeAndHateList.hate_playList': this.data.hate_play,
        'likeAndHateList.hate_funList': this.data.hate_fun,     
        id : 1
      },
      success: function (e) {
        console.log(e)
      }
    })
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
      like_eat: this.data.like_eat,
      like_drink: this.data.like_drink,
      like_play: this.data.like_play,
      like_fun: this.data.like_fun,
      hate_eat: this.data.hate_eat,
      hate_drink: this.data.hate_drink,
      hate_play: this.data.hate_play,
      hate_fun: this.data.hate_fun
    }),

      wx.navigateBack({
        delta: 1
      })
  }
  
})