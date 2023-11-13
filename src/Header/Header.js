import React from "react";
import "./HeaderStyle.css";
import logo from "../Logo/iconmonstr-airport-19-240.png";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="logo"></img>
      </header>
    </>
  );
}

export default Header;
