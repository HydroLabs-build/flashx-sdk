export class UIService {
  public insertCSS(cssString: string) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssString;
    document.head.appendChild(style);
  }

  public insertJS(jsString: string) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = jsString;
    document.body.appendChild(script);
  }
}
