import { MinimoonHandlerProps } from "../interfaces/HandlerProps";
import { makeResponse } from "./makeResponse";

export function makeHandlers(handlers: MinimoonHandlerProps[]) {
  return handlers;
}

// const handlers = makeHandlers([
//   {
//     path: '/',
//     method: 'GET',
//     handler: (req, res) => {
//       return makeResponse({
//         data: 'passei no handle e fiz um get',
//         previousResponse: res,
//         statusCode: 200,
//       })
//     },
//   }
// ])