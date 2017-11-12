'use strict';

class VKApi {
  constructor(options) {
    this._el = options.el;

    this._checkLogin();

    this._button = this._el.querySelector('.vk-button');
    this._button.addEventListener('click', () => {
      VK.Auth.login(function(response) {
        if (response.session) {
          console.log(response.session);
        } else {
          console.log(response);
        }
      });
    });
  }

  _getUsersFriends(id) {
    let name;
    const friends = [];

    VK.Api.call('users.get', {user_ids: id}, function(r) {
      if(r.response) {
        name = `${r.response[0].first_name} ${r.response[0].last_name}`;
        console.log(name);
      }
    });
    VK.Api.call('friends.get', {user_ids: id, order: 'random', count: 5}, function(r) {
      if(r.response) {
        r.response.forEach((item) => {
          friends.push(item);
        });
        console.log(friends);
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
        this._button.classList.toggle('hidden');
      }
    });
  }
}

new VKApi({
  el: document.getElementById('root')
});