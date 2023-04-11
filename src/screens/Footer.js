import React from "react";

import styles from "../styles/footer/footer_styles.css";
import Logo from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <Link to="#main" smooth={true}>
          <img className="logo" src={Logo}></img>
        </Link>
        <nav className="footer-nav">
          <Link to="#about" smooth={true} className="footer-about-company">
            О компании
          </Link>
          <Link to="#services" smooth={true} className="footer-services">
            Услуги
          </Link>
          <Link to="#contacts" smooth={true} className="footer-contacts">
            Контакты
          </Link>
          {/* <button className="footer-button">Связаться с нами</button> */}
        </nav>
      </div>
      <div className="footer-separator"></div>
      <div className="down-footer">
        {/* <button className="contact-with-us-mob">Связаться с нами</button> */}
        <span className="sami-group">SAMI GROUP © 2022-2023</span>
        <div className="contact-buttons"></div>
        <span className="sami-group-mob">SAMI GROUP © 2022-2023</span>
      </div>
    </footer>
  );
};

export default Footer;
