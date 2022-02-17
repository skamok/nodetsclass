import Core from '../Core/Core';
// import Dispatcher from '../Dispatcher/Dispatcher';

export default class CloudAPIBase extends Core {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor(id: string) {
    super();
    this.id = id;
    this.name = '';
    this.login = '';
    this.password = '';
    this.initCloudApi(id);
  }

  initCloudApi(id: string) {
    const APIsettings = CloudAPIBase.settings.cloudAPIs.find(
      (cloudAPI) => cloudAPI.id === id
    );
    if (APIsettings) {
      this.name = APIsettings.name;
      this.login = APIsettings.login;
      this.password = APIsettings.password;
      this.authorization();
    }
  }

  authorization() {}
  translate(text: string, languageId: string): string {
    return '';
  }
}
