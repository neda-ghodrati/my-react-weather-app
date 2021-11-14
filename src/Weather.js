import axios from "axios";
import React, { useState } from "react";

import Weatherinfo from "./Weatherinfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function HandleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChangedCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "0bf456f6d7dcaf1ee776a7e6581c2b7c";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(HandleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleChangedCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
