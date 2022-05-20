import GitHubIcon from "@mui/icons-material/GitHub";
import React, { ReactElement } from "react";

export interface FooterItem {
  name: string;
  link: string;
  icon: ReactElement;
}

const GITHUB: FooterItem = {
  name: "GitHub",
  link: "https://github.com/cameronmathis/ReactAppTemplate",
  icon: <GitHubIcon fontSize="large" />,
};

export const FOOTER_ITEMS: FooterItem[] = [GITHUB];
