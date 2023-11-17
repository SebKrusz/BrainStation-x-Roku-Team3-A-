import React from "react";
import "./Nav.scss";
import "../../styles/global.scss";

export const Nav = () => {
  return (
    <nav class="menu">
      <p className="nav-link-logo">KAMELEON</p>
      <ul class="nav-list">
        <li class="nav-list__item nav-list__item--no-mobile">
          <a class="nav-link" href="#info">
            ABOUT
          </a>
        </li>
        <li class="nav-list__item nav-list__item--no-mobile">
          <a class="nav-link" href="#recipes">
            BLOG
          </a>
        </li>
        <li class="nav-list__item nav-list__item--no-mobile">
          <a class="nav-link" href="#testimonials">
            CONTACT
          </a>
        </li>
      </ul>
      <button className="nav__button">GET THE APP</button>
    </nav>
  );
};
