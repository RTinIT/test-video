class Control{
  public node: HTMLElement;

  constructor(parentNode: HTMLElement | null, tagName = 'div', className = '', content = '') {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = content;
    if (parentNode) {
      parentNode.append(element);
    }
    this.node = element as HTMLElement;
  }

  public destroy(): void {
    this.node.remove();
  }

  public listen(callback: () => void, event = 'click') {
    this.node.addEventListener(event, callback);
  }

  public setAttr(key: string, value: string) {
    this.node.setAttribute(key, value);
  }
  
}

export default Control;
