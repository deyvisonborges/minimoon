type ContentTypeValues =
| "application/json"
| "application/pdf"
| "audio/mpeg"
| "audio/vorbis"
| "font/woff"
| "font/ttf"
| "font/otf"
| "image/apng"
| "image/avif"
| "image/gif"
| "image/jpeg"
| "image/png"
| "image/svg+xml"
| "image/webp"
| "text/plain"
| "text/csv"
| "text/html"
| "text-css"
| "multipart/form-data"
| "multipart/byteranges"
| "message/rfc822"
| "message/partial";

// TODO: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
//  | 'image/*' | 'text/html' | 'application/xhtml+xml' | 'application/xml;q=0.9' | 'image/webp'
type AcceptValues = "*/*";

type HeaderKeysAndValues = {
  "Content-Type"?: ContentTypeValues;
  Accept?: AcceptValues;
  Authorization?: string;
  "User-Agent"?: "Minimoon/1.0.0";
};

export type MinimoonHeaderProps = Partial<HeaderKeysAndValues>;