import React from "react";
import "./PrivacyPolicyHome.scss";
import HalfbgImg from "../../assets/images/half-background-image.png";
import Header from "../../components/Header";
import Amazon from "../../assets/images/amazon.png";
import Appstore from "../../assets/images/appstore.png";
import Google from "../../assets/images/googlestore.png";
import PrivacyPolicy from "../PrivacyPolicy";

const PrivacyPolicyHome: React.FC = () => {
  return (
    <>
      <div>
        <div className="privacy-policy-home-wrapper">
          <Header />
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

            <div className="app">
              <img src={Appstore} alt="" />
              <img src={Google} alt="" />
              <img src={Amazon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyHome;
