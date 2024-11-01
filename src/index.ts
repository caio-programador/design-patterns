import { start } from "repl";
import FacebookLive from "./platforms/FacebookLive";
import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import YouTube from "./platforms/YouTube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

const startLive = (platform: IPlatform) => {
  console.log('Starting live');
  const live = new Live(platform);
  live.broadcasting();
  live.result();
}

startLive(new YouTube());


const startAdvancedLive = (platform: IPlatform) => {
  console.log('Starting advanced live');
  const live = new AdvancedLive(platform);
  live.broadcasting();
  live.result();
  live.comments();
  live.subtitles();
}

startAdvancedLive(new Twitch());

console.log('    \n\n\n\n')
startLive(new FacebookLive());
startAdvancedLive(new FacebookLive());