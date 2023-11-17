import React from "react";
import { Heroresult } from "../../components/Heroresult/Heroresult";
import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/footer/Footer";

export const HomePage = () => {
  return (
    <div>
      <Nav />
      <Heroresult />
      <Footer />
    </div>
  );
};
