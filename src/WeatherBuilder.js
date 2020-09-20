import React, { useState } from "react";
import Weatherinfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";

export default function WeatherBuilder(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function DisplayWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "dfce4730300e10be19529e8f1a01e7e0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(DisplayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Container">
        <div className="Weather-box">
          <Weatherinfo data={weather} />
          <div className="Forecastblock">
            <Forecast city={weather.city} />
          </div>
          <div className="form-group">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  className="form-control"
                  id="search-input"
                  placeholder="Enter city here"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
