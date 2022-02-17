import CloudAPIBase from '../CloudAPIBase';

export default class Yandex extends CloudAPIBase {
  supportedLanguages: string[];

  constructor(id: string) {
    super(id);
    this.supportedLanguages = [];
    this.getLanguages();
  }

  getLanguages() {
    this.supportedLanguages.push('EN');
  }

  translate(text: string, languageId: string): string {
    return languageId + ' ' + text.split('').reverse().join('');
  }
}
