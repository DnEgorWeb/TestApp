'use strict';

class VKApi {
  constructor(options) {
    this._el = options.el;

    this._checkLogin();
  }

  _checkLogin() {
    VK.init({
      apiId: 6253982
    });

    VK.Auth.getLoginStatus(function(response) {
      console.log(response);
    });
  }
}

new VKApi({
  el: document.getElementById('root')
});