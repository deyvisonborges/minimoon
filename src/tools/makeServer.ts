import http from "http";
import url from "url";

import { MinimoonRequestProps } from "../interfaces/RequestProps";
import { MinimoonResponseProps } from "../interfaces/ResponseProps";
import { MinimoonServerProps } from "../interfaces/ServerProps";

export function makeServer(server: MinimoonServerProps) {
  console.log(`\x1b[33m server running in port ${server.port} \x1b[0m`);
  
  return http
    .createServer((req: MinimoonRequestProps, res: MinimoonResponseProps) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      const requestedUrl = url.parse(req.url!).pathname;

      server.routes.filter((route) => {
        if (requestedUrl === route.path) {
          if (req.method === route.method) {
            const result = route.controller();
            res.write(JSON.stringify(result));
          } else {
            res.write("method not allowed");
          }
          return;
        }
        res.write("not found route");
      });

      res.end();
    })
    .listen(server.port);
}
