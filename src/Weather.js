import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-4">
            <input
              type="search"
              placeholder="Seach for a city..."
              className="form-cpmtrol"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-warning w-100"
            />{" "}
          </div>
        </div>
      </form>

      <h1>City Name</h1>
      <ul>
        <li>Date and day</li>
        <li>Weather description</li>
      </ul>

      <div className="row">
        <div className="col-6">
          image + <span className="temperature">temperature</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
