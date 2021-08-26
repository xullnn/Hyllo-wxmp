// index.js
// 获取应用实例
const app = getApp();
const requestIntake = require("../../utils/request")

Page({
  // data: {
  //   motto: 'Hello World',
  //   userInfo: {},
  //   hasUserInfo: false,
  //   canIUse: wx.canIUse('button.open-type.getUserInfo'),
  //   canIUseGetUserProfile: false,
  //   canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  // },
  // // 事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad() {
  //   if (wx.getUserProfile) {
  //     this.setData({
  //       canIUseGetUserProfile: true
  //     })
  //   }
  // },
  // getUserProfile(e) {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // },
  // getUserInfo(e) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }

  data: {
    userInfo: {},
    hasUserInfo: false,
    dateTime: '2021-07-05'
  },

  request_test() {
    requestIntake({})
  },

  onLoad() {
    let mealsOfToday = [
      {
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
      },

      {
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
      },

      {
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
    ];

    this.setData({
      summaries: mealsOfToday.map(meal => {
        return {
          time: meal.time,
          summary: meal.food_items.map(item => item.name).join(", "),
          id: meal.id
        }
      })
    })
  },

  tapOnMeal() {
    console.log("tap on single meal");
    wx.navigateTo({
      url: '/pages/meals/show/show',
    })
  },

async handleLogin() {
    let userDenied;
    let res_1 = await wx.getUserProfile({desc: 'For user registration'}).catch(err => {
      console.error(err);
      userDenied = true;
    });

    if (userDenied) return;

    console.log(res_1);

    await wx.setStorage({
      key: 'userProfile',
      data: res_1.userInfo
    });

    let loginFailedOnWechat;
    let res_2 = await wx.login().catch(err => {
      console.log(err);
      loginFailedOnWechat = true;
    });

    if (loginFailedOnWechat) return;

    console.log(res_2);
    let code = res_2.code;

    await requestIntake({
      path: '/users/signin/wechat',
      data: {
        login_credential_code: code,
        userProfile: wx.getStorageSync('userProfile')
      },
      method: 'POST'
    }).then(res => {
      console.log("Login intake via wechat authentication successfully.");
      console.log(res)
    }).catch(console.error)
  },

  handleLogout(e) {
    wx.clearStorage('userProfile');
    
    requestIntake({
      path: "/users/signout",
      method: "POST"
    }).then(res => {
      console.log("Login intake via wechat authentication successfully.");
      console.log(res)
    }).catch(console.error)
  }
})
