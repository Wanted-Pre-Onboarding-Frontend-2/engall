import React from "react";
import { ReactComponent as Logo } from "../../static/image/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
    </>
  );
};

export default Header;


