import React, { Component } from "react";
import * as d3 from "d3";

const width = 800;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

class Timeline extends Component {
  state = {
    bars: [],
    chartAxes: {}
  };

  static getDerivedStateFromProps(nextProps, previousState) {
    const { data } = nextProps;
    console.log(data);
    if (!data) return {};

    const max = d3.max(data, d => d.endDate);
    const min = d3.min(data, d => d.startDate);

    const xScale = d3
      .scaleTime()
      .domain([min, max])
      .range([margin.left, width]);

    const yScale = d3
      .scaleOrdinal()
      .domain(["med", "doc", "x-ray", "quack", "med"])
      .range([50, 100, 150, 200, 250]);

    const bars = data.map(d => {
      console.log(xScale(d.endDate));
      return {
        x: xScale(d.startDate),
        y: yScale(d.type),
        width: xScale(d.endDate) - xScale(d.startDate)
      };
    });

    return { bars };
  }
  render() {
    this.state.bars.map(d => console.log(d.x));
    return (
      <svg width={width} height={height}>
        {this.state.bars.map(d => (
          <rect x={d.x} y={d.y} width={d.width} height={20} />
        ))}
      </svg>
    );
  }
}

export default Timeline;
