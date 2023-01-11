import url from "url";
import { MinimoonHandlerProps } from "../interfaces/HandlerProps";
import { IncomingMessage, ServerResponse } from "http";
import { MIME_TYPES } from "../constants/mimeTypes";

export function mountHandlers(handlers: MinimoonHandlerProps[]) {
  // const { sendData } = makeResponse();

  // const tmpHandler = {
  //   request: props.request,
  //   response: props.response,
  // } as MakeHandlerProps;

  // const requestedUrl = url.parse(tmpHandler.request.url!).pathname;
  // const requestedMethod = tmpHandler.request.method;
  // const contentType = tmpHandler.response.getHeader("Content-Type") as never;

  // for (const route in props.handlers) {
  //   if (requestedUrl === props.handlers[route].path) {
  //     if (requestedMethod === props.handlers[route].method) {
  //       const data = props.handlers[route].handler; // handle
  //       return sendData({
  //         data: data,
  //         previousResponse: tmpHandler.response,
  //         statusCode: props.handlers[route].statusCode,
  //         type: contentType,
  //       });
  //     } else {
  //       tmpHandler.response.writeHead(405, "Method Not Allowed");
  //     }
  //   } else {
  //     tmpHandler.response.writeHead(404, "Path Nout Found");
  //     tmpHandler.response.write(HttpStatus.OK.message);
  //   }
  // }

  // tmpHandler.response.end();

  return (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    const requestedUrl = url.parse(req.url!).pathname;
    const requestedMethod = req.method;

    for (const handle of handlers) {
      if(handle.path !== requestedUrl) {
        res.writeHead(404, "Path Not Found")
        res.write("Path Not Found")
        return
      }

      if(handle.method !== requestedMethod) {
        res.writeHead(405, "Method Not Allowed")
        res.write("Method Not Allowed")
        return
      }

      const data = handle.handler(req, res)
      const tmpData = new Map();

      if (typeof data === "string") {
        tmpData.set("data", data)
        tmpData.set("type", MIME_TYPES.html);
      } else if (typeof data === "object") {
        tmpData.set("data", JSON.stringify(data))
        tmpData.set("type", MIME_TYPES.json);
      }
    
      res.writeHead(res.statusCode, "Successfully");
      res.write(tmpData.get("data"));
    }

    res.end()
  }
}
