import React from "react";
import UserSelect from "./UserSelect";
import "../styles/panels.css";

const Header = ({ login }) => {
  return (
    <header>
      <h1>
        <b>N</b>orthcoders <b>N</b>ews
      </h1>
      <UserSelect login={login} />
    </header>
  );
};

export default Header;
