import { MinimoonHeaderProps } from "./HeaderProps";
import { MinimoonRouteProps } from "./RouteProps";

export type MinimoonServerProps = {
  port: number;
  routes: MinimoonRouteProps[];
  headers: MinimoonHeaderProps[]
};