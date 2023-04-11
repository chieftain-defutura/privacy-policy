import React from "react";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="mx">
        <div className="footer-head">
          <h4>Sprin Verse</h4>
          <div className="footer-content">
            <a href="/">Home</a>
            <a href="/">Privacy Policy</a>
          </div>
          <div className="footer-media">
            <Instagram />
            <Facebook />
            <Twitter />
            <Youtube />
          </div>
          <div className="copy-right">
            <div className="border"></div>
            <p>Copyright © 2022 Sprin Verse All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
