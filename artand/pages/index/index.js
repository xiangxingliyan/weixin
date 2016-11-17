//index.js
var fun = require('../../utils/load.js');

Page({
  data: {
    className:'',
    hotList: [],
    hot_last_id: 0,
  },
  onLoad:function(){
    //一进入页面就加载数据
      fun.load(this,this.data.hot_last_id)
  },
  //下拉刷新加载数据
  onPullDownRefresh: function(){
      fun.load(this,this.data.hot_last_id)    
      //下拉刷新请求完后，关闭请求数据
      wx.stopPullDownRefresh()
    },
  //登录按钮变色
  inputBtn(e){
    var val = e.detail.value;
    if(val.length > 0){
      this.setData({
         className:'focus'
      })
    }else{
      this.setData({
         className:''
      })
    }
  }


})
