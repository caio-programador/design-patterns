import IPlatform from "./IPlatform";

export default class FacebookLive implements IPlatform{
    constructor() {
        this.configureRMTP();
        console.log("FacebookLive live streaming platform configured");
    }
    configureRMTP(): void {
        this.authToken();
        console.log('FacebookLive RMTP configured');
    }
    authToken(): void {
        console.log('FacebookLive Auth Token generated');
    }
}