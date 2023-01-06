import { MinimoonRequestProps } from "./RequestProps";
import { MinimoonResponseProps } from "./ResponseProps";

export type MinimoonRouteProps = {
  path: string;
  method: "GET" | "POST" | "PATCH" | "UPDATE" | "DELETE";
  handler: <T>(req?: MinimoonRequestProps, res?: MinimoonResponseProps) => T;
  params?: string[];
};
