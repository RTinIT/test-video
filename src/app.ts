import Control from './control';
import Video from "./Video"

export class App {
  private root: Control;
  private video: Video;

  constructor() {
    this.root = new Control(document.body, 'div', 'root');
    this.video = new Video(this.root.node, "./public/mixkit-a-long-haired-woman-singing-on-stage-478-medium.mp4", "video");
    const title = new Control(this.root.node, "h1", "title", "This is a video background test");
    const promise = this.video.node.play();

    if (promise !== undefined) {
      promise.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
        const btn = new Control(this.root.node, "button", "btn", "PLAY");
        btn.node.onclick = () => {
            this.video.togglePlay(btn.node);
          }
      });
    }
  }
}