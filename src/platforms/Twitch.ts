import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform {
    constructor() {
        this.configureRMTP();
        console.log("Twitch live streaming platform configured");
    }
    configureRMTP(): void {
        this.authToken();
        console.log('Twitch RMTP configured');
    }
    authToken(): void {
        console.log('Twitch Auth Token generated');
    }
}