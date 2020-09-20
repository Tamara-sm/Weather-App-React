import React from "react";
import Icon from "./Icon";
import CurrentDate from "./CurrentDate";
import Tempinfo from "./Tempinfo";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="City">{props.data.city}</h1>
      <div className="days">
        <CurrentDate date={props.data.date} />
      </div>
      <h2 className="description"> {props.data.description}</h2>
      <div className="weather">
        <ul>
          <li className="wind">Wind: {props.data.wind} km/h</li>
          <li className="humidity"> Humidity: {props.data.humidity} (%)</li>
        </ul>
        <div className="emoji">
          <Icon code={props.data.icon} />
        </div>
        <div className="Tempinfo">
          <Tempinfo celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
