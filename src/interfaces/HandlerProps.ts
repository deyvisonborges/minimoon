import { ReadStream } from "fs";
import { MinimoonRequestProps } from "./RequestProps";
import { MinimoonResponseProps } from "./ResponseProps";

export type MinimoonHandlerProps = {
  path: string;
  method: "GET" | "POST" | "PATCH" | "UPDATE" | "DELETE";
  handler: (
    req?: MinimoonRequestProps,
    res?: MinimoonResponseProps
  ) => string | object | ReadStream;
  statusCode: number
  params?: string[];
};
