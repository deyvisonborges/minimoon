import { ReadStream } from "fs";
import { MinimoonRequestProps } from "./RequestProps";
import { MinimoonResponseProps } from "./ResponseProps";

import { HttpMethodProps } from "../../modules/http/HttpMethodProps";

export type HandlerProps = {
  path: string;
  method: HttpMethodProps;
  handler: (
    req: MinimoonRequestProps,
    res: MinimoonResponseProps
  ) => string | object | ReadStream;
  params?: string[];
  security?: {
    enableDefaultFilters?: true;
  };
};
