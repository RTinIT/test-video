class Video {
  public node: HTMLVideoElement;
  public played: boolean;

  constructor(parentNode: HTMLElement | null, src: string, className = '') {
    const video = document.createElement("video");
    const source = document.createElement("source");

    video.className = className;
    video.muted = true;
    video.setAttribute("muted", ""); // could be removed
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    source.src = src;
    source.type = "video/mp4";

    video.appendChild(source);

    if (parentNode) {
      parentNode.append(video);
    }

    this.node = video as HTMLVideoElement;
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
