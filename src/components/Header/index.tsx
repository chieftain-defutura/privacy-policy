import React, { useState } from "react";
import { Link } from "react-router-dom";
import SprinVerse from "../../assets/images/Sprin Verse.png";
import "./Header.scss";

const Header: React.FC = () => {
  const [active, setActive] = useState(0);
  const [activeColor, setActiveColor] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={SprinVerse} alt="" />
        </div>

        <div className="nav">
          <div className="" onClick={() => setActive(0)}>
            <Link to="/">
              <h2 className={active === 0 ? "active-color" : "color"}>Home</h2>
            </Link>
          </div>
          <div className="" onClick={() => setActive(1)}>
            <Link to="/privacy-policy">
              <h2
                onClick={() => setActiveColor(!activeColor)}
                className={active === 1 ? "active-color" : "color"}
              >
                Privacy Policy
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
