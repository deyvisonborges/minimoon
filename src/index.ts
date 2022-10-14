import { makeRouter } from "./tools/makeRouter";
import { makeServer } from "./tools/makeServer";

export const Minimoon = {
  makeRouter,
  makeServer,
} as const;
