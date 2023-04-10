import React from "react";
import "./Home.scss";
import Arrow from "../../assets/images/arrow-background.png";
import Header from "../../components/Header";
const Home: React.FC = () => {
  return (
    <div className="mx">
      <div className="home">
        <Header />
        <div className="arrow-image">
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
