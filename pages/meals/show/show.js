// pages/meals/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    meal: {
      time: '07:30',
      food_items: [
        {
          name: 'egg',
          amount: '100',
          unit: 'g'
        },
        {
          name: 'coconut coffee',
          amount: '100',
          unit: 'g'
        },
        {
          name: 'chia',
          amount: '100',
          unit: 'g'
        },
      ],
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {
    
  },

  // hanle tap on single food item in a meal
  tapOnFoodItem() {
    wx.navigateTo({
      url: '/pages/food_items/show/show',
    })
  },

  // handle tap on adding food item button
  tapOnAddFoodItem() {
    wx.navigateTo({
      url: '/pages/food_items/new/new',
    })
  },
})