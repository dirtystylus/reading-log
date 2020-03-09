import React from "react";
import { OrdinalFrame } from "semiotic";
import { scaleTime } from "d3-scale";
import { timeFormat } from "d3-time-format";

var timescaleFormat = timeFormat("%b %e");
const timescale = scaleTime()
  .domain([new Date(2019, 0, 1), new Date(2019, 11, 31)])
  .nice();

const colors = {
  Fiction: 4,
  Nonfiction: 1,
  Comic: 2
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
      name: "China Rich Girlfriend",
      author: "Kevin Kwan",
      start: new Date(2019, 0, 2),
      end: new Date(2019, 0, 8),
      genre: "Fiction"
    },
    {
      name: "Good and Mad",
      author: "Rebecca Traister",
      start: new Date(2019, 0, 2),
      end: new Date(2019, 0, 10),
      genre: "Nonfiction"
    },
    {
      name: "The Long Way to a Small, Angry Planet",
      author: "Becky Chambers",
      start: new Date(2019, 0, 10),
      end: new Date(2019, 0, 19),
      genre: "Fiction"
    },
    {
      name: "The Friend",
      author: "Sigrid Nunez",
      start: new Date(2019, 0, 12),
      end: new Date(2019, 0, 13),
      genre: "Fiction"
    },
    {
      name: "His Dark Materials: The Golden Compass",
      author: "Philip Pullman",
      start: new Date(2019, 0, 14),
      end: new Date(2019, 4, 12),
      genre: "Fiction"
    },
    {
      name: "Check, Please! (Book #1: #Hockey)",
      author: "Ngozi Ukazu",
      start: new Date(2019, 0, 19),
      end: new Date(2019, 1, 19),
      genre: "Comic"
    },
    {
      name: "Flights",
      author: "Olga Tokarczuk",
      start: new Date(2019, 0, 19),
      end: new Date(2019, 1, 10),
      genre: "Fiction"
    },
    {
      name: "Washington Black",
      author: "Esi Edugyan",
      start: new Date(2019, 0, 22),
      end: new Date(2019, 1, 1),
      genre: "Fiction"
    },
    {
      name: "The Essex Serpent",
      author: "Sarah Perry",
      start: new Date(2019, 0, 26),
      end: new Date(2019, 1, 7),
      genre: "Fiction"
    },
    {
      name: "The New Jim Crow",
      author: "Michelle Alexander",
      start: new Date(2019, 1, 4),
      end: new Date(2019, 2, 12),
      genre: "Nonfiction"
    },
    {
      name: "Upgrade Soul",
      author: "Ezra Clattan Daniels",
      start: new Date(2019, 1, 9),
      end: new Date(2019, 1, 9),
      genre: "Comic"
    },
    {
      name: "Melmoth",
      author: "Sarah Perry",
      start: new Date(2019, 1, 10),
      end: new Date(2019, 1, 17),
      genre: "Fiction"
    },
    {
      name: "Today Will Be Different",
      author: "Maria Semple",
      start: new Date(2019, 1, 21),
      end: new Date(2019, 1, 22),
      genre: "Fiction"
    },
    {
      name: "The Mere Wife",
      author: "Maria Dahvana Headley",
      start: new Date(2019, 1, 23),
      end: new Date(2019, 1, 24),
      genre: "Fiction"
    },
    {
      name: "Eleanor Oliphant is completely fine",
      author: "Gail Honeyman",
      start: new Date(2019, 1, 24),
      end: new Date(2019, 1, 28),
      genre: "Fiction"
    },
    {
      name: "Americanah",
      author: "Chimamanda Ngozi Adichie",
      start: new Date(2019, 2, 1),
      end: new Date(2019, 2, 8),
      genre: "Fiction"
    },
    {
      name: "The Power",
      author: "Naomi Alderman",
      start: new Date(2019, 2, 8),
      end: new Date(2019, 2, 15),
      genre: "Fiction"
    },
    {
      name: "Black Panther: A Nation Under our Feet, Book Two",
      author: "Ta-Nehisi Coates",
      start: new Date(2019, 1, 26),
      end: new Date(2019, 2, 15),
      genre: "Comic"
    },
    {
      name: "Black Panther: A Nation Under our Feet, Book Three",
      author: "Ta-Nehisi Coates",
      start: new Date(2019, 2, 15),
      end: new Date(2019, 2, 16),
      genre: "Comic"
    },
    {
      name: "The Cross and The Lynching Tree",
      author: "James Cone",
      start: new Date(2019, 2, 15),
      end: new Date(2019, 2, 26),
      genre: "Nonfiction"
    },
    {
      name: "A Tale for the Time Being",
      author: "Ruth Ozeki",
      start: new Date(2019, 2, 16),
      end: new Date(2019, 2, 24),
      genre: "Fiction"
    },
    {
      name: "Everything You Never Told Me",
      author: "Celeste Ng",
      start: new Date(2019, 2, 18),
      end: new Date(2019, 2, 21),
      genre: "Fiction"
    },
    {
      name: "The Wildstorm, Vol. 3",
      author: "Warren Ellis and Jon Davis-Hunt",
      start: new Date(2019, 2, 23),
      end: new Date(2019, 2, 24),
      genre: "Comic"
    },
    {
      name: "Mr. Fox",
      author: "Helen Oyeyemi",
      start: new Date(2019, 2, 29),
      end: new Date(2019, 3, 15),
      genre: "Fiction"
    },
    {
      name:
        "Parenting Forward: How to Raise Children with Justin, Mercy, and Kindness",
      author: "Cindy Wang Brandt",
      start: new Date(2019, 2, 30),
      end: new Date(2019, 3, 1),
      genre: "Nonfiction"
    },
    {
      name: "The Library Book",
      author: "Susan Orlean",
      start: new Date(2019, 3, 2),
      end: new Date(2019, 3, 8),
      genre: "Nonfiction"
    },
    {
      name: "Trick Mirror",
      author: "Jia Tolentino",
      start: new Date(2019, 11, 30),
      end: new Date(2019, 11, 31),
      genre: "Nonfiction"
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
    fill: theme[colors[d.genre] || 0],
    stroke: theme[(colors[d.genre] || 0) + 5]
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
  axes: [{ orient: "bottom", ticks: 12, tickFormat: timescaleFormat }],
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
