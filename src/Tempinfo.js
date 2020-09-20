import React, { useState } from "react";

export default function Tempinfo(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temp">
          <span className="degree">{Math.round(props.celsius)}</span>
          <span className="degree">
            <a href="/" onClick={showFahrenheit}>
              °C |
            </a>{" "}
            °F
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="temp">
          <span className="degree">{Math.round(fahrenheit())}</span>
          <span className="degree">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}