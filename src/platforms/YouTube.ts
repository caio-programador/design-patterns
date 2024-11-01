import IPlatform from "./IPlatform";

export default class YouTube implements IPlatform { 

  constructor() {
    this.configureRMTP();
    console.log("YouTube live streaming platform configured");
  }

  configureRMTP(): void {
    this.authToken();
    console.log('YouTube RMTP configured');
  }

  authToken(): void {
    console.log('YouTube Auth Token generated');
  }
}