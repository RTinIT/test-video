class Video {
  public node: HTMLVideoElement;
  public played: boolean;

  constructor(parentNode: HTMLElement | null, src: string, className = '') {
    const element = document.createElement("video");
    element.className = className;
    element.setAttribute("src", src);
    element.setAttribute("muted", "");
    element.setAttribute("autoplay", "");
    element.setAttribute("loop", "");
    if (parentNode) {
      parentNode.append(element);
    }
    this.node = element as HTMLVideoElement;
    this.played = false;
  }

  public destroy(): void {
    this.node.remove();
  }

  public setAttr(key: string, value: string) {
    this.node.setAttribute(key, value);
  }

  public togglePlay(btn: HTMLElement) {
    this.played = !this.played;
    console.log(this.played);
    
    if (this.played) {
      this.node.play();
      btn.innerText = "PAUSE";
    } else {
      this.node.pause();
      btn.innerText = "PLAY";

    }
  }
  
}

export default Video;
