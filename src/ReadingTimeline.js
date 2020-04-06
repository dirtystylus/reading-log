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
      display_title: "China Rich Girlfriend",
      author: "Kevin Kwan",
      cover_image: "china-rich-girlfriend.jpg",
      genre: "Fiction",
      start_date: "2019/1/2",
      end_date: "2019/1/8"
    },
    {
      title: "Good and Mad",
      display_title: "Good and Mad",
      author: "Rebecca Traister",
      cover_image: "good-and-mad.jpg",
      genre: "Nonfiction",
      start_date: "2019/1/2",
      end_date: "2019/1/10"
    },
    {
      title: "The Long Way to a Small, Angry Planet",
      display_title: "The Long Way to a Small, Angry Planet",
      author: "Becky Chambers",
      cover_image: "the-long-way-to-a-small-angry-planet.jpg",
      genre: "Fiction",
      start_date: "2019/1/10",
      end_date: "2019/1/19"
    },
    {
      title: "The Friend",
      display_title: "The Friend",
      author: "Sigrid Nunez",
      cover_image: "the-friend.jpg",
      genre: "Fiction",
      start_date: "2019/1/12",
      end_date: "2019/1/13"
    },
    {
      title: "His Dark Materials: The Golden Compass",
      display_title: "His Dark Materials: The Golden Compass",
      author: "Philip Pullman",
      cover_image: "his-dark-materials.jpg",
      genre: "Fiction",
      start_date: "2019/1/14",
      end_date: "2019/5/12"
    },
    {
      title: "Check, Please! (Book #1: #Hockey)",
      display_title: "Check, Please! (Book #1: #Hockey)",
      author: "Ngozi Ukazu",
      cover_image: "check-please-book1-hockey.jpg",
      genre: "Comic",
      start_date: "2019/1/19",
      end_date: "2019/2/19"
    },
    {
      title: "Flights",
      display_title: "Flights",
      author: "Olga Tokarczuk",
      cover_image: "flights.jpg",
      genre: "Fiction",
      start_date: "2019/1/19",
      end_date: "2019/2/10"
    },
    {
      title: "Washington Black",
      display_title: "Washington Black",
      author: "Esi Edugyan",
      cover_image: "washington-black.jpg",
      genre: "Fiction",
      start_date: "2019/1/22",
      end_date: "2019/2/1"
    },
    {
      title: "The Essex Serpent",
      display_title: "The Essex Serpent",
      author: "Sarah Perry",
      cover_image: "the-essex-serpent.jpg",
      genre: "Fiction",
      start_date: "2019/1/26",
      end_date: "2019/2/7"
    },
    {
      title: "The New Jim Crow",
      display_title: "The New Jim Crow",
      author: "Michelle Alexander",
      cover_image: "the-new-jim-crow.jpg",
      genre: "Nonfiction",
      start_date: "2019/2/4",
      end_date: "2019/3/12"
    },
    {
      title: "Upgrade Soul",
      display_title: "Upgrade Soul",
      author: "Ezra Clattan Daniels",
      cover_image: "upgrade-soul.jpg",
      genre: "Comic",
      start_date: "2019/2/9 1:00",
      end_date: "2019/2/9 23:00"
    },
    {
      title: "Melmoth",
      display_title: "Melmoth",
      author: "Sarah Perry",
      cover_image: "melmoth.jpg",
      genre: "Fiction",
      start_date: "2019/2/10",
      end_date: "2019/2/17"
    },
    {
      title: "Today Will Be Different",
      display_title: "Today Will Be Different",
      author: "Maria Semple",
      cover_image: "today-will-be-different.jpg",
      genre: "Fiction",
      start_date: "2019/2/21",
      end_date: "2019/2/22"
    },
    {
      title: "The Mere Wife",
      display_title: "The Mere Wife",
      author: "Maria Dahvana Headley",
      cover_image: "the-mere-wife.jpg",
      genre: "Fiction",
      start_date: "2019/2/23",
      end_date: "2019/2/24"
    },
    {
      title: "Eleanor Oliphant is completely fine",
      display_title: "Eleanor Oliphant is completely fine",
      author: "Gail Honeyman",
      cover_image: "eleanor-oliphant-is-completely-fine.jpg",
      genre: "Fiction",
      start_date: "2019/2/24",
      end_date: "2019/2/28"
    },
    {
      title: "Black Panther: A Nation Under our Feet, Book Two",
      display_title: "Black Panther: A Nation Under our Feet, Book Two",
      author: "Ta-Nehisi Coates",
      cover_image: "black-panther-a-nation-under-our-feet-book2.jpg",
      genre: "Comic",
      start_date: "2019/2/26",
      end_date: "2019/3/15"
    },
    {
      title: "Americanah",
      display_title: "Americanah",
      author: "Chimamanda Ngozi Adichie",
      cover_image: "americanah.jpg",
      genre: "Fiction",
      start_date: "2019/3/1",
      end_date: "2019/3/8"
    },
    {
      title: "The Power",
      display_title: "The Power",
      author: "Naomi Alderman",
      cover_image: "the-power.jpg",
      genre: "Fiction",
      start_date: "2019/3/8",
      end_date: "2019/3/15"
    },
    {
      title: "Black Panther: A Nation Under our Feet, Book Three",
      display_title: "Black Panther: A Nation Under our Feet, Book Three",
      author: "Ta-Nehisi Coates",
      cover_image: "black-panther-a-nation-under-our-feet-book3.jpg",
      genre: "Comic",
      start_date: "2019/3/15",
      end_date: "2019/3/16"
    },
    {
      title: "The Cross and The Lynching Tree",
      display_title: "The Cross and The Lynching Tree",
      author: "James Cone",
      cover_image: "the-cross-and-the-lynching-tree.jpg",
      genre: "Nonfiction",
      start_date: "2019/3/15",
      end_date: "2019/3/26"
    },
    {
      title: "A Tale for the Time Being",
      display_title: "A Tale for the Time Being",
      author: "Ruth Ozeki",
      cover_image: "a-tale-for-the-time-being.jpg",
      genre: "Fiction",
      start_date: "2019/3/16",
      end_date: "2019/3/24"
    },
    {
      title: "Everything I Never Told You",
      display_title: "Everything I Never Told You",
      author: "Celeste Ng",
      cover_image: "everything-i-never-told-you.jpg",
      genre: "Fiction",
      start_date: "2019/3/18",
      end_date: "2019/3/21"
    },
    {
      title: "The Wildstorm, Vol. 3",
      display_title: "The Wildstorm, Vol. 3",
      author: "Warren Ellis and Jon Davis-Hunt",
      cover_image: "the-wildstorm-vol3.jpg",
      genre: "Comic",
      start_date: "2019/3/23",
      end_date: "2019/3/24"
    },
    {
      title: "Mr. Fox",
      display_title: "Mr. Fox",
      author: "Helen Oyeyemi",
      cover_image: "mr-fox.jpg",
      genre: "Fiction",
      start_date: "2019/3/29",
      end_date: "2019/4/15"
    },
    {
      title:
        "Parenting Forward: How to Raise Children with Justice, Mercy, and Kindness",
      display_title: "Parenting Forward",
      author: "Cindy Wang Brandt",
      cover_image: "parenting-forward.jpg",
      genre: "Nonfiction",
      start_date: "2019/3/30",
      end_date: "2019/4/1"
    },
    {
      title: "The Library Book",
      display_title: "The Library Book",
      author: "Susan Orlean",
      cover_image: "the-library-book.jpg",
      genre: "Nonfiction",
      start_date: "2019/4/2",
      end_date: "2019/4/8"
    },
    {
      title: "Bowlaway",
      display_title: "Bowlaway",
      author: "Elizabeth McCracken",
      cover_image: "bowlaway.jpg",
      genre: "Fiction",
      start_date: "2019/4/9",
      end_date: "2019/4/24"
    },
    {
      title: "Immigrant, Montana",
      display_title: "Immigrant, Montana",
      author: "Amitava Kumar",
      cover_image: "immigrant-montana.jpg",
      genre: "Fiction",
      start_date: "2019/4/9",
      end_date: "2019/4/16"
    },
    {
      title: "My Heroes Have Always Been Junkies",
      display_title: "My Heroes Have Always Been Junkies",
      author: "Ed Brubaker and Sean Phillips",
      cover_image: "my-heroes-have-always-been-junkies.jpg",
      genre: "Comic",
      start_date: "2019/4/17",
      end_date: "2019/5/3"
    },
    {
      title: "The Anatomy of Dreams",
      display_title: "The Anatomy of Dreams",
      author: "Chloe Benjamin",
      cover_image: "the-anatomy-of-dreams.jpg",
      genre: "Fiction",
      start_date: "2019/4/26",
      end_date: "2019/4/28"
    },
    {
      title: "Infinite Detail",
      display_title: "Infinite Detail",
      author: "Tim Maughan",
      cover_image: "infinite-detail.jpg",
      genre: "Fiction",
      start_date: "2019/4/29",
      end_date: "2019/5/2"
    },
    {
      title: "The Old Drift",
      display_title: "The Old Drift",
      author: "Namwali Serpell",
      cover_image: "the-old-drift.jpg",
      genre: "Fiction",
      start_date: "2019/5/2",
      end_date: "2019/5/26"
    },
    {
      title: "Where’d You Go, Bernadette?",
      display_title: "Where’d You Go, Bernadette?",
      author: "Maria Semple",
      cover_image: "whered-you-go-bernadette.jpg",
      genre: "Fiction",
      start_date: "2019/5/6",
      end_date: "2019/5/15"
    },
    {
      title: "The Land of Stories: The Enchantress Returns",
      display_title: "The Land of Stories: The Enchantress Returns",
      author: "Chris Colfer",
      cover_image: "the-enchantress-returns.jpg",
      genre: "Fiction",
      start_date: "2019/5/12",
      end_date: "2019/9/8"
    },
    {
      title: "His Dark Materials: The Subtle Knife",
      display_title: "His Dark Materials: The Subtle Knife",
      author: "Philip Pullman",
      cover_image: "his-dark-materials.jpg",
      genre: "Fiction",
      start_date: "2019/5/13",
      end_date: "2019/9/25"
    },
    {
      title: "The Remains of the Day",
      display_title: "The Remains of the Day",
      author: "Kazuo Ishiguro",
      cover_image: "the-remains-of-the-day.jpg",
      genre: "Fiction",
      start_date: "2019/5/15",
      end_date: "2019/5/21"
    },
    {
      title: "Y: The Last Man: Vol. 1",
      display_title: "Y: The Last Man: Vol. 1",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol1.jpg",
      genre: "Comic",
      start_date: "2019/5/18",
      end_date: "2019/5/19"
    },
    {
      title: "Y: The Last Man: Vol. 2",
      display_title: "Y: The Last Man: Vol. 2",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol2.jpg",
      genre: "Comic",
      start_date: "2019/5/19 1:00",
      end_date: "2019/5/19 23:00"
    },
    {
      title: "Y: The Last Man: Vol. 3",
      display_title: "Y: The Last Man: Vol. 3",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol3.jpg",
      genre: "Comic",
      start_date: "2019/5/19 1:00",
      end_date: "2019/5/19 23:00"
    },
    {
      title: "Rich People Problems",
      display_title: "Rich People Problems",
      author: "Kevin Kwan",
      cover_image: "rich-people-problems.jpg",
      genre: "Fiction",
      start_date: "2019/5/21",
      end_date: "2019/5/22"
    },
    {
      title: "The Witch Elm",
      display_title: "The Witch Elm",
      author: "Tana French",
      cover_image: "the-witch-elm.jpg",
      genre: "Fiction",
      start_date: "2019/5/24",
      end_date: "2019/5/29"
    },
    {
      title: "Euphoria",
      display_title: "Euphoria",
      author: "Lily King",
      cover_image: "euphoria.jpg",
      genre: "Fiction",
      start_date: "2019/5/31",
      end_date: "2019/6/1"
    },
    {
      title: "Y: The Last Man: Vol. 4",
      display_title: "Y: The Last Man: Vol. 4",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol4.jpg",
      genre: "Comic",
      start_date: "2019/6/4 1:00",
      end_date: "2019/6/4 23:00"
    },
    {
      title: "Y: The Last Man: Vol. 5",
      display_title: "Y: The Last Man: Vol. 5",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol5.jpg",
      genre: "Comic",
      start_date: "2019/6/4 1:00",
      end_date: "2019/6/4 23:00"
    },
    {
      title: "Thick",
      display_title: "Thick",
      author: "Tressie McMillan Cottom",
      cover_image: "thick.jpg",
      genre: "Nonfiction",
      start_date: "2019/6/5",
      end_date: "2019/6/10"
    },
    {
      title: "Daisy Jones & The Six",
      display_title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      cover_image: "daisy-jones-and-the-six.jpg",
      genre: "Fiction",
      start_date: "2019/6/11",
      end_date: "2019/6/12"
    },
    {
      title: "Resilient Management",
      display_title: "Resilient Management",
      author: "Lara Hogan",
      cover_image: "resilient-management.png",
      genre: "Nonfiction",
      start_date: "2019/6/13",
      end_date: "2019/6/21"
    },
    {
      title: "Y: The Last Man: Vol. 6",
      display_title: "Y: The Last Man: Vol. 6",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol6.jpg",
      genre: "Comic",
      start_date: "2019/6/13 1:00",
      end_date: "2019/6/13 23:00"
    },
    {
      title: "Pachinko",
      display_title: "Pachinko",
      author: "Min Jin Lee",
      cover_image: "pachinko.jpg",
      genre: "Fiction",
      start_date: "2019/6/15",
      end_date: "2019/6/18"
    },
    {
      title: "Trust Exercise",
      display_title: "Trust Exercise",
      author: "Susan Choi",
      cover_image: "trust-exercise.jpg",
      genre: "Fiction",
      start_date: "2019/6/21",
      end_date: "2019/6/22"
    },
    {
      title: "Lost and Wanted",
      display_title: "Lost and Wanted",
      author: "Nell Freudenberger",
      cover_image: "lost-and-wanted.jpg",
      genre: "Fiction",
      start_date: "2019/6/22",
      end_date: "2019/6/25"
    },
    {
      title: "Empress of Forever",
      display_title: "Empress of Forever",
      author: "Max Gladstone",
      cover_image: "empress-of-forever.jpg",
      genre: "Fiction",
      start_date: "2019/6/25",
      end_date: "2019/7/5"
    },
    {
      title: "Y: The Last Man: Vol. 7",
      display_title: "Y: The Last Man: Vol. 7",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol7.jpg",
      genre: "Comic",
      start_date: "2019/6/29 1:00",
      end_date: "2019/6/29 23:00"
    },
    {
      title: "Y: The Last Man: Vol. 8",
      display_title: "Y: The Last Man: Vol. 8",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol8.jpg",
      genre: "Comic",
      start_date: "2019/6/29 1:00",
      end_date: "2019/6/29 23:00"
    },
    {
      title: "Y: The Last Man: Vol. 9",
      display_title: "Y: The Last Man: Vol. 9",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol9.jpg",
      genre: "Comic",
      start_date: "2019/6/30 1:00",
      end_date: "2019/6/30 23:00"
    },
    {
      title: "Y: The Last Man: Vol. 10",
      display_title: "Y: The Last Man: Vol. 10",
      author: "Brian K. Vaughan and Pia Guerra",
      cover_image: "y-the-last-man-vol10.jpg",
      genre: "Comic",
      start_date: "2019/7/1 1:00",
      end_date: "2019/7/1 23:00"
    },
    {
      title: "Normal People",
      display_title: "Normal People",
      author: "Sally Rooney",
      cover_image: "normal-people.jpg",
      genre: "Fiction",
      start_date: "2019/7/2",
      end_date: "2019/7/3"
    },
    {
      title: "In the Woods",
      display_title: "In the Woods",
      author: "Tana French",
      cover_image: "in-the-woods.jpg",
      genre: "Fiction",
      start_date: "2019/7/3",
      end_date: "2019/7/4"
    },
    {
      title: "The Victorian Internet",
      display_title: "The Victorian Internet",
      author: "Tom Standage",
      cover_image: "the-victorian-internet.jpg",
      genre: "Nonfiction",
      start_date: "2019/7/5",
      end_date: "2019/7/8"
    },
    {
      title: "American Spy",
      display_title: "American Spy",
      author: "Lauren Wilkinson",
      cover_image: "american-spy.jpg",
      genre: "Fiction",
      start_date: "2019/7/9",
      end_date: "2019/7/11"
    },
    {
      title: "Severance",
      display_title: "Severance",
      author: "Ling Ma",
      cover_image: "severance.jpg",
      genre: "Fiction",
      start_date: "2019/7/11",
      end_date: "2019/7/13"
    },
    {
      title: "The Parisian",
      display_title: "The Parisian",
      author: "Isabella Hammad",
      cover_image: "the-parisian.jpg",
      genre: "Fiction",
      start_date: "2019/7/11",
      end_date: "2019/7/16"
    },
    {
      title: "Paper Girls: Vol. 3",
      display_title: "Paper Girls: Vol. 3",
      author: "Brian K. Vaughan and Cliff Chiang",
      cover_image: "paper-girls-vol3.jpg",
      genre: "Comic",
      start_date: "2019/7/16",
      end_date: "2019/7/17"
    },
    {
      title: "The Other Americans",
      display_title: "The Other Americans",
      author: "Laila Lalami",
      cover_image: "the-other-americans.jpg",
      genre: "Fiction",
      start_date: "2019/7/19",
      end_date: "2019/7/22"
    },
    {
      title: "Paper Girls: Vol. 4",
      display_title: "Paper Girls: Vol. 4",
      author: "Brian K. Vaughan and Cliff Chiang",
      cover_image: "paper-girls-vol4.jpg",
      genre: "Comic",
      start_date: "2019/7/20 1:00",
      end_date: "2019/7/20 23:00"
    },
    {
      title: "Paper Girls: Vol. 5",
      display_title: "Paper Girls: Vol. 5",
      author: "Brian K. Vaughan and Cliff Chiang",
      cover_image: "paper-girls-vol5.jpg",
      genre: "Comic",
      start_date: "2019/7/21 1:00",
      end_date: "2019/7/21 23:00"
    },
    {
      title: "The Porpoise",
      display_title: "The Porpoise",
      author: "Mark Haddon",
      cover_image: "the-porpoise.jpg",
      genre: "Fiction",
      start_date: "2019/7/23",
      end_date: "2019/7/28"
    },
    {
      title: "Standard Deviation",
      display_title: "Standard Deviation",
      author: "Katherine Heiny",
      cover_image: "standard-deviation.jpg",
      genre: "Fiction",
      start_date: "2019/7/26",
      end_date: "2019/7/27"
    },
    {
      title: "Conversations with Friends",
      display_title: "Conversations with Friends",
      author: "Sally Rooney",
      cover_image: "conversations-with-friends.jpg",
      genre: "Fiction",
      start_date: "2019/7/27",
      end_date: "2019/7/29"
    },
    {
      title: "Divided We Fail",
      display_title: "Divided We Fail",
      author: "Sarah Garland",
      cover_image: "divided-we-fail.jpg",
      genre: "Nonfiction",
      start_date: "2019/7/29",
      end_date: "2019/9/11"
    },
    {
      title: "Beautiful Ruins",
      display_title: "Beautiful Ruins",
      author: "Jess Walter",
      cover_image: "beautiful-ruins.jpg",
      genre: "Fiction",
      start_date: "2019/7/30",
      end_date: "2019/8/2"
    },
    {
      title: "A Brief History of Seven Killings",
      display_title: "A Brief History of Seven Killings",
      author: "Marlon James",
      cover_image: "a-brief-history-of-seven-killings.jpg",
      genre: "Fiction",
      start_date: "2019/8/2",
      end_date: "2019/8/9"
    },
    {
      title: "I Like to Watch",
      display_title: "I Like to Watch",
      author: "Emily Nussbaum",
      cover_image: "i-like-to-watch.jpg",
      genre: "Nonfiction",
      start_date: "2019/8/10",
      end_date: "2019/8/12"
    },
    {
      title: "The Paragon Hotel",
      display_title: "The Paragon Hotel",
      author: "Lyndsey Faye",
      cover_image: "the-paragon-hotel.jpg",
      genre: "Fiction",
      start_date: "2019/8/14",
      end_date: "2019/8/18"
    },
    {
      title: "Big Sky",
      display_title: "Big Sky",
      author: "Kate Atkinson",
      cover_image: "big-sky.jpg",
      genre: "Fiction",
      start_date: "2019/8/19",
      end_date: "2019/8/20"
    },
    {
      title: "Lock Every Door",
      display_title: "Lock Every Door",
      author: "Riley Sager",
      cover_image: "lock-every-door.jpg",
      genre: "Fiction",
      start_date: "2019/8/21",
      end_date: "2019/8/22"
    },
    {
      title: "Parable of the Sower",
      display_title: "Parable of the Sower",
      author: "Octavia Butler",
      cover_image: "parable-of-the-sower.jpg",
      genre: "Fiction",
      start_date: "2019/8/23",
      end_date: "2019/9/15"
    },
    {
      title: "Ms Marvel Vol. 5: Super Famous",
      display_title: "Ms Marvel Vol. 5: Super Famous",
      author: "G. Willow Wilson and Takeshi Miyazawa",
      cover_image: "ms-marvel-vol5-super-famous.jpg",
      genre: "Comic",
      start_date: "2019/8/25",
      end_date: "2019/8/26"
    },
    {
      title: "Thor Vol. 1: The Goddess of Thunder",
      display_title: "Thor Vol. 1: The Goddess of Thunder",
      author: "Jason Aaron, Russel Dauterman, and Jorge Molina",
      cover_image: "thor-vol1-the-goddess-of-thunder.jpg",
      genre: "Comic",
      start_date: "2019/8/26 1:00",
      end_date: "2019/8/26 23:00"
    },
    {
      title: "Ms Marvel Vol. 6: Civil War II",
      display_title: "Ms Marvel Vol. 6: Civil War II",
      author: "G. Willow Wilson and Takeshi Miyazawa",
      cover_image: "ms-marvel-vol6-civil-war-ii.jpg",
      genre: "Comic",
      start_date: "2019/8/31 1:00",
      end_date: "2019/8/31 23:00"
    },
    {
      title: "The Mighty Thor Vol. 1: Thunder in Her Veins",
      display_title: "The Mighty Thor Vol. 1: Thunder in Her Veins",
      author: "Jason Aaron, Russel Dauterman",
      cover_image: "the-mighty-thor-vol1.jpg",
      genre: "Comic",
      start_date: "2019/9/1 1:00",
      end_date: "2019/9/1 23:00"
    },
    {
      title: "Ms Marvel Vol. 7: Damage per Second",
      display_title: "Ms Marvel Vol. 7: Damage per Second",
      author: "G. Willow Wilson and Takeshi Miyazawa",
      cover_image: "ms-marvel-vol7.jpg",
      genre: "Comic",
      start_date: "2019/9/2 1:00",
      end_date: "2019/9/2 23:00"
    },
    {
      title: "Prism Stalker Vol. 1",
      display_title: "Prism Stalker Vol. 1",
      author: "Sloane Leong",
      cover_image: "prism-stalker-vol1.jpg",
      genre: "Comic",
      start_date: "2019/9/2",
      end_date: "2019/9/7"
    },
    {
      title: "On Earth We’re Briefly Gorgeous",
      display_title: "On Earth We’re Briefly Gorgeous",
      author: "Ocean Vuong",
      cover_image: "on-earth-were-briefly-gorgeous.jpg",
      genre: "Fiction",
      start_date: "2019/9/4",
      end_date: "2019/9/8"
    },
    {
      title: "The Dearly Beloved",
      display_title: "The Dearly Beloved",
      author: "Cara Wall",
      cover_image: "the-dearly-beloved.jpg",
      genre: "Fiction",
      start_date: "2019/9/14 1:00",
      end_date: "2019/9/14 23:00"
    },
    {
      title: "How to be an antiracist",
      display_title: "How to be an antiracist",
      author: "Ibram X. Kendi",
      cover_image: "how-to-be-an-antiracist.jpg",
      genre: "Nonfiction",
      start_date: "2019/9/15",
      end_date: "2019/9/25"
    },
    {
      title: "The Overstory",
      display_title: "The Overstory",
      author: "Richard Powers",
      cover_image: "the-overstory.jpg",
      genre: "Fiction",
      start_date: "2019/9/21",
      end_date: "2019/9/23"
    },
    {
      title: "Fleishman is in Trouble",
      display_title: "Fleishman is in Trouble",
      author: "Taffy Brodesser-Akner",
      cover_image: "fleishman-is-in-trouble.jpg",
      genre: "Fiction",
      start_date: "2019/9/25",
      end_date: "2019/9/26"
    },
    {
      title: "Go Ahead in the Rain: Notes to A Tribe Called Quest",
      display_title: "Go Ahead in the Rain: Notes to ATCQ",
      author: "Hanif Abdurraquib",
      cover_image: "go-ahead-in-the-rain.jpg",
      genre: "Nonfiction",
      start_date: "2019/9/27",
      end_date: "2019/9/30"
    },
    {
      title: "Disappearing Earth",
      display_title: "Disappearing Earth",
      author: "Julia Phillips",
      cover_image: "disappearing-earth.jpg",
      genre: "Fiction",
      start_date: "2019/9/28",
      end_date: "2019/9/29"
    },
    {
      title: "Frankly in Love",
      display_title: "Frankly in Love",
      author: "David Yoon",
      cover_image: "frankly-in-love.jpg",
      genre: "Fiction",
      start_date: "2019/9/30",
      end_date: "2019/10/1"
    },
    {
      title: "Everyday Information Architecture",
      display_title: "Everyday Information Architecture",
      author: "Lisa Maria Martin",
      cover_image: "everyday-information-architecture.png",
      genre: "Nonfiction",
      start_date: "2019/10/2",
      end_date: "2019/10/12"
    },
    {
      title: "We are Never Meeting in Real Life",
      display_title: "We are Never Meeting in Real Life",
      author: "Samantha Irby",
      cover_image: "we-are-never-meeting-in-real-life.jpg",
      genre: "Nonfiction",
      start_date: "2019/10/6",
      end_date: "2019/12/5"
    },
    {
      title: "That All Shall be Saved",
      display_title: "That All Shall be Saved",
      author: "David Bentley Hart",
      cover_image: "that-all-shall-be-saved.jpg",
      genre: "Nonfiction",
      start_date: "2019/10/8",
      end_date: "2019/10/11"
    },
    {
      title: "Rules for Visiting",
      display_title: "Rules for Visiting",
      author: "Jessica Francis Kane",
      cover_image: "rules-for-visiting.jpg",
      genre: "Fiction",
      start_date: "2019/10/12",
      end_date: "2019/10/13"
    },
    {
      title: "Horror Stories",
      display_title: "Horror Stories",
      author: "Liz Phair",
      cover_image: "horror-stories.jpg",
      genre: "Nonfiction",
      start_date: "2019/10/13",
      end_date: "2019/10/15"
    },
    {
      title: "The First Rule of Punk",
      display_title: "The First Rule of Punk",
      author: "Celia C. Pérez",
      cover_image: "the-first-rule-of-punk.jpg",
      genre: "Fiction",
      start_date: "2019/10/16",
      end_date: "2019/10/17"
    },
    {
      title: "The Tenth Muse",
      display_title: "The Tenth Muse",
      author: "Catherine Chung",
      cover_image: "the-tenth-muse.jpg",
      genre: "Fiction",
      start_date: "2019/10/18",
      end_date: "2019/10/20"
    },
    {
      title: "Survival Math",
      display_title: "Survival Math",
      author: "Mitchell S. Jackson",
      cover_image: "survival-math.jpg",
      genre: "Nonfiction",
      start_date: "2019/10/19",
      end_date: "2019/10/31"
    },
    {
      title: "The Learning Curve",
      display_title: "The Learning Curve",
      author: "Mandy Berman",
      cover_image: "the-learning-curve.jpg",
      genre: "Fiction",
      start_date: "2019/10/21",
      end_date: "2019/10/23"
    },
    {
      title: "Red at the Bone",
      display_title: "Red at the Bone",
      author: "Jacqueline Woodson",
      cover_image: "red-at-the-bone.jpg",
      genre: "Fiction",
      start_date: "2019/11/1",
      end_date: "2019/11/2"
    },
    {
      title: "The Secrets We Kept",
      display_title: "The Secrets We Kept",
      author: "Lara Prescott",
      cover_image: "the-secrets-we-kept.jpg",
      genre: "Fiction",
      start_date: "2019/11/2",
      end_date: "2019/11/3"
    },
    {
      title: "Tumbling",
      display_title: "Tumbling",
      author: "Diane McKinney-Whetstone",
      cover_image: "tumbling.jpg",
      genre: "Fiction",
      start_date: "2019/11/5",
      end_date: "2019/11/13"
    },
    {
      title: "Batgirl Vol. 5: Art of the Crime",
      display_title: "Batgirl Vol. 5: Art of the Crime",
      author: "Mairghread Scott and Paul Pelletier",
      cover_image: "batgirl-vol5-art-of-the-crime.jpg",
      genre: "Comic",
      start_date: "2019/11/10 1:00",
      end_date: "2019/11/10 23:00"
    },
    {
      title: "Commonwealth",
      display_title: "Commonwealth",
      author: "Ann Patchett",
      cover_image: "commonwealth.jpg",
      genre: "Fiction",
      start_date: "2019/11/14",
      end_date: "2019/11/17"
    },
    {
      title: "Dominicana",
      display_title: "Dominicana",
      author: "Angie Cruz",
      cover_image: "dominicana.jpg",
      genre: "Fiction",
      start_date: "2019/11/17",
      end_date: "2019/11/21"
    },
    {
      title: "Paper Girls: Vol. 6",
      display_title: "Paper Girls: Vol. 6",
      author: "Brian K. Vaughan and Cliff Chiang",
      cover_image: "paper-girls-vol6.jpg",
      genre: "Comic",
      start_date: "2019/11/18 1:00",
      end_date: "2019/11/18 23:00"
    },
    {
      title: "Shameless: A Sexual Reformation",
      display_title: "Shameless: A Sexual Reformation",
      author: "Nadia Bolz-Weber",
      cover_image: "shameless.jpg",
      genre: "Nonfiction",
      start_date: "2019/11/18 1:00",
      end_date: "2019/11/18 23:00"
    },
    {
      title: "The Snakes",
      display_title: "The Snakes",
      author: "Sadie Jones",
      cover_image: "the-snakes.jpg",
      genre: "Fiction",
      start_date: "2019/11/22",
      end_date: "2019/11/23"
    },
    {
      title: "Does Jesus Really Love Me?",
      display_title: "Does Jesus Really Love Me?",
      author: "Jeff Chu",
      cover_image: "does-jesus-really-love-me.jpg",
      genre: "Nonfiction",
      start_date: "2019/11/23",
      end_date: "2019/11/29"
    },
    {
      title: "Dept. of Speculation",
      display_title: "Dept. of Speculation",
      author: "Jenny Offill",
      cover_image: "dept-of-speculation.jpg",
      genre: "Fiction",
      start_date: "2019/11/24 1:00",
      end_date: "2019/11/24 23:00"
    },
    {
      title: "How We Fight for Our Lives: A Memoir",
      display_title: "How We Fight for Our Lives: A Memoir",
      author: "Saeed Jones",
      cover_image: "how-we-fight-for-our-lives.jpg",
      genre: "Nonfiction",
      start_date: "2019/11/24 1:00",
      end_date: "2019/11/24 23:00"
    },
    {
      title: "In the Dream House: A Memoir",
      display_title: "In the Dream House: A Memoir",
      author: "Carmen Maria Machado",
      cover_image: "in-the-dream-house.jpg",
      genre: "Nonfiction",
      start_date: "2019/11/25",
      end_date: "2019/11/26"
    },
    {
      title: "Persephone",
      display_title: "Persephone",
      author: "Loïc Locatelli-Kournwsky",
      cover_image: "persephone.jpg",
      genre: "Comic",
      start_date: "2019/11/27",
      end_date: "2019/12/18"
    },
    {
      title: "A History of the Bible",
      display_title: "A History of the Bible",
      author: "John Barton",
      cover_image: "a-history-of-the-bible.jpg",
      genre: "Nonfiction",
      start_date: "2019/11/27",
      end_date: "2019/12/24"
    },
    {
      title: "The Wildstorm, Vol. 4",
      display_title: "The Wildstorm, Vol. 4",
      author: "Warren Ellis and Jon Davis-Hunt",
      cover_image: "the-wildstorm-vol4.jpg",
      genre: "Comic",
      start_date: "2019/11/28",
      end_date: "2019/12/1"
    },
    {
      title: "The New Me",
      display_title: "The New Me",
      author: "Halle Butler",
      cover_image: "the-new-me.jpg",
      genre: "Fiction",
      start_date: "2019/11/28 1:00",
      end_date: "2019/11/28 23:00"
    },
    {
      title: "Inland",
      display_title: "Inland",
      author: "Téa Obreht",
      cover_image: "inland.jpg",
      genre: "Fiction",
      start_date: "2019/11/29",
      end_date: "2019/12/3"
    },
    {
      title: "The Travelers",
      display_title: "The Travelers",
      author: "Regina Porter",
      cover_image: "the-travelers.jpg",
      genre: "Fiction",
      start_date: "2019/12/6",
      end_date: "2019/12/15"
    },
    {
      title: "Curious Toys",
      display_title: "Curious Toys",
      author: "Elizabeth Hand",
      cover_image: "curious-toys.jpg",
      genre: "Fiction",
      start_date: "2019/12/16",
      end_date: "2019/12/20"
    },
    {
      title: "Dune",
      display_title: "Dune",
      author: "Frank Herbert",
      cover_image: "dune.jpg",
      genre: "Fiction",
      start_date: "2019/12/24",
      end_date: "2019/12/27"
    },
    {
      title: "Three Women",
      display_title: "Three Women",
      author: "Lisa Taddeo",
      cover_image: "three-women.jpg",
      genre: "Nonfiction",
      start_date: "2019/12/29 1:00",
      end_date: "2019/12/29 23:00"
    },
    {
      title: "Trick Mirror",
      display_title: "Trick Mirror",
      author: "Jia Tolentino",
      cover_image: "trick-mirror.jpg",
      genre: "Nonfiction",
      start_date: "2019/12/31 1:00",
      end_date: "2020/1/1"
    }
  ],
  size: [1200, 1600],
  margin: { left: 300, top: 100, bottom: 80, right: 20 },
  type: "timeline",
  projection: "horizontal",
  oPadding: 2,
  oAccessor: "display_title",
  rAccessor: function(e) {
    return [new Date(e.start_date), new Date(e.end_date)];
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
        <p>Started: {new Date(d.start_date).toLocaleDateString("en-US")}</p>
        <p>Finished: {new Date(d.end_date).toLocaleDateString("en-US")}</p>
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
