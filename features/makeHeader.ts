// TODO: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers
type HeaderName = "Content-Type";

interface Options {
  devOnly?: boolean;
}

export class MinimoonHeader {
  private readonly headers: Partial<Record<HeaderName, string>> = {};

  add(name: HeaderName, value: string, options: Options = {}) {
    if (options.devOnly && process.env.NODE_ENV !== "development") return;
    const curr = this.headers[name];
    this.headers[name] = curr ? curr + value : value;
  }

  getHeader() {
    return this.headers;
  }
}


const myHeaders = new Headers();