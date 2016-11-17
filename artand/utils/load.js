var aUrl = {
    "load": "http://ios1.artand.cn/discover/work/hot?last_id=",
    "new": "http://ios1.artand.cn/discover/work/new?last_id=0"
};
//初始加载数据，之后每次下拉刷新增加
var num=5;
//加载的函数          
function getLoad(_this,last_id){
    wx.request({
    //url + last_id 得到新数据
      url: aUrl.load+last_id,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        var oldList = _this.data.hotList;
        var newList = res.data.list.concat(oldList);
        newList.length = num;
        num = num+5;//下拉刷新增加的条数
        console.log(newList)
        _this.setData({
            hotList : newList,
            //第一次传值last_id为0，然后后面的值为res.data.last_id
            hot_last_id:res.data.last_id
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
}
//暴露出来
module.exports={
    load : getLoad
}