import * as coreTypes from './CoreInterfaces';
//mockdata
import { settings as mockSettings } from '../mockdata/mockdata';

export default class Core {
  static settings: coreTypes.ISettings;
  static conversations: Map<string, coreTypes.IConversation>;

  constructor() {
    Core.conversations = new Map<string, coreTypes.IConversation>();
  }

  static readSettings() {
    console.log('stas', 'Core.readSettings()');
    Core.settings = mockSettings;
  }

  get settings() {
    return Core.settings;
  }
}
