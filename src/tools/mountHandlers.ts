// import url from "url";
// import { MinimoonHandlerProps } from "../interfaces/HandlerProps";
// import { IncomingMessage, ServerResponse } from "http";

// export function mountHandlers(handlers: MinimoonHandlerProps[]) {
//   // const { sendData } = makeResponse();

//   // const tmpHandler = {
//   //   request: props.request,
//   //   response: props.response,
//   // } as MakeHandlerProps;

//   // const requestedUrl = url.parse(tmpHandler.request.url!).pathname;
//   // const requestedMethod = tmpHandler.request.method;
//   // const contentType = tmpHandler.response.getHeader("Content-Type") as never;

//   // for (const route in props.handlers) {
//   //   if (requestedUrl === props.handlers[route].path) {
//   //     if (requestedMethod === props.handlers[route].method) {
//   //       const data = props.handlers[route].handler; // handle
//   //       return sendData({
//   //         data: data,
//   //         previousResponse: tmpHandler.response,
//   //         statusCode: props.handlers[route].statusCode,
//   //         type: contentType,
//   //       });
//   //     } else {
//   //       tmpHandler.response.writeHead(405, "Method Not Allowed");
//   //     }
//   //   } else {
//   //     tmpHandler.response.writeHead(404, "Path Nout Found");
//   //     tmpHandler.response.write(HttpStatus.OK.message);
//   //   }
//   // }

//   // tmpHandler.response.end();

//   return (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     const requestedUrl = url.parse(req.url!).pathname;
//     const requestedMethod = req.method;

//     for (const handle of handlers) {
//       if(handle.path !== requestedUrl) continue
//       if(handle.method !== requestedMethod) continue

//       return {
//         ...res,
//         body: handle.handler(req, res),
//         closeConnection: true
//       }
//     }

//     return {
//       ...res,
//       statusCode: 404
//     }
//   }
// }
