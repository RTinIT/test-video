import Control from './control';

export class App {
  private root: Control;
  private video: Control;

  constructor() {
    this.root = new Control(document.body, 'div', 'root');
    this.video = new Control(this.root.node, "video", "video");
    this.video.setAttr("src", "./public/mixkit-a-long-haired-woman-singing-on-stage-478-medium.mp4");
    this.video.setAttr("autoplay", "");
    this.video.setAttr("muted", "");
    this.video.setAttr("loop", "");
  }
}