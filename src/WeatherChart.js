import React, { Component } from "react";
import * as d3 from "d3";
import Axes from "./Axes";

const width = 650;
const height = 400;
const margin = { top: 20, right: 30, bottom: 20, left: 30 };

class WeatherChart extends Component {
  state = {
    bars: [],
    chartAxes: {},
    xScale: {},
    yScale: {}
  };

  static getDerivedStateFromProps(nextProps, previousState) {
    const { data } = nextProps;
    if (!data) return {};
    const xExtent = d3.extent(data, d => d.dt);
    const xScale = d3 // Creating the scale for the x axis, this will be time related
      .scaleTime()
      .domain(xExtent)
      .range([margin.left, 650]);

    const [min, max] = d3.extent(data, d => d.main.temp_max);
    const yScale = d3
      .scaleLinear()
      .domain([Math.min(min, 0), max])
      .range([height - margin.bottom - 50, 0]); // use height - a combination of margins to set margins right

    const colorExtent = d3.extent(data, d => d.main.temp);
    const colorScale = d3
      .scaleSequential()
      .domain(colorExtent)
      .interpolator(d3.interpolateRdYlBu);

    const bars = data.map(d => {
      return {
        x: xScale(d.dt),
        y: yScale(d.main.temp_max),
        height: yScale(d.main.temp_min) - yScale(d.main.temp_max + 10),
        fill: colorScale(d.main.temp)
      };
    });
    const svgDimensions = { width: 650, height: 350 };
    const chartAxes = (
      <Axes
        scales={{ xScale, yScale }}
        margins={margin}
        svgDimensions={svgDimensions}
      />
    );
    return { bars, chartAxes };
  }

  // Another Method to add Axis to a chart, by using refs and the <g /> tag method number 2
  //   componentDidMount() {
  //     const xAxis = d3.axisBottom();
  //     const yAxis = d3.axisLeft();
  //     xAxis.scale(this.state.xScale);
  //     d3.select(this.refs.xAxis).call(xAxis);
  //     yAxis.scale(this.state.yScale);
  //     d3.select(this.refs.yAxis).call(yAxis);
  //   }

  render() {
    this.state.bars.map(d => console.log(d.x));
    return (
      <svg width={width} height={height}>
        {this.state.bars.map(d => (
          <rect x={d.x} width={5} height={d.height * 5} fill={d.fill} />
        ))}
        {this.state.chartAxes}
        {/* <g ref="xAxis" transform={`translate(0,${height - margin.bottom})`} /> Second Method to apply Axes to the graph
        <g ref="yAxis" transform={`translate(${margin.left} , 0)`} /> */}
      </svg>
    );
  }
}

export default WeatherChart;
