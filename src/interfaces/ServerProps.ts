import { MinimoonHeaderProps } from "./HeaderProps";
import { MinimoonRouteProps } from "./HandlerProps";

export type MinimoonServerProps = {
  port: number;
  routes: MinimoonRouteProps[];
  headers: MinimoonHeaderProps
};