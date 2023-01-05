import http from "http";
import url from "url";

import { MinimoonRequestProps } from "../interfaces/RequestProps";
import { MinimoonResponseProps } from "../interfaces/ResponseProps";
import { MinimoonServerProps } from "../interfaces/ServerProps";

export function makeServer(server: MinimoonServerProps) {
  console.log(`\x1b[33m server running in port ${server.port} \x1b[0m`);

  return http
    .createServer((req: MinimoonRequestProps, res: MinimoonResponseProps) => {
      const requestedUrl = url.parse(req.url!).pathname;
      const requestedMethod = req.method;

      if (server.headers) {
        for (const header in server.headers) {
          res.setHeader(
            server.headers[header].name,
            server.headers[header].mime
          );
        }
      } else {
        res.setHeader("Content-Type", "text/plain");
      }

      for (const route in server.routes) {
        if (requestedUrl === server.routes[route].path) { // rota
          if (requestedMethod === server.routes[route].method) { // metodo http da rota
            const result = server.routes[route].controller(); // controller
            console.log(res.getHeaderNames)
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
