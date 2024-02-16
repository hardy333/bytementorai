import React from "react";
import Navbar2 from "./Navbar2";

const ProtectedLayout = ({ children }) => {
  return (
    <>
      <Navbar2 />
      {children}
    </>
  );
};

export default ProtectedLayout;
