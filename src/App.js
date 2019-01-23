import React, { Component } from "react";
import "./App.css";
import BarChart from "./BarChart";
import WorldMap from "./WorldMap";
import WeatherChart from "./WeatherChart";
import WeatherData from "./WeatherData";
import Timeline from "./Timeline/Timeline";
import { TimelineData } from "./Timeline/TimelineData";
ipmort ScrollChart from "./ScrollChart";

const ScrollData = [
	{ activity: "Main Idea and Detail", value: 90, color: "#2A78E4" },
	{ activity: "Character and Plot", value: 80, color: "#2A78E4" },
	{ activity: "Elements of Poetry", value: 70, color: "#2A78E4" },
	{ activity: "Standard 8.10", value: 60, color: "#2A78E4" },
	{ activity: "8.1.3", value: 50, color: "#2A78E4" },
	{ activity: "Skill 6", value: 40, color: "#2A78E4" },
	{ activity: "Skill 7", value: 30, color: "#2A78E4" },
	{ activity: "Skill 8", value: 21, color: "#2A78E4" },
	{ activity: "Skill 9", value: 10, color: "#2A78E4" },
	{ activity: "Skill 10", value: 5, color: "#2A78E4" },
	{ activity: "8.1.34", value: 50, color: "#2A78E4" },
	{ activity: "Skill 60", value: 40, color: "#2A78E4" },
	{ activity: "Skill 70", value: 30, color: "#2A78E4" },
	{ activity: "Skill 80", value: 21, color: "#2A78E4" },
	{ activity: "Skill 90", value: 10, color: "#2A78E4" },
	{ activity: "Skill 100", value: 5, color: "#2A78E4" },
	{ activity: "Skill 900", value: 100, color: "#2A78E4" },
	{ activity: "Skill 1000", value: 50, color: "#2A78E4" },
	{ activity: "Skill -1", value: 5, color: "#2A78E4" },
	{ activity: "8.1.35", value: 50, color: "#2A78E4" },
	{ activity: "Skill 160", value: 40, color: "#2A78E4" },
	{ activity: "Skill 10-2", value: 30, color: "#2A78E4" },
	{ activity: "Skill 20", value: 21, color: "#2A78E4" },
	{ activity: "Skill 80-2", value: 10, color: "#2A78E4" },
	{ activity: "Skill 650", value: 5, color: "#2A78E4" },
	{ activity: "Skill 300", value: 100, color: "#2A78E4" },
	{ activity: "Skill 3000", value: 50, color: "#2A78E4" }
];

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
          <ScrollChart />
        </div>
      </div>
    );
  }
}

export default App;
