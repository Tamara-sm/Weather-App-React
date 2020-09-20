import React, { useState } from "react";
import axios from "axios";
import PreviewForecast from "./PreviewForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function DisplayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <div className="row">
          <PreviewForecast data={forecast.list[0]} />
          <PreviewForecast data={forecast.list[1]} />
          <PreviewForecast data={forecast.list[2]} />
          <PreviewForecast data={forecast.list[3]} />
          <PreviewForecast data={forecast.list[4]} />
          <PreviewForecast data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "dfce4730300e10be19529e8f1a01e7e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DisplayForecast);
  }
  return null;
}
