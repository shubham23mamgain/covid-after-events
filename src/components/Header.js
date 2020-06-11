import React from "react";

const Header = ({ styleClass, children, title }) => {
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items-center ${styleClass}`}>
          <div className="col text-center">
            <h1 className="text-light diplay-3 letter-spacing text-slanted text-uppercase">
              {" "}
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.defaultProps = {
  title: "Search",
  styleClass: "header-hero",
};
