import React from "react";
import { OrdinalFrame } from "semiotic";
import { scaleTime } from "d3-scale";
import { timeFormat } from "d3-time-format";

var timescaleFormat = timeFormat("%b %e");
const timescale = scaleTime().domain([
  new Date(2019, 0, 1),
  new Date(2019, 11, 31)
]);

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
      title: "China Rich Girlfriend",
      author: "Kevin Kwan",
      start: new Date(2019, 0, 2),
      end: new Date(2019, 0, 8),
      genre: "Fiction"
    },
    {
      title: "Good and Mad",
      author: "Rebecca Traister",
      start: new Date(2019, 0, 2),
      end: new Date(2019, 0, 10),
      genre: "Nonfiction"
    },
    {
      title: "The Long Way to a Small, Angry Planet",
      author: "Becky Chambers",
      start: new Date(2019, 0, 10),
      end: new Date(2019, 0, 19),
      genre: "Fiction"
    },
    {
      title: "The Friend",
      author: "Sigrid Nunez",
      start: new Date(2019, 0, 12),
      end: new Date(2019, 0, 13),
      genre: "Fiction"
    },
    {
      title: "His Dark Materials: The Golden Compass",
      author: "Philip Pullman",
      start: new Date(2019, 0, 14),
      end: new Date(2019, 4, 12),
      genre: "Fiction"
    },
    {
      title: "Check, Please! (Book #1: #Hockey)",
      author: "Ngozi Ukazu",
      start: new Date(2019, 0, 19),
      end: new Date(2019, 1, 19),
      genre: "Comic"
    },
    {
      title: "Flights",
      author: "Olga Tokarczuk",
      start: new Date(2019, 0, 19),
      end: new Date(2019, 1, 10),
      genre: "Fiction"
    },
    {
      title: "Washington Black",
      author: "Esi Edugyan",
      start: new Date(2019, 0, 22),
      end: new Date(2019, 1, 1),
      genre: "Fiction"
    },
    {
      title: "The Essex Serpent",
      author: "Sarah Perry",
      start: new Date(2019, 0, 26),
      end: new Date(2019, 1, 7),
      genre: "Fiction"
    },
    {
      title: "The New Jim Crow",
      author: "Michelle Alexander",
      start: new Date(2019, 1, 4),
      end: new Date(2019, 2, 12),
      genre: "Nonfiction"
    },
    {
      title: "Upgrade Soul",
      author: "Ezra Clattan Daniels",
      start: new Date(2019, 1, 9),
      end: new Date(2019, 1, 9),
      genre: "Comic"
    },
    {
      title: "Melmoth",
      author: "Sarah Perry",
      start: new Date(2019, 1, 10),
      end: new Date(2019, 1, 17),
      genre: "Fiction"
    },
    {
      title: "Today Will Be Different",
      author: "Maria Semple",
      start: new Date(2019, 1, 21),
      end: new Date(2019, 1, 22),
      genre: "Fiction"
    },
    {
      title: "The Mere Wife",
      author: "Maria Dahvana Headley",
      start: new Date(2019, 1, 23),
      end: new Date(2019, 1, 24),
      genre: "Fiction"
    },
    {
      title: "Eleanor Oliphant is completely fine",
      author: "Gail Honeyman",
      start: new Date(2019, 1, 24),
      end: new Date(2019, 1, 28),
      genre: "Fiction"
    },
    {
      title: "Americanah",
      author: "Chimamanda Ngozi Adichie",
      start: new Date(2019, 2, 1),
      end: new Date(2019, 2, 8),
      genre: "Fiction"
    },
    {
      title: "The Power",
      author: "Naomi Alderman",
      start: new Date(2019, 2, 8),
      end: new Date(2019, 2, 15),
      genre: "Fiction"
    },
    {
      title: "Black Panther: A Nation Under our Feet, Book Two",
      author: "Ta-Nehisi Coates",
      start: new Date(2019, 1, 26),
      end: new Date(2019, 2, 15),
      genre: "Comic"
    },
    {
      title: "Black Panther: A Nation Under our Feet, Book Three",
      author: "Ta-Nehisi Coates",
      start: new Date(2019, 2, 15),
      end: new Date(2019, 2, 16),
      genre: "Comic"
    },
    {
      title: "The Cross and The Lynching Tree",
      author: "James Cone",
      start: new Date(2019, 2, 15),
      end: new Date(2019, 2, 26),
      genre: "Nonfiction"
    },
    {
      title: "A Tale for the Time Being",
      author: "Ruth Ozeki",
      start: new Date(2019, 2, 16),
      end: new Date(2019, 2, 24),
      genre: "Fiction"
    },
    {
      title: "Everything You Never Told Me",
      author: "Celeste Ng",
      start: new Date(2019, 2, 18),
      end: new Date(2019, 2, 21),
      genre: "Fiction"
    },
    {
      title: "The Wildstorm, Vol. 3",
      author: "Warren Ellis and Jon Davis-Hunt",
      start: new Date(2019, 2, 23),
      end: new Date(2019, 2, 24),
      genre: "Comic"
    },
    {
      title: "Mr. Fox",
      author: "Helen Oyeyemi",
      start: new Date(2019, 2, 29),
      end: new Date(2019, 3, 15),
      genre: "Fiction"
    },
    {
      title:
        "Parenting Forward: How to Raise Children with Justin, Mercy, and Kindness",
      author: "Cindy Wang Brandt",
      start: new Date(2019, 2, 30),
      end: new Date(2019, 3, 1),
      genre: "Nonfiction"
    },
    {
      title: "The Library Book",
      author: "Susan Orlean",
      start: new Date(2019, 3, 2),
      end: new Date(2019, 3, 8),
      genre: "Nonfiction"
    },
    {
      title: "Bowlaway",
      author: "Elizabeth McCracken",
      start: new Date(2019, 3, 9),
      end: new Date(2019, 3, 24),
      genre: "Fiction"
    },
    {
      title: "Immigrant, Montana",
      author: "Amitava Kumar",
      start: new Date(2019, 3, 9),
      end: new Date(2019, 3, 16),
      genre: "Fiction"
    },
    {
      title: "My Heroes Have Always Been Junkies",
      author: "Ed Brubaker and Sean Phillips",
      start: new Date(2019, 3, 17),
      end: new Date(2019, 4, 3),
      genre: "Comic"
    },
    {
      title: "The Anatomy of Dreams",
      author: "Chloe Benjamin",
      start: new Date(2019, 3, 26),
      end: new Date(2019, 3, 28),
      genre: "Fiction"
    },
    {
      title: "Infinite Detail",
      author: "Tim Maughan",
      start: new Date(2019, 3, 29),
      end: new Date(2019, 4, 2),
      genre: "Fiction"
    },
    {
      title: "The Old Drift",
      author: "Namwali Serpell",
      start: new Date(2019, 4, 2),
      end: new Date(2019, 4, 26),
      genre: "Fiction"
    },
    {
      title: "Where’d You Go, Bernadette?",
      author: "Maria Semple",
      start: new Date(2019, 4, 6),
      end: new Date(2019, 4, 15),
      genre: "Fiction"
    },
    {
      title: "The Land of Stories: The Enchantress Returns",
      author: "Chris Colfer",
      start: new Date(2019, 4, 12),
      end: new Date(2019, 8, 8),
      genre: "Fiction"
    },
    {
      title: "His Dark Materials: The Subtle Knife",
      author: "Philip Pullman",
      start: new Date(2019, 4, 13),
      end: new Date(2019, 8, 25),
      genre: "Fiction"
    },
    {
      title: "The Remains of the Day",
      author: "Kazuo Ishiguro",
      start: new Date(2019, 4, 15),
      end: new Date(2019, 4, 21),
      genre: "Fiction"
    },
    {
      title: "Y: The Last Man: Vol. 1",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 4, 18),
      end: new Date(2019, 4, 19),
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 2",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 4, 19),
      end: new Date(2019, 4, 19),
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 3",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 4, 19),
      end: new Date(2019, 4, 19),
      genre: "Comic"
    },
    {
      title: "Rich People Problems",
      author: "Kevin Kwan",
      start: new Date(2019, 4, 21),
      end: new Date(2019, 4, 22),
      genre: "Fiction"
    },
    {
      title: "The Witch Elm",
      author: "Tana French",
      start: new Date(2019, 4, 24),
      end: new Date(2019, 4, 29),
      genre: "Fiction"
    },
    {
      title: "Euphoria",
      author: "Lily King",
      start: new Date(2019, 4, 31),
      end: new Date(2019, 5, 1),
      genre: "Fiction"
    },
    {
      title: "Y: The Last Man: Vol. 4",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 5, 4),
      end: new Date(2019, 5, 4),
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 5",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 5, 4),
      end: new Date(2019, 5, 4),
      genre: "Comic"
    },
    {
      title: "Thick",
      author: "Tressie McMillan Cottom",
      start: new Date(2019, 5, 5),
      end: new Date(2019, 5, 10),
      genre: "Nonfiction"
    },
    {
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      start: new Date(2019, 5, 11),
      end: new Date(2019, 5, 12),
      genre: "Fiction"
    },
    {
      title: "Resilient Management",
      author: "Lara Hogan",
      start: new Date(2019, 5, 13),
      end: new Date(2019, 5, 21),
      genre: "Nonfiction"
    },
    {
      title: "Y: The Last Man: Vol. 6",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 5, 13),
      end: new Date(2019, 5, 13),
      genre: "Comic"
    },
    {
      title: "Packinko",
      author: "Min Jin Lee",
      start: new Date(2019, 5, 15),
      end: new Date(2019, 5, 18),
      genre: "Fiction"
    },
    {
      title: "Trust Exercise",
      author: "Susan Choi",
      start: new Date(2019, 5, 21),
      end: new Date(2019, 5, 22),
      genre: "Fiction"
    },
    {
      title: "Lost and Wanted",
      author: "Nell Freudenberger",
      start: new Date(2019, 5, 22),
      end: new Date(2019, 5, 25),
      genre: "Fiction"
    },
    {
      title: "Empress of Forever",
      author: "Max Gladstone",
      start: new Date(2019, 5, 25),
      end: new Date(2019, 6, 5),
      genre: "Fiction"
    },
    {
      title: "Y: The Last Man: Vol. 7",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 5, 29),
      end: new Date(2019, 5, 29),
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 8",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 5, 29),
      end: new Date(2019, 5, 29),
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 9",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 5, 30),
      end: new Date(2019, 5, 30),
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 10",
      author: "Brian K. Vaughan and Pia Guerra",
      start: new Date(2019, 6, 1),
      end: new Date(2019, 6, 1),
      genre: "Comic"
    },
    {
      title: "Normal People",
      author: "Sally Rooney",
      start: new Date(2019, 6, 2),
      end: new Date(2019, 6, 3),
      genre: "Fiction"
    },
    {
      title: "In the Woods",
      author: "Tana French",
      start: new Date(2019, 6, 3),
      end: new Date(2019, 6, 4),
      genre: "Fiction"
    },
    {
      title: "The Victorian Internet",
      author: "Tom Standage",
      start: new Date(2019, 6, 5),
      end: new Date(2019, 6, 8),
      genre: "Nonfiction"
    },
    {
      title: "American Spy",
      author: "Lauren Wilkinson",
      start: new Date(2019, 6, 9),
      end: new Date(2019, 6, 11),
      genre: "Fiction"
    },
    {
      title: "Severance",
      author: "Ling Ma",
      start: new Date(2019, 6, 11),
      end: new Date(2019, 6, 13),
      genre: "Fiction"
    },
    {
      title: "The Parisian",
      author: "Isabella Hammad",
      start: new Date(2019, 6, 11),
      end: new Date(2019, 6, 16),
      genre: "Fiction"
    },
    {
      title: "Paper Girls: Vol. 3",
      author: "Brian K. Vaughan and Cliff Chiang",
      start: new Date(2019, 6, 16),
      end: new Date(2019, 6, 17),
      genre: "Comic"
    },
    {
      title: "The Other Americans",
      author: "Laila Lalami",
      start: new Date(2019, 6, 19),
      end: new Date(2019, 6, 22),
      genre: "Fiction"
    },
    {
      title: "Paper Girls: Vol. 4",
      author: "Brian K. Vaughan and Cliff Chiang",
      start: new Date(2019, 6, 20),
      end: new Date(2019, 6, 20),
      genre: "Comic"
    },
    {
      title: "Paper Girls: Vol. 5",
      author: "Brian K. Vaughan and Cliff Chiang",
      start: new Date(2019, 6, 21),
      end: new Date(2019, 6, 21),
      genre: "Comic"
    },
    {
      title: "The Porpoise",
      author: "Mark Haddon",
      start: new Date(2019, 6, 23),
      end: new Date(2019, 6, 28),
      genre: "Fiction"
    },
    {
      title: "Standard Deviation",
      author: "Katherine Heiny",
      start: new Date(2019, 6, 26),
      end: new Date(2019, 6, 27),
      genre: "Fiction"
    },
    {
      title: "Conversations with Friends",
      author: "Sally Rooney",
      start: new Date(2019, 6, 27),
      end: new Date(2019, 6, 29),
      genre: "Fiction"
    },
    {
      title: "Divided We Fail",
      author: "Sarah Garland",
      start: new Date(2019, 6, 29),
      end: new Date(2019, 8, 11),
      genre: "Nonfiction"
    },
    {
      title: "Beautiful Ruin",
      author: "Jess Walter",
      start: new Date(2019, 6, 30),
      end: new Date(2019, 7, 2),
      genre: "Fiction"
    },
    {
      title: "A Brief History of Seven Killings",
      author: "Marlon James",
      start: new Date(2019, 7, 2),
      end: new Date(2019, 7, 9),
      genre: "Fiction"
    },
    {
      title: "I Like to Watch",
      author: "Emily Nussbaum",
      start: new Date(2019, 7, 10),
      end: new Date(2019, 7, 12),
      genre: "Nonfiction"
    },
    {
      title: "The Paragon Hotel",
      author: "Lyndsey Faye",
      start: new Date(2019, 7, 14),
      end: new Date(2019, 7, 18),
      genre: "Fiction"
    },
    {
      title: "Big Sky",
      author: "Kate Atkinson",
      start: new Date(2019, 7, 19),
      end: new Date(2019, 7, 20),
      genre: "Fiction"
    },
    {
      title: "Lock Every Door",
      author: "Riley Sager",
      start: new Date(2019, 7, 21),
      end: new Date(2019, 7, 22),
      genre: "Fiction"
    },
    {
      title: "Parable of the Sower",
      author: "Octavia Butler",
      start: new Date(2019, 7, 23),
      end: new Date(2019, 8, 15),
      genre: "Fiction"
    },
    {
      title: "Ms Marvel Vol. 5: Super Famous",
      author: "G. Willow Wilson and Takeshi Miyazawa",
      start: new Date(2019, 7, 25),
      end: new Date(2019, 7, 26),
      genre: "Comic"
    },
    {
      title: "Thor Vol. 1: The Goddess of Thunder",
      author: "Jason Aaron, Russel Dauterman, and Jorge Molina",
      start: new Date(2019, 7, 26),
      end: new Date(2019, 7, 26),
      genre: "Comic"
    },
    {
      title: "Ms Marvel Vol. 6: Civil War II",
      author: "G. Willow Wilson and Takeshi Miyazawa",
      start: new Date(2019, 7, 31),
      end: new Date(2019, 7, 31),
      genre: "Comic"
    },
    {
      title: "The Mighty Thor Vol. 1: Thunder in Her Veins",
      author: "Jason Aaron, Russel Dauterman",
      start: new Date(2019, 8, 1),
      end: new Date(2019, 8, 1),
      genre: "Comic"
    },
    {
      title: "Ms Marvel Vol. 7: Damage per Second",
      author: "G. Willow Wilson and Takeshi Miyazawa",
      start: new Date(2019, 8, 2),
      end: new Date(2019, 8, 2),
      genre: "Comic"
    },
    {
      title: "On Earth We’re Briefly Gorgeous",
      author: "Ocean Vuong",
      start: new Date(2019, 8, 4),
      end: new Date(2019, 8, 8),
      genre: "Fiction"
    },
    {
      title: "Prism Stalker Vol. 1",
      author: "Sloane Leong",
      start: new Date(2019, 8, 2),
      end: new Date(2019, 8, 7),
      genre: "Comic"
    },
    {
      title: "The Dearly Beloved",
      author: "Cara Wall",
      start: new Date(2019, 8, 14),
      end: new Date(2019, 8, 14),
      genre: "Fiction"
    },
    {
      title: "How to be an antiracist",
      author: "Ibram X. Kendi",
      start: new Date(2019, 8, 15),
      end: new Date(2019, 8, 25),
      genre: "Nonfiction"
    },
    {
      title: "The Overstory",
      author: "Richard Powers",
      start: new Date(2019, 8, 21),
      end: new Date(2019, 8, 23),
      genre: "Fiction"
    },
    {
      title: "Fleishman is in Trouble",
      author: "Taffy Brodesser-Akner",
      start: new Date(2019, 8, 25),
      end: new Date(2019, 8, 26),
      genre: "Fiction"
    },
    {
      title: "Go Ahead in the Rain: Notes to A Tribe Called Quest",
      author: "Hanif Abdurraquib",
      start: new Date(2019, 8, 27),
      end: new Date(2019, 8, 30),
      genre: "Nonfiction"
    },
    {
      title: "Disappearing Earth",
      author: "Julia Phillips",
      start: new Date(2019, 8, 28),
      end: new Date(2019, 8, 29),
      genre: "Fiction"
    },
    {
      title: "Frankly in Love",
      author: "David Yoon",
      start: new Date(2019, 8, 30),
      end: new Date(2019, 9, 1),
      genre: "Fiction"
    },
    {
      title: "Everyday Information Architecture",
      author: "Lisa Maria Martin",
      start: new Date(2019, 9, 2),
      end: new Date(2019, 9, 12),
      genre: "Nonfiction"
    },
    {
      title: "We are Never Meeting in Real Life",
      author: "Samantha Irby",
      start: new Date(2019, 9, 6),
      end: new Date(2019, 11, 5),
      genre: "Nonfiction"
    },
    {
      title: "That All Shall be Saved",
      author: "David Bentley Hart",
      start: new Date(2019, 9, 8),
      end: new Date(2019, 9, 11),
      genre: "Nonfiction"
    },
    {
      title: "Rules for Visiting",
      author: "Jessica Francis Kane",
      start: new Date(2019, 9, 12),
      end: new Date(2019, 9, 13),
      genre: "Fiction"
    },
    {
      title: "Horror Stories",
      author: "Liz Phair",
      start: new Date(2019, 9, 13),
      end: new Date(2019, 9, 15),
      genre: "Nonfiction"
    },
    {
      title: "The First Rule of Punk",
      author: "Celia C. Pérez",
      start: new Date(2019, 9, 16),
      end: new Date(2019, 9, 17),
      genre: "Fiction"
    },
    {
      title: "The Tenth Muse",
      author: "Catherine Chung",
      start: new Date(2019, 9, 18),
      end: new Date(2019, 9, 20),
      genre: "Fiction"
    },
    {
      title: "Survival Math",
      author: "Mitchell S. Jackson",
      start: new Date(2019, 9, 19),
      end: new Date(2019, 9, 31),
      genre: "Nonfiction"
    },
    {
      title: "The Learning Curve",
      author: "Mandy Berman",
      start: new Date(2019, 9, 21),
      end: new Date(2019, 9, 23),
      genre: "Fiction"
    },
    {
      title: "Red at the Bone",
      author: "Jacqueline Woodson",
      start: new Date(2019, 10, 1),
      end: new Date(2019, 10, 2),
      genre: "Fiction"
    },
    {
      title: "The Secrets We Kept",
      author: "Lara Prescott",
      start: new Date(2019, 10, 2),
      end: new Date(2019, 10, 3),
      genre: "Fiction"
    },
    {
      title: "Tumbling",
      author: "Diane McKinney-Whetstone",
      start: new Date(2019, 10, 5),
      end: new Date(2019, 10, 13),
      genre: "Fiction"
    },
    {
      title: "Batgirl Vol. 5: Art of the Crime",
      author: "Mairghread Scott and Paul Pelletier",
      start: new Date(2019, 10, 10),
      end: new Date(2019, 10, 10),
      genre: "Comic"
    },
    {
      title: "Commonwealth",
      author: "Ann Patchett",
      start: new Date(2019, 10, 14),
      end: new Date(2019, 10, 17),
      genre: "Fiction"
    },
    {
      title: "Dominicana",
      author: "Angie Cruz",
      start: new Date(2019, 10, 17),
      end: new Date(2019, 10, 21),
      genre: "Fiction"
    },
    {
      title: "Paper Girls: Vol. 6",
      author: "Brian K. Vaughan and Cliff Chiang",
      start: new Date(2019, 10, 18),
      end: new Date(2019, 10, 18),
      genre: "Comic"
    },
    {
      title: "Shameless: A Sexual Reformation",
      author: "Nadia Bolz-Weber",
      start: new Date(2019, 10, 18),
      end: new Date(2019, 10, 18),
      genre: "Nonfiction"
    },
    {
      title: "The Snakes",
      author: "Sadie Jones",
      start: new Date(2019, 10, 22),
      end: new Date(2019, 10, 23),
      genre: "Fiction"
    },
    {
      title: "Does Jesus Really Love Me?",
      author: "Jeff Chu",
      start: new Date(2019, 10, 23),
      end: new Date(2019, 10, 29),
      genre: "Nonfiction"
    },
    {
      title: "Dept. of Speculation",
      author: "Jenny Offill",
      start: new Date(2019, 10, 24),
      end: new Date(2019, 10, 24),
      genre: "Fiction"
    },
    {
      title: "How We Fight for Our Lives: A Memoir",
      author: "Saeed Jones",
      start: new Date(2019, 10, 24),
      end: new Date(2019, 10, 24),
      genre: "Nonfiction"
    },
    {
      title: "In the Dream House: A Memoir",
      author: "Carmen Maria Machado",
      start: new Date(2019, 10, 25),
      end: new Date(2019, 10, 26),
      genre: "Nonfiction"
    },
    {
      title: "Persephone",
      author: "Loïc Locatelli-Kournwsky",
      start: new Date(2019, 10, 27),
      end: new Date(2019, 11, 18),
      genre: "Comic"
    },
    {
      title: "A History of the Bible",
      author: "John Barton",
      start: new Date(2019, 10, 27),
      end: new Date(2019, 11, 24),
      genre: "Nonfiction"
    },
    {
      title: "The Wildstorm, Vol. 4",
      author: "Warren Ellis and Jon Davis-Hunt",
      start: new Date(2019, 10, 28),
      end: new Date(2019, 11, 1),
      genre: "Comic"
    },
    {
      title: "The New Me",
      author: "Halle Butler",
      start: new Date(2019, 10, 28),
      end: new Date(2019, 10, 28),
      genre: "Fiction"
    },
    {
      title: "Inland",
      author: "Téa Obreht",
      start: new Date(2019, 10, 29),
      end: new Date(2019, 11, 3),
      genre: "Fiction"
    },
    {
      title: "The Travelers",
      author: "Regina Porter",
      start: new Date(2019, 11, 6),
      end: new Date(2019, 11, 15),
      genre: "Fiction"
    },
    {
      title: "Curious Toys",
      author: "Elizabeth Hand",
      start: new Date(2019, 11, 16),
      end: new Date(2019, 11, 20),
      genre: "Fiction"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      start: new Date(2019, 11, 24),
      end: new Date(2019, 11, 27),
      genre: "Fiction"
    },
    {
      title: "Three Women",
      author: "Lisa Taddeo",
      start: new Date(2019, 11, 29),
      end: new Date(2019, 11, 29),
      genre: "Nonfiction"
    },
    {
      title: "Trick Mirror",
      author: "Jia Tolentino",
      start: new Date(2019, 11, 30),
      end: new Date(2019, 11, 31),
      genre: "Nonfiction"
    }
  ],
  size: [1400, 1200],
  margin: { left: 400, top: 100, bottom: 50, right: 20 },
  type: "timeline",
  projection: "horizontal",
  oPadding: 2,
  oAccessor: "title",
  rAccessor: function(e) {
    return [e.start, e.end];
  },
  style: d => ({
    fill: theme[colors[d.genre] || 0],
    stroke: theme[(colors[d.genre] || 0) + 5]
  }),
  title: "Reading Log 2019",
  foregroundGraphics: Object.keys(colors)
    .concat(["Other"])
    .map((d, i) => (
      <text key={d} x={40} y={i * 20 + 30}>
        <tspan fontSize="20" fill={theme[colors[d] || 0]}>
          ●
        </tspan>{" "}
        {d}
      </text>
    )),
  axes: [{ orient: "top", ticks: 12, tickFormat: timescaleFormat }],
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
