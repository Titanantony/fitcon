import React from "react";

const Header = ({ title }) => {
  return (
    <header className="text-center mb-4">
      <h1 className="display-6 fw-bold">{title}</h1>
    </header>
  );
};

export default Header;
