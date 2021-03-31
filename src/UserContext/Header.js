import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="#">home</a> Hello, {name}, you are{" "}
      {loggedIn ? "logged in" : "anonymous"}!
    </header>
  );
};

export default Header;
