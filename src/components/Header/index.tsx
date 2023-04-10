import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <div className="mx">
      <div className="header">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/privacy-policy">
          <h2>Privacy Policy</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
