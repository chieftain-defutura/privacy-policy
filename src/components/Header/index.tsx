import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const Header: React.FC = () => {
  const [active, setActive] = useState(0);
  const [activeColor, setActiveColor] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="mx">
      <div className="header">
        <div className="menu-bar" onClick={() => setOpen(true)}>
          <Menu />
        </div>
        <div className="link" onClick={() => setActive(0)}>
          <Link to="/">
            <h2 className={active === 0 ? "active-color" : "color"}>Home</h2>
          </Link>
        </div>
        <div className="link" onClick={() => setActive(1)}>
          <Link to="/privacy-policy">
            <h2
              onClick={() => setActiveColor(!activeColor)}
              className={active === 1 ? "active-color" : "color"}
            >
              Privacy Policy
            </h2>
          </Link>
        </div>
        {open && (
          <div className="side-bar">
            <div className="logo">
              <h1>SV</h1>
            </div>
            <div className="side-link" onClick={() => setActive(0)}>
              <Link to="/">
                <h2
                  className={active === 0 ? "active-color" : "color"}
                  onClick={() => setOpen(false)}
                >
                  Home
                </h2>
              </Link>
            </div>
            <div className="side-link" onClick={() => setActive(1)}>
              <Link to="/privacy-policy" onClick={() => setOpen(false)}>
                <h2
                  onClick={() => setActiveColor(!activeColor)}
                  className={active === 1 ? "active-color" : "color"}
                >
                  Privacy Policy
                </h2>
              </Link>
            </div>
            <div className="close" onClick={() => setOpen(false)}>
              <Close />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
