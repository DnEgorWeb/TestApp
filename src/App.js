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
      if (response.status === 'connected') {

      } else {
        VK.Auth.login(function(response) {
          if (response.session) {
            console.log(response.session);
          } else {
            console.log("-");
          }
        });
      }
    });
  }
}

new VKApi({
  el: document.getElementById('root')
});