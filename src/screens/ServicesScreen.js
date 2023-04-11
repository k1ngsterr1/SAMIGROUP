import React from "react";

import styles from "../styles/services_screen/services_styles.css";
import LeftWheat from "../assets/WheatLeft.svg";
import RightWheat from "../assets/WheatRight.svg";

import UsersIcon from "../assets/Users-Icon.svg";
import SearchIcon from "../assets/Search-Icon.svg";
import ComplexIcon from "../assets/Complex-Icon.svg";
import Popup from "reactjs-popup";

import Fade from "react-reveal/Fade";

const ServicesScreen = () => {
  return (
    <div className="services-container" id="services">
      <div className="services-wrapper">
        <div className="services-heading">
          <img src={LeftWheat} className="left-wheat"></img>
          <h2 className="service-heading">Услуги</h2>
          <img src={RightWheat} className="right-wheat"></img>
        </div>
        <Fade bottom>
          <div className="cards-container">
            <div className="card-1">
              <img className="users-icon" src={UsersIcon} alt="user-icon"></img>
              <h4 className="card-heading">Сопровождение</h4>
              <p className="card-p">
                Официально представляем интересы Вашей компании, избавляя от
                необходимости личного участия в рабочих процессах. Мы готовы
                взять на себя координацию вопросов по: таможенному оформлению,
                получению паспортов качества, деклараций о соответствии,
                санитарных сертификатов (и т.д.). А также по контролю сроков.
              </p>
              <p className="price">1000₸ / тонна</p>
            </div>
            <div className="card-2">
              <img
                className="users-icon"
                src={SearchIcon}
                alt="search-icon"
              ></img>
              <h4 className="card-heading">Поиск</h4>
              <p className="card-p">
                За 4 года активной работы мы наладили отношения с сотнями
                фермерских хозяйств, экспортировав более 400 000 тонн пшеницы.
                Мы поможем найти сельскохозяйственную продукцию в нужном объеме
                и по выгодным ценам, обсудив детали сделки с поставщиками и
                выступив Вашим представителем в Павлодарской области.
              </p>
              <p className="price">2000₸ / тонна</p>
            </div>
            <div className="card-3">
              <img
                className="users-icon"
                src={ComplexIcon}
                alt="complex-icon"
              ></img>
              <h4 className="card-heading">Комплекс</h4>
              <p className="card-p">
                Комплексная услуга по поиску, а также юридическому,
                логистическому сопровождению контрактных отношений с оформлением
                и предоставлением (по электронной почте и другими способами)
                клиенту необходимых документов (счетов на оплату, ж/д накладных,
                таможенных деклараций и т.д.) для экспорта грузов в короткие
                сроки.
              </p>
              <p className="price">2500₸ / тонна</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ServicesScreen;
