//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    background: ['green', 'red', 'yellow'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    image:['/images/test1.jpg','/images/test2.jpg','/images/test3.jpg'],
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
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})

