import React from "react";
import "./Hero.scss";
import image from "../../assets/images/image.png";
import "../../styles/global.scss";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__text--title">Find something to watch before your food gets cold.</h1>
          <h4>Streaming recommendations catered to you in a convenient way.</h4>
        </div>
        <div className="hero__image">
          <img className="hero__image--image" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
