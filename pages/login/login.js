var app = getApp();
Page({
  data:{
    userinfo:"",
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // String2
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    // String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    // String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    // String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    // String6
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    // String7
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    // String8
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },

  //提交数据
  formSubmit: function (e){
      //提交表单
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000
      });
      var val = e.detail.value;
      if(this.data.address != ''){
          var data = {appid:config.APPID,userid:this.data.userInfo.id,id:this.data.address.id,username:val.name, mobile:val.tel,address:val.address}
          http.httpGet("?c=user&a=editAddress" ,data,function(res){
                 if(res.code == '200' && res.msg == 'success'){
                        wx.navigateBack();
                        console.log("编辑地址成功");
                 }else{
                        //wx.navigateBack();
                        console.log("编辑地址失败");
                 }
          });
      }else{
          var data = {appid:config.APPID,userid:this.data.userInfo.id,username:val.name, mobile:val.tel,address:val.address};
          console.log(data);
          http.httpGet("?c=user&a=addAddress" ,data,function(res){
                 if(res.code == '200' && res.msg == 'success'){
                        wx.navigateBack();
                        console.log("添加地址成功");
                 }else{
                        //wx.navigateBack();
                        console.log("添加地址失败");
                 }
          });
      }
  }
})