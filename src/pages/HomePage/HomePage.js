import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Moviemoodhome } from "../../components/Moviemoodhome/Moviemoodhome.js";

export const HomePage = () => {
  return (
    <div>
      <h1>This is our website</h1>
      <Hero />
      <Moviemoodhome />
    </div>
  );
};
