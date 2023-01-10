import http from "http";

import { MinimoonRequestProps } from "../interfaces/RequestProps";
import { MinimoonResponseProps } from "../interfaces/ResponseProps";
import { MinimoonServerProps } from "../interfaces/ServerProps";
import { mountHandlers } from "./mountHandlers";

export function makeServer(configs: MinimoonServerProps) {
  console.log(`\x1b[33m server running in port ${configs.port} \x1b[0m`);
  const __HEADERS__ = configs.headers;

  return http
    .createServer((req: MinimoonRequestProps, res: MinimoonResponseProps) => {
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
      mountHandlers({
        handlers: configs.handlers,
        request: req,
        response: res
      })

    })
    .listen(configs.port);
}
