import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{
  constructor(platform: IPlatform) {
    super(platform);
  }

  subtitles(): void {
    console.log('Live subtitles');
  }

  comments(): void { 
    console.log('Live comments');
  }
}