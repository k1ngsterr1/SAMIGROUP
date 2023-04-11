import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainApp from "./MainApp";
import Maintenance from "./pages/Maintenance";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />}></Route>
        <Route path="/maintenance" element={<Maintenance />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
