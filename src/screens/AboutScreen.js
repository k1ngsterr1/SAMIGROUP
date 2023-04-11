import React from "react";

import styles from "../styles/about_screen/about_styles.css";

import Triangles from "../assets/Triangles.svg";
import { HashLink as Link } from "react-router-hash-link";

import Arrow from "../assets/arrow.svg";
import SideWheat from "../assets/side_wheat.svg";
import Fade from "react-reveal/Fade";

const AboutScreen = () => {
  return (
    <div className="about-container" id="about">
      <Fade bottom>
        <div className="wrapper-about">
          <div className="about-text-container">
            <h2 className="about-heading">О Компании</h2>
            <p className="about-text">
              «SAMI GROUP» – группа специалистов, готовая помочь в поиске
              решений по вопросам экспорта зерновых и масличных культур. За годы
              работы мы собрали базу местных фермерских хозяйств, открытых для
              сотрудничества в данном направлении. У нас нет проблем с
              организацией как небольших, так и крупных поставок, в том числе
              требующих одновременного взаимодействия с несколькими компаниями
              (для формирования нужного объема и ассортимента).
            </p>
            <Link className="contact-us-button" smooth={true} to="#contacts">
              Связаться с нами
            </Link>
            <img className="arrow" src={Arrow}></img>
          </div>
          <img className="side-wheat" src={SideWheat} alt="side-wheat"></img>
          <img
            className="side-wheat-2"
            src={SideWheat}
            alt="side-wheat-2"
          ></img>
          <img
            className="blue-triangle"
            src={Triangles}
            alt="blue-triangle"
          ></img>
        </div>
      </Fade>
    </div>
  );
};

export default AboutScreen;
