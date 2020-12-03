import React from "react";
import "./Weather.css";

export default function Weather() {
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
                <i class="fa fa-search"></i>
              </button>
            </div>
          </form>
          <h2 className="current-date">12:43, Thurs 3 Dec</h2>
          <h1 className="city">Melbourne, Au</h1>
          <div className="temperature-container">
            <p>
              <span className="temperature">12°</span>
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
              <p className="weather-description">Sunny</p>
              <img
                className="weather-icon"
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="description"
              />
            </div>
            <div className="col">
              <ul>
                <li>Humidity: 5%</li>
                <li>Wind: 12 Km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
