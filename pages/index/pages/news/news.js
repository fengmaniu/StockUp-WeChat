Page({
  data:{
    list: [
      {
        id: 'stack1',
        name: '海天精工',
        trend:'涨0.01%',
        color:'red',
        image:'/images/test1.jpg',
        // open: false,
        // pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'stack2',
        name: '南洋科技',
        trend:'涨0.05%',
        color:'red',
        image:'/images/test2.jpg',

      }, {
        id: 'stack3',
        name: '华新股份',
        trend:'跌0.05%',
        color:'green',
        image:'/images/test3.jpg',
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady:function(){
    // 页面渲染完成

  },
  onShow:function(){
    // 页面显示

  },
  onHide:function(){
    // 页面隐藏

  },
  onUnload:function(){
    // 页面关闭

  }
})