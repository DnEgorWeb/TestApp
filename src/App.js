'use strict';

class VKApi {
  constructor(options) {
    this._el = options.el;

    this._checkLogin();

    this._el.addEventListener('click', () => {
      VK.Auth.login((response) => {
        if (response.session) {
          this._getUsersFriends(response.session.mid);
        }
        this._el.removeEventListener('click');
      });
    });
  }

  _getUsersFriends(id) {
    const infoDiv = document.querySelector('.vk-information');
    const vkButton = document.querySelector('.vk-button');

    if (!vkButton.classList.contains('hidden')) vkButton.classList.add('hidden');
    infoDiv.classList.toggle('hidden');

    VK.Api.call('users.get', {user_ids: id}, (r) => {
      if(r.response) {
        let name = `${r.response[0].first_name} ${r.response[0].last_name}`;
        infoDiv.querySelector('.vk-header').innerHTML = name;
      }
    });
    VK.Api.call('friends.get', {user_ids: id, order: 'random', count: 5, fields: 'first_name,last_name,photo'}, (r) => {
      const list = infoDiv.querySelector('.vk-friends').children;
      if(r.response) {
        r.response.forEach((item, i) => {
          list[i].firstElementChild.src = item.photo;
          list[i].lastElementChild.innerHTML = `${item.first_name} ${item.last_name}`;
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
        self._getUsersFriends(response.session.mid);
      } else {
        document.querySelector('.vk-button').classList.toggle('hidden');
      }
    });
  }
}

new VKApi({
  el: document.getElementById('root')
});