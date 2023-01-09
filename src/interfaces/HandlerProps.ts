import { ReadStream } from "fs";
import { MinimoonRequestProps } from "./RequestProps";
import { MinimoonResponseProps } from "./ResponseProps";

export type MinimoonRouteProps = {
  path: string;
  method: "GET" | "POST" | "PATCH" | "UPDATE" | "DELETE";
  handler: (
    req?: MinimoonRequestProps,
    res?: MinimoonResponseProps
  ) => string | object | ReadStream;
  params?: string[];
};
