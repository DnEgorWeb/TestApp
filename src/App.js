'use strict';

class VKApi {
  constructor() {
    this._el = document.getElementById('root');

    this._el.addEventListener('load', this._checkLogin.bind(this));
  }

  _checkLogin() {
    VK.Auth.getLoginStatus((response) => {
      console.log(response);
    });
  }
}