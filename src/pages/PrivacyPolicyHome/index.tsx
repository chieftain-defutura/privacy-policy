import React from "react";
import PrivacyPolicy from "../PrivacyPolicy";

import "./PrivacyPolicyHome.scss";
import HalfbgImg from "../../assets/images/half-background-image.png";

const PrivacyPolicyHome: React.FC = () => {
  return (
    <>
      <div>
        <div className="privacy-policy-home-wrapper">
          <div className="privacy-arror-img">
            <div className="privacy-dark-background"></div>

            <div className="half-animate-img">
              <div className="content">
                <h1>Privacy Policy</h1>
              </div>
              <div className="image">
                <img src={HalfbgImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyHome;
