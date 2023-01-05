// // TODO: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers
// type HeaderName = "Content-Type";




import { MinimoonHeaderProps } from "../interfaces/HeaderProps";

// interface Options {
//   devOnly?: boolean;
// }

// export class MinimoonHeader {
//   private readonly headers: Partial<Record<HeaderName, string>> = {};

//   add(name: HeaderName, value: string, options: Options = {}) {
//     if (options.devOnly && process.env.NODE_ENV !== "development") return;
//     const curr = this.headers[name];
//     this.headers[name] = curr ? curr + value : value;
//   }

//   getHeader() {
//     return this.headers;
//   }
// }

// const myHeaders = new Headers();


export function makeHeaderss(headers: MinimoonHeaderProps) {
  return headers;
}


type ContentTypeValues = 'application/json' | 'text/plain' | 'application/javascript' | 'text/html' | 'application/xml'
// TODO: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
//  | 'image/*' | 'text/html' | 'application/xhtml+xml' | 'application/xml;q=0.9' | 'image/webp'
type AcceptValues = '*/*'

type HeaderKeysAndValues = {
  'Content-Type'?: ContentTypeValues
  Accept?: AcceptValues
  Authorization?: string
  'User-Agent'?: 'Minimoon/1.0.0'
}


type HeaderProps = Partial<HeaderKeysAndValues>

export class Header {
  private readonly headers: HeaderProps = {
    'Content-Type': 'text/plain',
    "User-Agent": 'Minimoon/1.0.0',
    Accept: '*/*'
  };
  
  add<K extends keyof HeaderKeysAndValues, V extends HeaderKeysAndValues[K]>(key: K, value: V) {
    this.headers[key] = value;
  }

  getAllHeaders() {
    return this.headers;
  }
}

// const h= new Header();
// h.add('User-Agent', 'Minimoon/1.0.0')