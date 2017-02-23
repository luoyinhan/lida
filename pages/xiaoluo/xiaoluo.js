var app = getApp()
Page({
  data: {
    customer: "张三",//是否显示面板指示点
    factory: "某某加工厂",  //是否自动切换
    no: "000112",      //当前所在index
    name: "成衣", //自动切换时间
    pic: "../../images/add.png",
    clas: ["action"]
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    // String2
    // this.getUserinfo(null);
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    // String3
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    // String4
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    // String5
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    // String6
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    // String7
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    // String8
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'mytile',
      path: '/page/user?id=123',
    }
  },
  //获取用户信息
  getUserinfo: function (e) {
    var name=e.currentTarget.dataset.name;
    var that = this
    console.log("name="+name);
    this.setData({
      name:name,
    });
   
  },
  userinfo:{
    nickname:null,
    pic:null,
  }
})