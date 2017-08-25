// pages/love/love.js
/**
 *  birthday : "1994-05-25",
    height : "163cm",
    weight : "50kg",
    size : "36d-25-30",
    location : "湘潭",
    like_eat : "肉",
    like_drink : "养乐多",
    like_play : "dance",
    like_fun : "sing",
    hate_eat : "不知道",
    hate_drink : "不知道",
    hate_play : "不知道",
    hate_fun : "不知道"
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  showLoverInfo: function () {
    var that = this
    wx.request({
      url: 'http://localhost:8080/lover/love/showLoverInfo',
      data: '',
      header: {},
      method: '',
      dataType: '',
      success: function (res) {
        console.log(res.data);
        that.setData({
          height : res.data.height,
          weight : res.data.weight,
          size: res.data.size,
          location: res.data.location,
          birthday:res.data.birthday,

          like_eat: res.data.likeAndHateList.like_eatList,
          like_drink: res.data.likeAndHateList.like_drinkList,
          like_play: res.data.likeAndHateList.like_playList,
          like_fun: res.data.likeAndHateList.like_funList,
          hate_eat: res.data.likeAndHateList.hate_eatList,
          hate_drink: res.data.likeAndHateList.hate_drinkList,
          hate_play: res.data.likeAndHateList.hate_playList,
          hate_fun: res.data.likeAndHateList.hate_funList,
          goalList: res.data.goalList
        })
      },
      fail: function (res) { 
        wx.showToast({
          title: 'Oops，连接服务器失败..',
          icon: 'loading',
          duration:3000
        })
      },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showLoverInfo()
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

  editBasicField : function(){
    var that = this
    wx.navigateTo({
      url: "../editBasic/editBasic?birthday=" + this.data.birthday 
      + "&height=" + this.data.height 
      + '&weight=' + this.data.weight 
      + '&size=' + this.data.size 
      +'&location='+this.data.location
    })
  },

  //编辑高级属性
  editAdvancedField : function(){
    wx.navigateTo({
      url: "../editAdvance/editAdvance?like_eat=" + this.data.like_eat
      + "&like_drink=" + this.data.like_drink
      + '&like_play=' + this.data.like_play
      //+ '&like_fun=' + this.data.like_fun 这样的话传递参数有问题？？
      + '&hate_eat=' + this.data.hate_eat
      + "&hate_drink=" + this.data.hate_drink
      + '&hate_play=' + this.data.hate_play
      + '&hate_fun=' + this.data.hate_fun
      + '&like_fun=' + this.data.like_fun 
    })
  }
})