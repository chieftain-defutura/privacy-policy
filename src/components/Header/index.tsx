import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState(0);
  const [activeColor, setActiveColor] = useState(false);
  return (
    <div className="mx">
      <div className="header">
        <div className="" onClick={() => setActive(0)}>
          <Link to="/">
            <h2 style={{ color: active === 0 ? "#02D4F8" : "#777777" }}>
              Home
            </h2>
          </Link>
        </div>
        <div className="" onClick={() => setActive(1)}>
          <Link to="/privacy-policy">
            <h2
              onClick={() => setActiveColor(!activeColor)}
              style={{ color: active === 1 ? "#02D4F8" : "#777777" }}
            >
              Privacy Policy
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
