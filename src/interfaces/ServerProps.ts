import { MinimoonHeaderProps } from "./HeaderProps";
import { HandlerProps } from "./HandlerProps";

export type MinimoonServerProps = {
  port: number;
  headers: MinimoonHeaderProps;
  handlers: HandlerProps[];
  security?: {
    enableDefaultFilters?: boolean
  }
};