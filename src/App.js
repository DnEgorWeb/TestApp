'use strict';

class VKApi {
  constructor(options) {
    this._el = options.el;

    this._checkLogin();
  }

  _login() {
    VK.Auth.login(function(response) {
      if (response.session) {
        self._getUsersFriends(response.session.mid);
      } else {
        console.log("no session");
      }
    });
  }

  _getUsersFriends(id) {
    VK.Api.call('users.get', {user_ids: id}, function(r) {
      if(r.response) {
        console.log(`${r.response[0].first_name} ${r.response[0].last_name}`);
      }
    });
  }

  _checkLogin() {
    const self = this;

    VK.init({
      apiId: 6253982
    });

    VK.Auth.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        self._getUsersFriends(response.session.mid);
      } else {
        self._login();
      }
    });
  }
}

new VKApi({
  el: document.getElementById('root')
});