import React from "react";
import WeatherBuilder from "./WeatherBuilder";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="Container">
      <div className="Box">
        <WeatherBuilder defaultCity="Japan" />
      </div>
      <Footer />
    </div>
  );
}
