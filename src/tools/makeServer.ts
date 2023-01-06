import http from "http";
import url from "url";

import { MinimoonRequestProps } from "../interfaces/RequestProps";
import { MinimoonResponseProps } from "../interfaces/ResponseProps";
import { MinimoonServerProps } from "../interfaces/ServerProps";

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

      console.log(res.getHeaders())

      /**
       * Handlers definitions
       */

      for (const route in server.routes) {
        if (requestedUrl === server.routes[route].path) {
          if (requestedMethod === server.routes[route].method) {
            const result = server.routes[route].handler();

            console.log(result)
            res.write(JSON.stringify(result));
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
