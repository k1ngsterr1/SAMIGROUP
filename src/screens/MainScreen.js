import React from "react";
import Header from "../components/Header";

import styles from "../styles/main_screen/main_styles.css";
import Fade from "react-reveal/Fade";
import { HashLink as Link } from "react-router-hash-link";

const MainScreen = () => {
  return (
    <div className="main-container" id="main">
      <Header></Header>
      <div className="gradient"></div>
      <div className="wrapper">
        <Fade left>
          <div className="main-page">
            <h1 className="heading">
              Ваш представитель в Павлодарской Области
            </h1>
            <p className="main-paragraph">
              «SAMI GROUP» – группа специалистов, готовая помочь в поиске
              решений по вопросам экспорта зерновых и масличных культур.
            </p>
            <Link className="main-button" smooth={true} to="#contacts">
              Связаться с нами
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default MainScreen;
