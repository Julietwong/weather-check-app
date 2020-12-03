import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <div className="footer">
          <p class="info-text">
            <a
              href="https://github.com/Julietwong/weather-check-app"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a href="https://julietwongmin.com/" target="_blank">
              Juliet Wong Min
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
