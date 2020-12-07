import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2 className="current-date">
        <FormattedDate timezone={props.data.timezone} />
      </h2>
      <h1 className="city">
        {props.data.city}, {props.data.country}
      </h1>
      <div className="temperature-container">
        <p>
          <span className="temperature">
            {Math.round(props.data.temperature)}
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
            {props.data.description}
          </p>
          <img
            className="weather-icon"
            src={props.data.iconUrl}
            alt={props.data.description}
          />
        </div>
        <div className="col">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 3.6)} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
