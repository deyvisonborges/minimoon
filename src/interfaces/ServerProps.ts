import { MinimoonHeaderProps } from "./HeaderProps";
import { MinimoonHandlerProps } from "./HandlerProps";

export type MinimoonServerProps = {
  port: number;
  handlers: MinimoonHandlerProps[];
  headers: MinimoonHeaderProps;
  statusCode: number
};