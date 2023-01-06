import { MinimoonHeaderProps } from "../interfaces/HeaderProps";

export class Header {
  private readonly headers: MinimoonHeaderProps = {
    "Content-Type": "text/plain",
    "User-Agent": "Minimoon/1.0.0",
    Accept: "*/*",
  };

  add<K extends keyof MinimoonHeaderProps, V extends MinimoonHeaderProps[K]>(key: K, value: V) {
    this.headers[key] = value;
  }

  getAllHeaders() {
    return this.headers;
  }
}

// const h= new Header();
// h.add('User-Agent', 'Minimoon/1.0.0')
