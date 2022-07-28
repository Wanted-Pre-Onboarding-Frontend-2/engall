import React from "react";
import { LayoutProps } from "../../types/types";

const Layout = ({ children }: LayoutProps) => {
  return <div className="wrap">{children}</div>;
};

export default Layout;
