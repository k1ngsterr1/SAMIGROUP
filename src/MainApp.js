import React from "react";

import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutScreen";
import ServicesScreen from "./screens/ServicesScreen";
import ContactScreen from "./screens/ContactScreen";
import Footer from "./screens/Footer";

import ClipLoader from "react-spinners/ClipLoader";
import { Audio } from "react-loader-spinner";
import { useState, useEffect } from "react";

const MainApp = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    // <BrowserRouter>
    <div className="container">
      <MainScreen></MainScreen>
      <div className="separator-2"></div>
      <AboutScreen></AboutScreen>
      <div className="separator-3"></div>
      <ServicesScreen></ServicesScreen>
      <div className="separator-4"></div>
      <ContactScreen></ContactScreen>
      <div className="separator-5"></div>
      <Footer></Footer>
    </div>
    // </BrowserRouter>
  );
};

export default MainApp;
