import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
              autoFocus="on"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Friday 10:00PM</li>
        <li>Rain</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
              alt="Rain"
            />
            <span className="temperature">48</span>
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 20%</li>
            <li>Humidity: 55%</li>
            <li>Wind: 8mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
