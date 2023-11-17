import React from "react";
import { Link } from "react-router-dom";
import "./Moviemoodhome.scss";

export const Moviemoodhome = () => {
  return (
    <div>
      <h3>Say goodbye to endless scrolling and hello to personalized movie magic</h3>
      <p>
        Our unique assessment is your passport to a tailored movie experience. By understanding your
        current vibe, we handpick a selection of films perfectly aligned with your mood.
      </p>
      <Link to="/Moviemood">
        <button>FIND A MOVIE TO WATCH</button>
      </Link>
      <p>
        People spend an average on 7.4 minutes deciding what to watch. We’ll make it easier for you.
      </p>
    </div>
  );
};
