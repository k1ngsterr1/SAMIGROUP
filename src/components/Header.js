import React from "react";
import { useState } from "react";

import Logo from "../assets/Logo.svg";
import styles from "../styles/main_screen/main_styles.css";
import Popup from "reactjs-popup";
import MobileLogo from "../assets/Mobile_Logo.svg";
import NavLinks from "./NavLinks";

import { HamburgerArrow } from "react-animated-burgers";

import { HashLink as Link } from "react-router-hash-link";
// import { useState } from "react";

import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, Library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faXmark);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [send, setSent] = useState("send");
  const [sendText, setSentText] = useState("Отправить");
  const [form, setForm] = useState("popup-window");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");

  const hamburgerMenu = (
    <div className="burger-menu" onClick={() => setOpen(!open)}>
      <div className="burger-line-1"></div>
      <div className="burger-line-2"></div>
      <div className="burger-line-3"></div>
    </div>
  );

  const closeMenu = (
    <FontAwesomeIcon
      icon={"xmark"}
      className="x-mark"
      onClick={() => setOpen(!open)}
    ></FontAwesomeIcon>
  );

  function handleClick() {
    setSent("send");
    setForm("popup-window");
    setSentText("Отправить");
  }

  function sendEmail(e) {
    e.preventDefault();
    setSent("sended");
    setForm("popup-window-sent");
    setSentText("Заявка отправлена");
    setFullName("");
    setPhoneNumber("");
    setComment("");

    emailjs
      .sendForm(
        "service_jb31u8i",
        "template_y3kbiet",
        e.target,
        "ke9wKAPnWZhp6mCYT"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <header className="header">
      <nav className="navigation">
        <img className="logo" src={Logo} />
        <img className="mobile-logo" src={MobileLogo}></img>
        <div className="nav-links">
          <Link
            to="#about"
            className="nav-link about"
            id="about-n"
            smooth={true}
            onClick={() => setOpen(!open)}
          >
            О компании
          </Link>
          <Link
            to="#services"
            className="nav-link services"
            id="services-n"
            smooth={true}
            onClick={() => setOpen(!open)}
          >
            Услуги
          </Link>
          <Link
            to="#contacts"
            className="nav-link contacts"
            id="contacts-n"
            smooth={true}
            onClick={() => setOpen(!open)}
          >
            Контакты
          </Link>
          <Popup
            trigger={<button className="tender-button">Оставить заявку</button>}
          >
            <form className={form} onSubmit={sendEmail}>
              {" "}
              <input
                className="name-input"
                type="text"
                name="name"
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Введите ваше имя"
              ></input>
              <input
                className="phone-input"
                type="tel"
                name="phone"
                required
                placeholder="+7 (123) 456-78-90"
                minLength="10"
                maxLength="11"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                inputMode="numeric"
              ></input>
              <textarea
                className="comment-input"
                type="text"
                name="message"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Комментарий"
              ></textarea>
              <button onClick={handleClick} className={send} value="Send">
                {sendText}
              </button>
            </form>
          </Popup>
        </div>
        <div className="for-burger-menu">
          {open ? closeMenu : hamburgerMenu}
          {open && <NavLinks />}
        </div>
      </nav>
      <div className="separator"></div>
    </header>
  );
};

export default Header;
