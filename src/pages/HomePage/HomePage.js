import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Moviemoodhome } from "../../components/Moviemoodhome/Moviemoodhome.js";
import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/footer/Footer";

export const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Moviemoodhome />
      <Footer />
    </div>
  );
};
