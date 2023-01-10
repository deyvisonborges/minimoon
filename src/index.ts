import { makeHandlers } from './tools/makeHandlers'
import { makeServer } from "./tools/makeServer";

export const Minimoon = {
  makeHandlers,
  makeServer,
} as const;
