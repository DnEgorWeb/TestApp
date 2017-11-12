'use strict';

class VKApi {
  constructor(options) {
    this._el = options.el;

    this._checkLogin();

    this._button = this._el.querySelector('.vk-button');
    this._infoDiv = this._el.querySelector('.vk-information');
    this._el.addEventListener('click', () => {
      VK.Auth.login((response) => {
        if (response.session) {
          this._getUsersFriends(response.session.mid);
        }
      });
    });
  }

  _getUsersFriends(id) {
    this._button.classList.toggle('hidden');
    this._infoDiv.classList.toggle('hidden');

    VK.Api.call('users.get', {user_ids: id}, (r) => {
      if(r.response) {
        let name = `${r.response[0].first_name} ${r.response[0].last_name}`;
        this._infoDiv.querySelector('.vk-header').innerHTML = name;
      }
    });
    VK.Api.call('friends.get', {user_ids: id, order: 'random', count: 5}, (r) => {
      const list = this._infoDiv.querySelector('.vk-friends').children;
      if(r.response) {
        console.log(r.response);
        r.response.items.forEach((item, i) => {
          list[i].innerHTML = `${item.first_name} ${item.last_name}`;
        });
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
        self._getUsersFriends.bind(self, response.session.mid);
      } else {
        self._button.classList.toggle('hidden');
      }
    });
  }
}

new VKApi({
  el: document.getElementById('root')
});