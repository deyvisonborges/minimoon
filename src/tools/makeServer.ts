import http from "http";
import url from "url";

import { MinimoonRequestProps } from "../interfaces/RequestProps";
import { MinimoonResponseProps } from "../interfaces/ResponseProps";
import { MinimoonServerProps } from "../interfaces/ServerProps";

export function makeServer(server: MinimoonServerProps) {
  console.log(`\x1b[33m server running in port ${server.port} \x1b[0m`);
  const __HEADERS__ =  server.headers
  const __ROUTES__ = server.routes

  return http
    .createServer((req: MinimoonRequestProps, res: MinimoonResponseProps) => {
      const requestedUrl = url.parse(req.url!).pathname;
      const requestedMethod = req.method;

      /**
       * Headers definitions
       */
      // if (server.headers) {
      //   for (const header, key in server.headers) {
      //     res.setHeader(
      //       server.headers,
      //       server.headers[header].mime
      //     );
      //   }
      // } else {
      // }
      
      // if(__HEADERS__.length > 0) {
              
      // } else {
      //   res.setHeader("Content-Type", "text/plain");
      // }


      /**
       * Handlers definitions
       */
      for (const route in __ROUTES__) {
        if (requestedUrl === __ROUTES__[route].path) { // rota
          if (requestedMethod === __ROUTES__[route].method) { // metodo http da rota
            const result = __ROUTES__[route].handler(); // handler
            if (result instanceof Promise) {
              result.then(result => result !== null && result !== undefined ? res.write(result) : undefined);
            } else if (result !== null && result !== undefined) {
              res.write(JSON.stringify(result));
            }
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
