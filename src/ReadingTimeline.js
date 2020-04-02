import React from "react";
import { OrdinalFrame } from "semiotic";
import { scaleTime } from "d3-scale";
import { timeFormat } from "d3-time-format";

var timescaleFormat = timeFormat("%b %e");
const timescale = scaleTime().domain([
  new Date(2019, 0, 1),
  new Date(2020, 0, 1)
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
      start_date: new Date(2019, 0, 2),
      end_date: new Date(2019, 0, 8),
      cover_image: "china-rich-girlfriend.jpg",
      genre: "Fiction"
    },
    {
      title: "Good and Mad",
      author: "Rebecca Traister",
      start_date: new Date(2019, 0, 2),
      end_date: new Date(2019, 0, 10),
      cover_image: "good-and-mad.jpg",
      genre: "Nonfiction"
    },
    {
      title: "The Long Way to a Small, Angry Planet",
      author: "Becky Chambers",
      start_date: new Date(2019, 0, 10),
      end_date: new Date(2019, 0, 19),
      cover_image: "the-long-way-to-a-small-angry-planet.jpg",
      genre: "Fiction"
    },
    {
      title: "The Friend",
      author: "Sigrid Nunez",
      start_date: new Date(2019, 0, 12),
      end_date: new Date(2019, 0, 13),
      cover_image: "the-friend.jpg",
      genre: "Fiction"
    },
    {
      title: "His Dark Materials: The Golden Compass",
      author: "Philip Pullman",
      start_date: new Date(2019, 0, 14),
      end_date: new Date(2019, 4, 12),
      cover_image: "his-dark-materials.jpg",
      genre: "Fiction"
    },
    {
      title: "Check, Please! (Book #1: #Hockey)",
      author: "Ngozi Ukazu",
      start_date: new Date(2019, 0, 19),
      end_date: new Date(2019, 1, 19),
      cover_image: "check-please-book1-hockey.jpg",
      genre: "Comic"
    },
    {
      title: "Flights",
      author: "Olga Tokarczuk",
      start_date: new Date(2019, 0, 19),
      end_date: new Date(2019, 1, 10),
      cover_image: "flights.jpg",
      genre: "Fiction"
    },
    {
      title: "Washington Black",
      author: "Esi Edugyan",
      start_date: new Date(2019, 0, 22),
      end_date: new Date(2019, 1, 1),
      cover_image: "washington-black.jpg",
      genre: "Fiction"
    },
    {
      title: "The Essex Serpent",
      author: "Sarah Perry",
      start_date: new Date(2019, 0, 26),
      end_date: new Date(2019, 1, 7),
      cover_image: "the-essex-serpent.jpg",
      genre: "Fiction"
    },
    {
      title: "The New Jim Crow",
      author: "Michelle Alexander",
      start_date: new Date(2019, 1, 4),
      end_date: new Date(2019, 2, 12),
      cover_image: "the-new-jim-crow.jpg",
      genre: "Nonfiction"
    },
    {
      title: "Upgrade Soul",
      author: "Ezra Clattan Daniels",
      start_date: new Date(2019, 1, 9, 1, 0),
      end_date: new Date(2019, 1, 9, 23, 0),
      cover_image: "upgrade-soul.jpg",
      genre: "Comic"
    },
    {
      title: "Melmoth",
      author: "Sarah Perry",
      start_date: new Date(2019, 1, 10),
      end_date: new Date(2019, 1, 17),
      cover_image: "melmoth.jpg",
      genre: "Fiction"
    },
    {
      title: "Today Will Be Different",
      author: "Maria Semple",
      start_date: new Date(2019, 1, 21),
      end_date: new Date(2019, 1, 22),
      cover_image: "today-will-be-different.jpg",
      genre: "Fiction"
    },
    {
      title: "The Mere Wife",
      author: "Maria Dahvana Headley",
      start_date: new Date(2019, 1, 23),
      end_date: new Date(2019, 1, 24),
      cover_image: "the-mere-wife.jpg",
      genre: "Fiction"
    },
    {
      title: "Eleanor Oliphant is completely fine",
      author: "Gail Honeyman",
      start_date: new Date(2019, 1, 24),
      end_date: new Date(2019, 1, 28),
      cover_image: "eleanor-oliphant-is-completely-fine.jpg",
      genre: "Fiction"
    },
    {
      title: "Black Panther: A Nation Under our Feet, Book Two",
      author: "Ta-Nehisi Coates",
      start_date: new Date(2019, 1, 26),
      end_date: new Date(2019, 2, 15),
      cover_image: "black-panther-a-nation-under-our-feet-book2.jpg",
      genre: "Comic"
    },
    {
      title: "Americanah",
      author: "Chimamanda Ngozi Adichie",
      start_date: new Date(2019, 2, 1),
      end_date: new Date(2019, 2, 8),
      cover_image: "americanah.jpg",
      genre: "Fiction"
    },
    {
      title: "The Power",
      author: "Naomi Alderman",
      start_date: new Date(2019, 2, 8),
      end_date: new Date(2019, 2, 15),
      cover_image: "the-power.jpg",
      genre: "Fiction"
    },
    {
      title: "Black Panther: A Nation Under our Feet, Book Three",
      author: "Ta-Nehisi Coates",
      start_date: new Date(2019, 2, 15),
      end_date: new Date(2019, 2, 16),
      cover_image: "black-panther-a-nation-under-our-feet-book3.jpg",
      genre: "Comic"
    },
    {
      title: "The Cross and The Lynching Tree",
      author: "James Cone",
      start_date: new Date(2019, 2, 15),
      end_date: new Date(2019, 2, 26),
      cover_image: "the-cross-and-the-lynching-tree.jpg",
      genre: "Nonfiction"
    },
    {
      title: "A Tale for the Time Being",
      author: "Ruth Ozeki",
      start_date: new Date(2019, 2, 16),
      end_date: new Date(2019, 2, 24),
      cover_image: "a-tale-for-the-time-being.jpg",
      genre: "Fiction"
    },
    {
      title: "Everything I Never Told You",
      author: "Celeste Ng",
      start_date: new Date(2019, 2, 18),
      end_date: new Date(2019, 2, 21),
      cover_image: "everything-i-never-told-you.jpg",
      genre: "Fiction"
    },
    {
      title: "The Wildstorm, Vol. 3",
      author: "Warren Ellis and Jon Davis-Hunt",
      start_date: new Date(2019, 2, 23),
      end_date: new Date(2019, 2, 24),
      cover_image: "the-wildstorm-vol3.jpg",
      genre: "Comic"
    },
    {
      title: "Mr. Fox",
      author: "Helen Oyeyemi",
      start_date: new Date(2019, 2, 29),
      end_date: new Date(2019, 3, 15),
      cover_image: "mr-fox.jpg",
      genre: "Fiction"
    },
    {
      title:
        "Parenting Forward: How to Raise Children with Justin, Mercy, and Kindness",
      author: "Cindy Wang Brandt",
      start_date: new Date(2019, 2, 30),
      end_date: new Date(2019, 3, 1),
      cover_image: "parenting-forward.jpg",
      genre: "Nonfiction"
    },
    {
      title: "The Library Book",
      author: "Susan Orlean",
      start_date: new Date(2019, 3, 2),
      end_date: new Date(2019, 3, 8),
      cover_image: "the-library-book.jpg",
      genre: "Nonfiction"
    },
    {
      title: "Bowlaway",
      author: "Elizabeth McCracken",
      start_date: new Date(2019, 3, 9),
      end_date: new Date(2019, 3, 24),
      cover_image: "bowlaway.jpg",
      genre: "Fiction"
    },
    {
      title: "Immigrant, Montana",
      author: "Amitava Kumar",
      start_date: new Date(2019, 3, 9),
      end_date: new Date(2019, 3, 16),
      cover_image: "immigrant-montana.jpg",
      genre: "Fiction"
    },
    {
      title: "My Heroes Have Always Been Junkies",
      author: "Ed Brubaker and Sean Phillips",
      start_date: new Date(2019, 3, 17),
      end_date: new Date(2019, 4, 3),
      cover_image: "my-heroes-have-always-been-junkies.jpg",
      genre: "Comic"
    },
    {
      title: "The Anatomy of Dreams",
      author: "Chloe Benjamin",
      start_date: new Date(2019, 3, 26),
      end_date: new Date(2019, 3, 28),
      cover_image: "the-anatomy-of-dreams.jpg",
      genre: "Fiction"
    },
    {
      title: "Infinite Detail",
      author: "Tim Maughan",
      start_date: new Date(2019, 3, 29),
      end_date: new Date(2019, 4, 2),
      cover_image: "infinite-detail.jpg",
      genre: "Fiction"
    },
    {
      title: "The Old Drift",
      author: "Namwali Serpell",
      start_date: new Date(2019, 4, 2),
      end_date: new Date(2019, 4, 26),
      cover_image: "the-old-drift.jpg",
      genre: "Fiction"
    },
    {
      title: "Where’d You Go, Bernadette?",
      author: "Maria Semple",
      start_date: new Date(2019, 4, 6),
      end_date: new Date(2019, 4, 15),
      cover_image: "whered-you-go-bernadette.jpg",
      genre: "Fiction"
    },
    {
      title: "The Land of Stories: The Enchantress Returns",
      author: "Chris Colfer",
      start_date: new Date(2019, 4, 12),
      end_date: new Date(2019, 8, 8),
      cover_image: "the-enchantress-returns.jpg",
      genre: "Fiction"
    },
    {
      title: "His Dark Materials: The Subtle Knife",
      author: "Philip Pullman",
      start_date: new Date(2019, 4, 13),
      end_date: new Date(2019, 8, 25),
      cover_image: "his-dark-materials.jpg",
      genre: "Fiction"
    },
    {
      title: "The Remains of the Day",
      author: "Kazuo Ishiguro",
      start_date: new Date(2019, 4, 15),
      end_date: new Date(2019, 4, 21),
      cover_image: "the-remains-of-the-day.jpg",
      genre: "Fiction"
    },
    {
      title: "Y: The Last Man: Vol. 1",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 4, 18),
      end_date: new Date(2019, 4, 19),
      cover_image: "y-the-last-man-vol1.jpg",
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 2",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 4, 19, 1, 0),
      end_date: new Date(2019, 4, 19, 23, 0),
      cover_image: "y-the-last-man-vol2.jpg",
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 3",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 4, 19, 1, 0),
      end_date: new Date(2019, 4, 19, 23, 0),
      cover_image: "y-the-last-man-vol3.jpg",
      genre: "Comic"
    },
    {
      title: "Rich People Problems",
      author: "Kevin Kwan",
      start_date: new Date(2019, 4, 21),
      end_date: new Date(2019, 4, 22),
      cover_image: "rich-people-problems.jpg",
      genre: "Fiction"
    },
    {
      title: "The Witch Elm",
      author: "Tana French",
      start_date: new Date(2019, 4, 24),
      end_date: new Date(2019, 4, 29),
      cover_image: "the-witch-elm.jpg",
      genre: "Fiction"
    },
    {
      title: "Euphoria",
      author: "Lily King",
      start_date: new Date(2019, 4, 31),
      end_date: new Date(2019, 5, 1),
      cover_image: "euphoria.jpg",
      genre: "Fiction"
    },
    {
      title: "Y: The Last Man: Vol. 4",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 5, 4, 1, 0),
      end_date: new Date(2019, 5, 4, 23, 0),
      cover_image: "y-the-last-man-vol4.jpg",
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 5",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 5, 4, 1, 0),
      end_date: new Date(2019, 5, 4, 23, 0),
      cover_image: "y-the-last-man-vol5.jpg",
      genre: "Comic"
    },
    {
      title: "Thick",
      author: "Tressie McMillan Cottom",
      start_date: new Date(2019, 5, 5),
      end_date: new Date(2019, 5, 10),
      cover_image: "thick.jpg",
      genre: "Nonfiction"
    },
    {
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      start_date: new Date(2019, 5, 11),
      end_date: new Date(2019, 5, 12),
      cover_image: "daisy-jones-and-the-six.jpg",
      genre: "Fiction"
    },
    {
      title: "Resilient Management",
      author: "Lara Hogan",
      start_date: new Date(2019, 5, 13),
      end_date: new Date(2019, 5, 21),
      cover_image: "resilient-management.png",
      genre: "Nonfiction"
    },
    {
      title: "Y: The Last Man: Vol. 6",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 5, 13, 1, 0),
      end_date: new Date(2019, 5, 13, 23, 0),
      cover_image: "y-the-last-man-vol6.jpg",
      genre: "Comic"
    },
    {
      title: "Pachinko",
      author: "Min Jin Lee",
      start_date: new Date(2019, 5, 15),
      end_date: new Date(2019, 5, 18),
      cover_image: "pachinko.jpg",
      genre: "Fiction"
    },
    {
      title: "Trust Exercise",
      author: "Susan Choi",
      start_date: new Date(2019, 5, 21),
      end_date: new Date(2019, 5, 22),
      cover_image: "trust-exercise.jpg",
      genre: "Fiction"
    },
    {
      title: "Lost and Wanted",
      author: "Nell Freudenberger",
      start_date: new Date(2019, 5, 22),
      end_date: new Date(2019, 5, 25),
      cover_image: "lost-and-wanted.jpg",
      genre: "Fiction"
    },
    {
      title: "Empress of Forever",
      author: "Max Gladstone",
      start_date: new Date(2019, 5, 25),
      end_date: new Date(2019, 6, 5),
      cover_image: "empress-of-forever.jpg",
      genre: "Fiction"
    },
    {
      title: "Y: The Last Man: Vol. 7",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 5, 29, 1, 0),
      end_date: new Date(2019, 5, 29, 23, 0),
      cover_image: "y-the-last-man-vol7.jpg",
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 8",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 5, 29, 1, 0),
      end_date: new Date(2019, 5, 29, 23, 0),
      cover_image: "y-the-last-man-vol8.jpg",
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 9",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 5, 30, 1, 0),
      end_date: new Date(2019, 5, 30, 23, 0),
      cover_image: "y-the-last-man-vol9.jpg",
      genre: "Comic"
    },
    {
      title: "Y: The Last Man: Vol. 10",
      author: "Brian K. Vaughan and Pia Guerra",
      start_date: new Date(2019, 6, 1, 1, 0),
      end_date: new Date(2019, 6, 1, 23, 0),
      cover_image: "y-the-last-man-vol10.jpg",
      genre: "Comic"
    },
    {
      title: "Normal People",
      author: "Sally Rooney",
      start_date: new Date(2019, 6, 2),
      end_date: new Date(2019, 6, 3),
      cover_image: "normal-people.jpg",
      genre: "Fiction"
    },
    {
      title: "In the Woods",
      author: "Tana French",
      start_date: new Date(2019, 6, 3),
      end_date: new Date(2019, 6, 4),
      cover_image: "in-the-woods.jpg",
      genre: "Fiction"
    },
    {
      title: "The Victorian Internet",
      author: "Tom Standage",
      start_date: new Date(2019, 6, 5),
      end_date: new Date(2019, 6, 8),
      cover_image: "the-victorian-internet.jpg",
      genre: "Nonfiction"
    },
    {
      title: "American Spy",
      author: "Lauren Wilkinson",
      start_date: new Date(2019, 6, 9),
      end_date: new Date(2019, 6, 11),
      cover_image: "american-spy.jpg",
      genre: "Fiction"
    },
    {
      title: "Severance",
      author: "Ling Ma",
      start_date: new Date(2019, 6, 11),
      end_date: new Date(2019, 6, 13),
      cover_image: "severance.jpg",
      genre: "Fiction"
    },
    {
      title: "The Parisian",
      author: "Isabella Hammad",
      start_date: new Date(2019, 6, 11),
      end_date: new Date(2019, 6, 16),
      cover_image: "the-parisian.jpg",
      genre: "Fiction"
    },
    {
      title: "Paper Girls: Vol. 3",
      author: "Brian K. Vaughan and Cliff Chiang",
      start_date: new Date(2019, 6, 16),
      end_date: new Date(2019, 6, 17),
      cover_image: "paper-girls-vol3.jpg",
      genre: "Comic"
    },
    {
      title: "The Other Americans",
      author: "Laila Lalami",
      start_date: new Date(2019, 6, 19),
      end_date: new Date(2019, 6, 22),
      cover_image: "the-other-americans.jpg",
      genre: "Fiction"
    },
    {
      title: "Paper Girls: Vol. 4",
      author: "Brian K. Vaughan and Cliff Chiang",
      start_date: new Date(2019, 6, 20, 1, 0),
      end_date: new Date(2019, 6, 20, 23, 0),
      cover_image: "paper-girls-vol4.jpg",
      genre: "Comic"
    },
    {
      title: "Paper Girls: Vol. 5",
      author: "Brian K. Vaughan and Cliff Chiang",
      start_date: new Date(2019, 6, 21, 1, 0),
      end_date: new Date(2019, 6, 21, 23, 0),
      cover_image: "paper-girls-vol5.jpg",
      genre: "Comic"
    },
    {
      title: "The Porpoise",
      author: "Mark Haddon",
      start_date: new Date(2019, 6, 23),
      end_date: new Date(2019, 6, 28),
      cover_image: "the-porpoise.jpg",
      genre: "Fiction"
    },
    {
      title: "Standard Deviation",
      author: "Katherine Heiny",
      start_date: new Date(2019, 6, 26),
      end_date: new Date(2019, 6, 27),
      cover_image: "standard-deviation.jpg",
      genre: "Fiction"
    },
    {
      title: "Conversations with Friends",
      author: "Sally Rooney",
      start_date: new Date(2019, 6, 27),
      end_date: new Date(2019, 6, 29),
      cover_image: "conversations-with-friends.jpg",
      genre: "Fiction"
    },
    {
      title: "Divided We Fail",
      author: "Sarah Garland",
      start_date: new Date(2019, 6, 29),
      end_date: new Date(2019, 8, 11),
      cover_image: "divided-we-fail.jpg",
      genre: "Nonfiction"
    },
    {
      title: "Beautiful Ruins",
      author: "Jess Walter",
      start_date: new Date(2019, 6, 30),
      end_date: new Date(2019, 7, 2),
      cover_image: "beautiful-ruins.jpg",
      genre: "Fiction"
    },
    {
      title: "A Brief History of Seven Killings",
      author: "Marlon James",
      start_date: new Date(2019, 7, 2),
      end_date: new Date(2019, 7, 9),
      cover_image: "a-brief-history-of-seven-killings.jpg",
      genre: "Fiction"
    },
    {
      title: "I Like to Watch",
      author: "Emily Nussbaum",
      start_date: new Date(2019, 7, 10),
      end_date: new Date(2019, 7, 12),
      cover_image: "i-like-to-watch.jpg",
      genre: "Nonfiction"
    },
    {
      title: "The Paragon Hotel",
      author: "Lyndsey Faye",
      start_date: new Date(2019, 7, 14),
      end_date: new Date(2019, 7, 18),
      cover_image: "the-paragon-hotel.jpg",
      genre: "Fiction"
    },
    {
      title: "Big Sky",
      author: "Kate Atkinson",
      start_date: new Date(2019, 7, 19),
      end_date: new Date(2019, 7, 20),
      cover_image: "big-sky.jpg",
      genre: "Fiction"
    },
    {
      title: "Lock Every Door",
      author: "Riley Sager",
      start_date: new Date(2019, 7, 21),
      end_date: new Date(2019, 7, 22),
      cover_image: "lock-every-door.jpg",
      genre: "Fiction"
    },
    {
      title: "Parable of the Sower",
      author: "Octavia Butler",
      start_date: new Date(2019, 7, 23),
      end_date: new Date(2019, 8, 15),
      cover_image: "parable-of-the-sower.jpg",
      genre: "Fiction"
    },
    {
      title: "Ms Marvel Vol. 5: Super Famous",
      author: "G. Willow Wilson and Takeshi Miyazawa",
      start_date: new Date(2019, 7, 25),
      end_date: new Date(2019, 7, 26),
      cover_image: "ms-marvel-vol5-super-famous.jpg",
      genre: "Comic"
    },
    {
      title: "Thor Vol. 1: The Goddess of Thunder",
      author: "Jason Aaron, Russel Dauterman, and Jorge Molina",
      start_date: new Date(2019, 7, 26, 1, 0),
      end_date: new Date(2019, 7, 26, 23, 0),
      cover_image: "thor-vol1-the-goddess-of-thunder.jpg",
      genre: "Comic"
    },
    {
      title: "Ms Marvel Vol. 6: Civil War II",
      author: "G. Willow Wilson and Takeshi Miyazawa",
      start_date: new Date(2019, 7, 31, 1, 0),
      end_date: new Date(2019, 7, 31, 23, 0),
      cover_image: "ms-marvel-vol6-civil-war-ii.jpg",
      genre: "Comic"
    },
    {
      title: "The Mighty Thor Vol. 1: Thunder in Her Veins",
      author: "Jason Aaron, Russel Dauterman",
      start_date: new Date(2019, 8, 1, 1, 0),
      end_date: new Date(2019, 8, 1, 23, 0),
      cover_image: "the-mighty-thor-vol1.jpg",
      genre: "Comic"
    },
    {
      title: "Ms Marvel Vol. 7: Damage per Second",
      author: "G. Willow Wilson and Takeshi Miyazawa",
      start_date: new Date(2019, 8, 2, 1, 0),
      end_date: new Date(2019, 8, 2, 23, 0),
      cover_image: "ms-marvel-vol7.jpg",
      genre: "Comic"
    },
    {
      title: "Prism Stalker Vol. 1",
      author: "Sloane Leong",
      start_date: new Date(2019, 8, 2),
      end_date: new Date(2019, 8, 7),
      cover_image: "prism-stalker-vol1.jpg",
      genre: "Comic"
    },
    {
      title: "On Earth We’re Briefly Gorgeous",
      author: "Ocean Vuong",
      start_date: new Date(2019, 8, 4),
      end_date: new Date(2019, 8, 8),
      cover_image: "on-earth-were-briefly-gorgeous.jpg",
      genre: "Fiction"
    },
    {
      title: "The Dearly Beloved",
      author: "Cara Wall",
      start_date: new Date(2019, 8, 14, 1, 0),
      end_date: new Date(2019, 8, 14, 23, 0),
      cover_image: "the-dearly-beloved.jpg",
      genre: "Fiction"
    },
    {
      title: "How to be an antiracist",
      author: "Ibram X. Kendi",
      start_date: new Date(2019, 8, 15),
      end_date: new Date(2019, 8, 25),
      cover_image: "how-to-be-an-antiracist.jpg",
      genre: "Nonfiction"
    },
    {
      title: "The Overstory",
      author: "Richard Powers",
      start_date: new Date(2019, 8, 21),
      end_date: new Date(2019, 8, 23),
      cover_image: "the-overstory.jpg",
      genre: "Fiction"
    },
    {
      title: "Fleishman is in Trouble",
      author: "Taffy Brodesser-Akner",
      start_date: new Date(2019, 8, 25),
      end_date: new Date(2019, 8, 26),
      cover_image: "fleishman-is-in-trouble.jpg",
      genre: "Fiction"
    },
    {
      title: "Go Ahead in the Rain: Notes to A Tribe Called Quest",
      author: "Hanif Abdurraquib",
      start_date: new Date(2019, 8, 27),
      end_date: new Date(2019, 8, 30),
      cover_image: "go-ahead-in-the-rain.jpg",
      genre: "Nonfiction"
    },
    {
      title: "Disappearing Earth",
      author: "Julia Phillips",
      start_date: new Date(2019, 8, 28),
      end_date: new Date(2019, 8, 29),
      cover_image: "disappearing-earth.jpg",
      genre: "Fiction"
    },
    {
      title: "Frankly in Love",
      author: "David Yoon",
      start_date: new Date(2019, 8, 30),
      end_date: new Date(2019, 9, 1),
      cover_image: "frankly-in-love.jpg",
      genre: "Fiction"
    },
    {
      title: "Everyday Information Architecture",
      author: "Lisa Maria Martin",
      start_date: new Date(2019, 9, 2),
      end_date: new Date(2019, 9, 12),
      cover_image: "everyday-information-architecture.png",
      genre: "Nonfiction"
    },
    {
      title: "We are Never Meeting in Real Life",
      author: "Samantha Irby",
      start_date: new Date(2019, 9, 6),
      end_date: new Date(2019, 11, 5),
      cover_image: "we-are-never-meeting-in-real-life.jpg",
      genre: "Nonfiction"
    },
    {
      title: "That All Shall be Saved",
      author: "David Bentley Hart",
      start_date: new Date(2019, 9, 8),
      end_date: new Date(2019, 9, 11),
      cover_image: "that-all-shall-be-saved.jpg",
      genre: "Nonfiction"
    },
    {
      title: "Rules for Visiting",
      author: "Jessica Francis Kane",
      start_date: new Date(2019, 9, 12),
      end_date: new Date(2019, 9, 13),
      cover_image: "rules-for-visiting.jpg",
      genre: "Fiction"
    },
    {
      title: "Horror Stories",
      author: "Liz Phair",
      start_date: new Date(2019, 9, 13),
      end_date: new Date(2019, 9, 15),
      cover_image: "horror-stories.jpg",
      genre: "Nonfiction"
    },
    {
      title: "The First Rule of Punk",
      author: "Celia C. Pérez",
      start_date: new Date(2019, 9, 16),
      end_date: new Date(2019, 9, 17),
      cover_image: "the-first-rule-of-punk.jpg",
      genre: "Fiction"
    },
    {
      title: "The Tenth Muse",
      author: "Catherine Chung",
      start_date: new Date(2019, 9, 18),
      end_date: new Date(2019, 9, 20),
      cover_image: "the-tenth-muse.jpg",
      genre: "Fiction"
    },
    {
      title: "Survival Math",
      author: "Mitchell S. Jackson",
      start_date: new Date(2019, 9, 19),
      end_date: new Date(2019, 9, 31),
      cover_image: "survival-math.jpg",
      genre: "Nonfiction"
    },
    {
      title: "The Learning Curve",
      author: "Mandy Berman",
      start_date: new Date(2019, 9, 21),
      end_date: new Date(2019, 9, 23),
      cover_image: "the-learning-curve.jpg",
      genre: "Fiction"
    },
    {
      title: "Red at the Bone",
      author: "Jacqueline Woodson",
      start_date: new Date(2019, 10, 1),
      end_date: new Date(2019, 10, 2),
      cover_image: "red-at-the-bone.jpg",
      genre: "Fiction"
    },
    {
      title: "The Secrets We Kept",
      author: "Lara Prescott",
      start_date: new Date(2019, 10, 2),
      end_date: new Date(2019, 10, 3),
      cover_image: "the-secrets-we-kept.jpg",
      genre: "Fiction"
    },
    {
      title: "Tumbling",
      author: "Diane McKinney-Whetstone",
      start_date: new Date(2019, 10, 5),
      end_date: new Date(2019, 10, 13),
      cover_image: "tumbling.jpg",
      genre: "Fiction"
    },
    {
      title: "Batgirl Vol. 5: Art of the Crime",
      author: "Mairghread Scott and Paul Pelletier",
      start_date: new Date(2019, 10, 10, 1, 0),
      end_date: new Date(2019, 10, 10, 23, 0),
      cover_image: "batgirl-vol5-art-of-the-crime.jpg",
      genre: "Comic"
    },
    {
      title: "Commonwealth",
      author: "Ann Patchett",
      start_date: new Date(2019, 10, 14),
      end_date: new Date(2019, 10, 17),
      cover_image: "commonwealth.jpg",
      genre: "Fiction"
    },
    {
      title: "Dominicana",
      author: "Angie Cruz",
      start_date: new Date(2019, 10, 17),
      end_date: new Date(2019, 10, 21),
      cover_image: "dominicana.jpg",
      genre: "Fiction"
    },
    {
      title: "Paper Girls: Vol. 6",
      author: "Brian K. Vaughan and Cliff Chiang",
      start_date: new Date(2019, 10, 18, 1, 0),
      end_date: new Date(2019, 10, 18, 23, 0),
      cover_image: "paper-girls-vol6.jpg",
      genre: "Comic"
    },
    {
      title: "Shameless: A Sexual Reformation",
      author: "Nadia Bolz-Weber",
      start_date: new Date(2019, 10, 18, 1, 0),
      end_date: new Date(2019, 10, 18, 23, 0),
      cover_image: "shameless.jpg",
      genre: "Nonfiction"
    },
    {
      title: "The Snakes",
      author: "Sadie Jones",
      start_date: new Date(2019, 10, 22),
      end_date: new Date(2019, 10, 23),
      cover_image: "the-snakes.jpg",
      genre: "Fiction"
    },
    {
      title: "Does Jesus Really Love Me?",
      author: "Jeff Chu",
      start_date: new Date(2019, 10, 23),
      end_date: new Date(2019, 10, 29),
      cover_image: "does-jesus-really-love-me.jpg",
      genre: "Nonfiction"
    },
    {
      title: "Dept. of Speculation",
      author: "Jenny Offill",
      start_date: new Date(2019, 10, 24, 1, 0),
      end_date: new Date(2019, 10, 24, 23, 0),
      cover_image: "dept-of-speculation.jpg",
      genre: "Fiction"
    },
    {
      title: "How We Fight for Our Lives: A Memoir",
      author: "Saeed Jones",
      start_date: new Date(2019, 10, 24, 1, 0),
      end_date: new Date(2019, 10, 24, 23, 0),
      cover_image: "how-we-fight-for-our-lives.jpg",
      genre: "Nonfiction"
    },
    {
      title: "In the Dream House: A Memoir",
      author: "Carmen Maria Machado",
      start_date: new Date(2019, 10, 25),
      end_date: new Date(2019, 10, 26),
      cover_image: "in-the-dream-house.jpg",
      genre: "Nonfiction"
    },
    {
      title: "Persephone",
      author: "Loïc Locatelli-Kournwsky",
      start_date: new Date(2019, 10, 27),
      end_date: new Date(2019, 11, 18),
      cover_image: "persephone.jpg",
      genre: "Comic"
    },
    {
      title: "A History of the Bible",
      author: "John Barton",
      start_date: new Date(2019, 10, 27),
      end_date: new Date(2019, 11, 24),
      cover_image: "a-history-of-the-bible.jpg",
      genre: "Nonfiction"
    },
    {
      title: "The Wildstorm, Vol. 4",
      author: "Warren Ellis and Jon Davis-Hunt",
      start_date: new Date(2019, 10, 28),
      end_date: new Date(2019, 11, 1),
      cover_image: "the-wildstorm-vol4.jpg",
      genre: "Comic"
    },
    {
      title: "The New Me",
      author: "Halle Butler",
      start_date: new Date(2019, 10, 28, 1, 0),
      end_date: new Date(2019, 10, 28, 23, 0),
      cover_image: "the-new-me.jpg",
      genre: "Fiction"
    },
    {
      title: "Inland",
      author: "Téa Obreht",
      start_date: new Date(2019, 10, 29),
      end_date: new Date(2019, 11, 3),
      cover_image: "inland.jpg",
      genre: "Fiction"
    },
    {
      title: "The Travelers",
      author: "Regina Porter",
      start_date: new Date(2019, 11, 6),
      end_date: new Date(2019, 11, 15),
      cover_image: "the-travelers.jpg",
      genre: "Fiction"
    },
    {
      title: "Curious Toys",
      author: "Elizabeth Hand",
      start_date: new Date(2019, 11, 16),
      end_date: new Date(2019, 11, 20),
      cover_image: "curious-toys.jpg",
      genre: "Fiction"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      start_date: new Date(2019, 11, 24),
      end_date: new Date(2019, 11, 27),
      cover_image: "dune.jpg",
      genre: "Fiction"
    },
    {
      title: "Three Women",
      author: "Lisa Taddeo",
      start_date: new Date(2019, 11, 29, 1, 0),
      end_date: new Date(2019, 11, 29, 23, 0),
      cover_image: "three-women.jpg",
      genre: "Nonfiction"
    },
    {
      title: "Trick Mirror",
      author: "Jia Tolentino",
      start_date: new Date(2019, 11, 31, 1, 0),
      end_date: new Date(2020, 0, 1),
      cover_image: "trick-mirror.jpg",
      genre: "Nonfiction"
    }
  ],
  size: [1400, 1600],
  margin: { left: 400, top: 100, bottom: 50, right: 20 },
  type: "timeline",
  projection: "horizontal",
  oPadding: 2,
  oAccessor: "title",
  rAccessor: function(e) {
    return [e.start_date, e.end_date];
  },
  style: d => ({
    fill: theme[colors[d.genre] || 0],
    stroke: theme[(colors[d.genre] || 0) + 5]
  }),
  title: "Reading Log 2019",
  foregroundGraphics: Object.keys(colors)
    // .concat(["Other"])
    .map((d, i) => (
      <text key={d} x={40} y={i * 20 + 30}>
        <tspan fontSize="20" fill={theme[colors[d] || 0]}>
          ●
        </tspan>{" "}
        {d}
      </text>
    )),
  axes: [
    { orient: "top", ticks: 12, tickFormat: timescaleFormat, label: "Month" }
  ],
  oLabel: d => (
    <text textAnchor="end" fontSize="11">
      {d}
    </text>
  ),
  rScaleType: timescale,
  pieceHoverAnnotation: true,
  hoverAnnotation: true,
  tooltipContent: d => (
    <div className="tooltip-content">
      <div className="tooltip-book-image">
        <img
          src={require(`./img/${d.cover_image}`)}
          alt="Cover for {d.title}"
        ></img>
      </div>
      <div className="tooltip-book-meta">
        <h2>{d.title}</h2>
        <p>by {d.author}</p>
        <p>Started: {d.start_date.toLocaleDateString("en-US")}</p>
        <p>Finished: {d.end_date.toLocaleDateString("en-US")}</p>
        <p></p>
      </div>
    </div>
  )
};

class ReadingTimeline extends React.Component {
  render() {
    return <OrdinalFrame {...frameProps} />;
  }
}

export default ReadingTimeline;
