import React from "react";
import "./Footer.scss";
import facebook from "../../assets/images/icons/facebook.png";
import twitter from "../../assets/images/icons/twitter.png";
import instagram from "../../assets/images/icons/instagram.png";
import "../../styles/global.scss";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__sideone">
        <h1 className="footer__title">KAMELEON</h1>
        <p className="footer__description">
          Immerse yourself in a world of endless entertainment with Kameleon. Let your mood be the
          guide as you explore a world of content tailored just for you. Elevate your streaming
          experience with us!
        </p>
        <img className="footer__logo" src={facebook} alt="Logo" />
        <img className="footer__logo" src={instagram} alt="Logo" />
        <img className="footer__logo" src={twitter} alt="Logo" />
      </div>
      <div className="footer__sidetwo">
        <div className="footer__links">
          <h2 className="footer-newsletter-header">Join Our Newsletter</h2>
          <ul>
            <li className="footer-link">HOME</li>
            <li className="footer-link">ABOUT</li>
            <li className="footer-link">BLOG</li>
            <li className="footer-link">CONTACT US</li>
          </ul>
        </div>
        <div className="footer__subscribe">
          <input className="footer__email-button" placeholder="Enter your email!"></input>
          <ul>
            <li className="footer-link">PRIVACY</li>
            <li className="footer-link">COOKIES</li>
            <li className="footer-link">TERMS</li>
            <li className="footer-link">COPYRIGHT KAMELEON 2023</li>
          </ul>
        </div>
        <button className="footer__subscribe-button">Subscribe</button>
      </div>
    </section>
  );
};
