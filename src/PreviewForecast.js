import React from "react";
import Icon from "./Icon";

export default function PreviewForecast(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="weather-forecast-preview col">
      {hours()}
      <Icon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
