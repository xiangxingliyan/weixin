//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  	
  },
  onLoad: function () {
    var _this = this;
    //幻灯片的数据请求
    wx.request({
      url: "http://json.bmbstack.com/bannerList",
      method: "GET",
      success: function(response){
        console.log(response.data);
        _this.data.dinnerList = response.data;
      },
      fail: function(error){
        console.log(error)
      },
      complete: function(){
        console.log('完成')
      }

    });


    //电影列表的数据请求
    wx.request({
      url: 'http://json.bmbstack.com/playingList',
      method: 'GET',
      success: function(response){
        console.log(response);
        _this.data.movieList = response.data;
      },
      fail: function(error){
        console.log(error)
      },
      complete: function(){
        console.log('完成')
      }
    });


  }
})
