import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="content-container">
        <Header />
        <div className="content"> {children} </div>
      </div>
        <Footer />
    </>
  );
};

export default Layout;
