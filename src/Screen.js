import React from "react";
import Header from "./Header";

const Screen = ({ user }) => (
  <div>
    <Header user={user} />
    <h1>First Screen</h1>
  </div>
);

export default Screen;
