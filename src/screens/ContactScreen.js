import React from "react";
import { useState } from "react";

import styles from "../styles/contact_screen/contact_styles.css";
import Mail from "../assets/MailIcon.svg";
import Geo from "../assets/Geo.svg";

import { HashLink as Link } from "react-router-hash-link";

import emailjs from "emailjs-com";

const ContactScreen = () => {
  const [open, setOpen] = useState(false);
  const [send, setSent] = useState("send");
  const [sendText, setSentText] = useState("Отправить");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const [form, setForm] = useState("contact-form");

  function handleClick() {
    setSent("send");
    setForm("contact-form");
    setSentText("Отправить");
  }

  function sendEmail(e) {
    e.preventDefault();
    setSent("sended");
    setForm("contact-form-sent");
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
    <div className="contact-container" id="contacts">
      <h2 className="contact-heading">Контакты</h2>
      <div className="contacts-and-form">
        <div className="contacts">
          <p className="contact-paragraph">
            Связаться с нами можно любым удобным способом. Пишите на почту,
            позвоните или оставьте заявку ниже.
          </p>
          <p className="phone-number">+7 (700) 333-38-26</p>
          <div className="mail">
            <img className="mail-icon" src={Mail} alt="mail-icon"></img>
            <span className="mail-bold-text">Почта:</span>
            <p className="email"> info@samigroup.kz</p>
          </div>
          <div className="geo">
            <img className="geo-icon" src={Geo} alt="geo-icon"></img>
            <span className="geo-bold-text">Геолокация:</span>
            <p className="adress">г. Павлодар, улица Пушкина, д.2</p>
          </div>
          <a
            className="showOnMap"
            href="https://www.google.kz/maps/place/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B4%D0%B0%D1%80+140000/@52.264839,76.8042387,11.5z/data=!4m5!3m4!1s0x42f9cad6074f811d:0x480e9e038c41819b!8m2!3d52.2873032!4d76.9674023?hl=ru"
            target="_blank"
          >
            Показать на карте
          </a>
        </div>
        <form className={form} onSubmit={sendEmail}>
          <input
            className="name-input"
            type="text"
            name="name"
            value={fullName}
            placeholder="Введите ваше имя"
            onChange={(event) => setFullName(event.target.value)}
            required
          ></input>
          <input
            className="phone-input"
            type="tel"
            name="phone"
            placeholder="+7 (123) 456-78-90"
            inputMode="numeric"
            value={phoneNumber}
            minLength="10"
            maxLength="11"
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
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
        <p className="phone-number-mob">+7 (700) 333-38-26</p>
        <p className="email-mob">info@samigroup.kz</p>
        <a
          className="showOnMap-mob"
          href="https://www.google.kz/maps/place/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B4%D0%B0%D1%80+140000/@52.264839,76.8042387,11.5z/data=!4m5!3m4!1s0x42f9cad6074f811d:0x480e9e038c41819b!8m2!3d52.2873032!4d76.9674023?hl=ru"
          target="_blank"
        >
          Показать на карте
        </a>
      </div>
    </div>
  );
};

export default ContactScreen;
