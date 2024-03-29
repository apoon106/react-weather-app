import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/alexandra-poon-76b48b1a9/"
            target="_blank"
            rel="noreferrer"
          >
            Alexandra Poon
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/apoon106/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
