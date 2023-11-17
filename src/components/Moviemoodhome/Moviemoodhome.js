import React from "react";
import { Link } from "react-router-dom";
import "./Moviemoodhome.scss";
import movie1 from "../../assets/images/action/dieHard.jpg";
import movie2 from "../../assets/images/action/inception.jpg";
import movie3 from "../../assets/images/action/madmax.jpg";
import movie4 from "../../assets/images/action/thedarkknight.jpg";
import movie5 from "../../assets/images/action-thriller/bourneIdentity.jpg";
import movie6 from "../../assets/images/action-thriller/johnwick.jpg";
import movie7 from "../../assets/images/action-thriller/killbill.jpg";

export const Moviemoodhome = () => {
  return (
    <div className="moviemood-home-container">
      <h3 className="title">
        Say goodbye to endless scrolling and hello to personalized movie magic
      </h3>
      <p className="description">
        Our unique assessment is your passport to a tailored movie experience. By understanding your
        current vibe, we handpick a selection of films perfectly aligned with your mood.
      </p>
      <Link to="/genre/Action" className="button-link">
        <button className="find-movie-button">FIND A MOVIE TO WATCH</button>
      </Link>
      <div className="image-gallary">
        <img src={movie1} className="movieposter"></img>
        <img src={movie2} className="movieposter"></img>
        <img src={movie3} className="movieposter"></img>
        <img src={movie4} className="movieposter-spec"></img>
        <img src={movie5} className="movieposter"></img>
        <img src={movie6} className="movieposter"></img>
        <img src={movie7} className="movieposter"></img>
      </div>
      <p className="note">
        People spend an average of 7.4 minutes deciding what to watch. We’ll make it easier for you.
      </p>
    </div>
  );
};
