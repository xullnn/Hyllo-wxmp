// pages/food_items/new/new.js
const config = require("../../../.config");


Page({

  /**
   * Page initial data
   */
  data: {

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

  formSubmit(e) {
    console.log(this.route)
    console.log(this.route, "Submitted params: ", e.detail.value)
    let params = e.detail.value;
    if (params.name.trim().length < 2 || params.amount <=0 ) return; // frontend validation
    requestIntake({
      path: "/food_items",
      method: "POST",
      data: e.detail.value
    })
  }
})