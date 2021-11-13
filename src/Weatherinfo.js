import React from "react";
import FormattedDate from "./FormattedDate";
import Weather from "./Weather";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.iconUrl}
              alt={props.data.Description}
              className="float-left"
            />
            <span className="float-left">
              <span className="temperature">{props.data.temperature}</span>
              <span className="unit"> °c</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
