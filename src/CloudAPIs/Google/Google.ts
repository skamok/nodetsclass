import CloudAPIBase from '../CloudAPIBase';

export default class Google extends CloudAPIBase {
  supportedLanguages: string[];

  constructor(id: string) {
    super(id);
    this.supportedLanguages = [];
    this.getLanguages();
  }

  getLanguages() {
    this.supportedLanguages.push('DE');
  }

  translate(text: string, languageId: string): string {
    return languageId + ' ' + text.split('').reverse().join('');
  }
}
