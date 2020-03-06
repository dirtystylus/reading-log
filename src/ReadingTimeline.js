import React from "react";
import { OrdinalFrame } from "semiotic";
import { scaleTime } from "d3-scale";
import { timeFormat } from "d3-time-format";

var timescaleFormat = timeFormat("%b %e");
const timescale = scaleTime()
  .domain([new Date(2000, 0, 1), new Date(2000, 11, 31)])
  .nice();

const colors = {
  Fiction: 4,
  Nonfiction: 1,
  Poetry: 2
};
const theme = [
  "#ac58e5",
  "#E0488B",
  "#9fd0cb",
  "#e0d33a",
  "#7566ff",
  "#533f82",
  "#7a255d",
  "#365350",
  "#a19a11",
  "#3f4482"
];
const frameProps = {
  data: [
    {
      name: "The Regrets",
      start: new Date(2000, 0, 4),
      end: new Date(2000, 0, 5),
      party: "Fiction"
    },
    {
      name: "Minor Feelings",
      start: new Date(2000, 0, 5),
      end: new Date(2000, 1, 2),
      party: "Poetry"
    },
    {
      name: "Foundryside",
      start: new Date(2000, 1, 5),
      end: new Date(2000, 3, 2),
      party: "Nonfiction"
    }
  ],
  size: [900, 800],
  margin: { left: 200, top: 40, bottom: 50, right: 20 },
  type: "timeline",
  projection: "horizontal",
  oPadding: 2,
  oAccessor: "name",
  rAccessor: function(e) {
    return [e.start, e.end];
  },
  style: d => ({
    fill: theme[colors[d.party] || 0],
    stroke: theme[(colors[d.party] || 0) + 5]
  }),
  title: "Reading Log 2020",
  foregroundGraphics: Object.keys(colors)
    .concat(["Other"])
    .map((d, i) => (
      <text key={d} x={700} y={i * 20 + 60}>
        <tspan fontSize="20" fill={theme[colors[d] || 0]}>
          ●
        </tspan>{" "}
        {d}
      </text>
    )),
  axes: [{ orient: "bottom", ticks: 10, tickFormat: timescaleFormat }],
  oLabel: d => (
    <text textAnchor="end" fontSize="11">
      {d}
    </text>
  ),
  rScaleType: timescale
};

class ReadingTimeline extends React.Component {
  render() {
    return <OrdinalFrame {...frameProps} />;
  }
}

export default ReadingTimeline;
