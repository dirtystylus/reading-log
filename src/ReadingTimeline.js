import React from "react";
import { OrdinalFrame } from "semiotic";
import { scaleTime } from "d3-scale";

const timescale = scaleTime().domain([
  new Date(2000, 0, 1),
  new Date(2000, 1, 28)
]);

const colors = {
  Democratic: 4,
  Republican: 1,
  "Democratic-Republican": 2,
  Whig: 3
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
      name: "George Washington",
      start: new Date(2000, 0, 4),
      end: new Date(2000, 0, 5),
      party: "None"
    },
    {
      name: "John Adams",
      start: new Date(2000, 0, 5),
      end: new Date(2000, 1, 2),
      party: "Democratic"
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
  title: "U.S. Presidential Terms",
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
  axes: [{ orient: "bottom", ticks: 4 }],
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
