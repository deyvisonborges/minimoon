import { MinimoonRequestProps } from "./RequestProps";
import { MinimoonResponseProps } from "./ResponseProps";

export type MinimoonRouteProps = {
  controller: (
    req?: MinimoonRequestProps,
    res?: MinimoonResponseProps
  ) => string | number | string[] | number[] | Record<any, any>;
  method: "GET" | "POST" | "PATCH" | "UPDATE" | "DELETE";
  path: string;
  params?: string[];
};
