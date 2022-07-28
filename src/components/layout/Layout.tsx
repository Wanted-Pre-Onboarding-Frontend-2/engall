import React from "react";
import { LayoutProps } from "../../types/types";
import Header from "./Header";
import "../../style/layout.scss";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="wrap">{children}</div>
    </>
  );
};

export default Layout;
