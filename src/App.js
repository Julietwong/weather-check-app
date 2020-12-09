import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Melbourne,AU" />

        <div className="footer">
          <p className="info-text">
            <a
              href="https://github.com/Julietwong/weather-check-app"
              rel="noreferrer"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://julietwongmin.com/"
              rel="noreferrer"
              target="_blank"
            >
              Juliet Wong Min
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
