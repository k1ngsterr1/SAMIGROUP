import React from "react";

import styles from "../styles/navlinks/navlinks_styles.css";
import { HashLink as Link } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <nav className="mobile-nav-links">
      <Link to="#about" className="about-mob-link" id="about-n" smooth={true}>
        О компании
      </Link>
      <Link
        to="#services"
        className="services-mob-link"
        id="services-n"
        smooth={true}
      >
        Услуги
      </Link>
      <Link
        to="#contacts"
        className="contacts-mob-link"
        id="contacts-n"
        smooth={true}
      >
        Контакты
      </Link>
    </nav>
  );
};

export default NavLinks;
