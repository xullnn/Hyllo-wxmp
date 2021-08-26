const config = require('../.config');

module.exports = (options, default_options = {
  path: '/',
  data: {},
  header: {},
  method: 'GET'
}) => {
  
  options = Object.assign(default_options, options);


  // try get cookie from local storage
  // if has, set 'cookie' header

  // on response, check if it has 'Set-cookie' header
  // if has(match /intake/) save(or replace) to local storage as 'cookies'

  let intakeCookie;
  let cookies = wx.getStorageSync('cookies') || []

  intakeCookie = cookies.find(cookieStr => (/intake/i).test(cookieStr));
  if (intakeCookie) options.header.cookie = intakeCookie;

  return new Promise((resolve, reject) => {
    wx.request({
      url: config.devHost + options.path,
      data: options.data,
      header: options.header,
      method: options.method,
  
      success(res) {
        if (res.statusCode === 200) {
          console.log(res.header)
          // try cookie
          if (res.cookies && res.cookies.length !==0) {
            console.log("Response has set-cookie")
            res.cookies.forEach(cookie => cookies.push(cookie));
            wx.setStorage({ key:'cookies', data: cookies});
          }
        }
        
        resolve(res)
      },
  
      fail(error) { reject(error) }
  
    })
  })
}