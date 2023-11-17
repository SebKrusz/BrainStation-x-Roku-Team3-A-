import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/footer/Footer";

export const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
};
