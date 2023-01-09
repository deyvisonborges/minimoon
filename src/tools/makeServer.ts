import http from "http";
import url from "url";

import { MinimoonRequestProps } from "../interfaces/RequestProps";
import { MinimoonResponseProps } from "../interfaces/ResponseProps";
import { MinimoonServerProps } from "../interfaces/ServerProps";
import { makeResponse } from "./makeResponse";
import { MimeTypeProps } from "../interfaces/MimeTypeProps";

export function makeServer(server: MinimoonServerProps) {
  console.log(`\x1b[33m server running in port ${server.port} \x1b[0m`);
  
  const __HEADERS__ = server.headers;
  const __ROUTES__ = server.routes;

  return http
    .createServer((req: MinimoonRequestProps, res: MinimoonResponseProps) => {
      const requestedUrl = url.parse(req.url!).pathname;
      const requestedMethod = req.method;

      /**
       * Headers definitions
       */
      if (server.headers) {
        Object.entries(__HEADERS__).map(([key, value]) =>
          res.setHeader(key, value)
        );
      } else {
        res.setHeader("Content-Type", "text/plain");
      }


      const contentType = res.getHeader('Content-Type') as MimeTypeProps
      console.log(contentType)

      /**
       * Handlers definitions
       */
      for (const route in server.routes) {
        if (requestedUrl === server.routes[route].path) { // rota
          if (requestedMethod === server.routes[route].method) { // metodo http
            const data = server.routes[route].handler(); // handle

            return makeResponse({
              data: data,
              previousResponse: res,
              statusCode: server.statusCode,
              type: contentType
            })
          } else {
            res.writeHead(405, "Method Not Allowed");
          }
        } else {
          res.writeHead(404, "Path Nout Found");
          res.write("Path Not Found");
        }
      }
      res.end();
    })
    .listen(server.port);
}
