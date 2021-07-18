// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:'云开发',
  txt:'纯文本标签，支持换行符',
  img:'/images/film.png',
  list:[
    {name:'frank',age:16},
    {name:'jeck',age:17},
    {name:'mary',age:18}
  ],
  isLogin:true,
  count:0
  },
  onTapHander:function(){
    //this.data.count++;
    this.setData({
      count:this.data.count+1
    })
  },
  onBox: function(e){
    console.log("父元素被点击");
    console.log(e);
  },
  onChild: function(){
    console.log("子元素被点击");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})