import Core from '../Core/Core';
import * as coreTypes from '../Core/CoreInterfaces';
import Viber from '../Channels/Viber/Viber';
import Telegram from '../Channels/Telegram/Telegram';
import CloudAPIBase from '../CloudAPIs/CloudAPIBase';
import { Router } from 'express';
import Google from '../CloudAPIs/Google/Google';
import Yandex from '../CloudAPIs/Yandex/Yandex';

export default class Dispatcher extends Core {
  static channels: Map<string, Viber | Telegram>;
  static cloudAPIs: Map<string, Yandex | Google>;

  constructor() {
    super();
    Dispatcher.initCloudAPIs();
  }

  static initChannels() {
    Dispatcher.channels = new Map<string, Viber | Telegram>();
    const channelsSettings = Dispatcher.settings.channels;
    channelsSettings.forEach((item) => {
      switch (item.type) {
        case coreTypes.EChannelType.Viber:
          Dispatcher.channels.set(item.id, new Viber(item.type, item.id));
          break;
        case coreTypes.EChannelType.Telegram:
          Dispatcher.channels.set(item.id, new Telegram(item.type, item.id));
          break;
        default:
          break;
      }
    });
  }

  static initCloudAPIs() {
    Dispatcher.cloudAPIs = new Map<string, Yandex | Google>();
    const cloudAPIsettings = Dispatcher.settings.cloudAPIs;
    cloudAPIsettings.forEach((item) => {
      switch (item.id) {
        case coreTypes.ECloudAPIId.Google:
          Dispatcher.cloudAPIs.set(item.id, new Google(item.id));
          break;
        case coreTypes.ECloudAPIId.Yandex:
          Dispatcher.cloudAPIs.set(item.id, new Yandex(item.id));
          break;
        default:
          break;
      }
    });
  }

  static getRoutes(): Router[] {
    return Array.from(Dispatcher.channels.values()).map(
      (channel) => channel.router
    );
  }

  static translate(text: string, language: string): string {
    // choose cloud API
    let translatedText = '';
    const clouds = Array.from(Dispatcher.cloudAPIs.values());
    const apiWithSupportedLanguage = clouds.find((item) =>
      item.supportedLanguages.includes(language)
    );
    console.log(apiWithSupportedLanguage);
    if (apiWithSupportedLanguage) {
      translatedText = apiWithSupportedLanguage.translate(text, language);
    }
    return translatedText;
  }
}
