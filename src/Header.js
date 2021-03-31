import React from "react";

const Header = ({ user }) => (
  <header>
    <a href="#">home</a> Hello, {user.name}!
  </header>
);

export default Header;
