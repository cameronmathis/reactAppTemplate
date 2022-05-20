import { HOME, PAGE_NOT_FOUND } from "./Pages";

export interface MenuItem {
  text: string;
  path: string;
}

const Home: MenuItem = {
  text: "Home",
  path: HOME.path,
};

const Other: MenuItem = {
  text: "Other",
  path: PAGE_NOT_FOUND.path,
};

export const MENU_ITEMS: MenuItem[] = [Home, Other];
