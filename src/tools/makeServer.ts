import url from "url";
import http, { IncomingMessage, ServerResponse } from "http";

import { MinimoonServerProps } from "../interfaces/ServerProps";
import { MakeResponseData, makeResponse } from "./makeResponse";
import { HttpStatus } from "../../modules/http/httpStatus";

export function makeServer(configs: MinimoonServerProps) {
  console.log(`\x1b[33m server running in port ${configs.port} \x1b[0m`);
  const __HEADERS__ = configs.headers;

  return http
    .createServer(
      async (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
        const handlers = configs.handlers;
        const requestedUrl = url.parse(req.url!).pathname;
        const requestedMethod = req.method;

        /**
         * Headers definitions
         */
        if (configs.headers) {
          Object.entries(__HEADERS__).map(([key, value]) =>
            res.setHeader(key, value)
          );
        } else {
          res.setHeader("Content-Type", "text/plain");
        }

        /**
         * Construct handlers
         */
        let responseData: MakeResponseData = {} as MakeResponseData;

        for (const requestedHandle of handlers) {
          if (requestedHandle.path !== requestedUrl) {
            res.writeHead(404, "Path Nout Found");
            res.write("Path Not Found");
            break;
          }

          if (requestedHandle.method !== requestedMethod) {
            res.writeHead(405, "Method Not Allowed");
            res.write("Method Not Allowed");
            break;
          }

          if (
            requestedHandle.path === requestedUrl &&
            requestedHandle.method === requestedMethod
          ) {
            responseData = makeResponse({
              data: requestedHandle.handler(req, res),
            });
            break;
          }
          continue;
        }

        if (!responseData.data) {
          res.writeHead(
            HttpStatus.NO_CONTENT.statusCode,
            HttpStatus.NO_CONTENT.message
          );
          res.write(HttpStatus.NO_CONTENT.message);
        }

        res.end();
      }
    )
    .listen(configs.port);
}
