import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./FormattedDate";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      timezone: response.data.timezone,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Weather Check</h5>
            <form>
              <div className="form-row d-flex justify-content-center">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Type a city name"
                  autoComplete="on"
                />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
            <h2 className="current-date">
              <FormattedDate timezone={weatherData.timezone} />
            </h2>
            <h1 className="city">
              {weatherData.city}, {weatherData.country}
            </h1>
            <div className="temperature-container">
              <p>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <a href="/" className="unit celcius">
                  C
                </a>
                <a href="/" className="unit farenheit">
                  F
                </a>
              </p>
            </div>
            <div className="row">
              <div className="col icon-descrp-box flex-column">
                <p className="weather-description text-capitalize">
                  {weatherData.description}
                </p>
                <img
                  className="weather-icon"
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                />
              </div>
              <div className="col">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind * 3.6)} Km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "43b685724e0c77779a4487b322bb66db";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <p className="loading">Loading </p>;
  }
}
