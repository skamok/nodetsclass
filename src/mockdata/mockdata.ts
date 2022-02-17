import * as coreTypes from '../Core/CoreInterfaces';

const settings: coreTypes.ISettings = {
  cloudAPIs: [
    {
      id: 'yandex',
      name: 'Yandex Cloud',
      url: 'translate.com',
      login: 'user',
      password: 'password',
    },
    {
      id: 'google',
      name: 'Google Cloud',
      url: 'translate.com',
      login: 'user',
      password: 'password',
    },
  ],
  channels: [
    { type: 12, id: 'vbtkn', route: '/viber' },
    { type: 5, id: 'tlgtkn', route: '/telegram' },
  ],
};

export { settings };
