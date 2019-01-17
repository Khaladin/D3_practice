import React, { Component } from "react";
import "./App.css";
import BarChart from "./BarChart";
import WorldMap from "./WorldMap";
import WeatherChart from "./WeatherChart";
import WeatherData from "./WeatherData";
import Timeline from "./Timeline/Timeline";
import { TimelineData } from "./Timeline/TimelineData";

class App extends Component {
  render() {
    console.log(WeatherData);
    return (
      <div className="App">
        <div className="header">
          <h2>d3ia dashboard</h2>
        </div>
        <div>
          <BarChart data={[5, 10, 1, 3]} size={[500, 700]} />
          <WeatherChart data={WeatherData.list} />
          <Timeline data={TimelineData} />
        </div>
      </div>
    );
  }
}

export default App;
