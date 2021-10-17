import { useState } from "react";
import "./styles.css";

var animeDB = {
  Action: [
    {
      name: "Naruto",
      rating: "4/5",
      description:
        "The story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village."
    },
    {
      name: "Hunter x Hunter",
      rating: "4.5/5",
      description:
        "Gon Freecss is on a mission to train himself as a hunter just like his father. He reunites with his father, who is alive and an accomplished hunter too."
    },
    {
      name: "One Punch man",
      rating: "5/5",
      description:
        "It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge due to his overwhelming strength."
    }
  ],
  Sport: [
    {
      name: "Haikyuu",
      rating: "5/5",
      description:
        "The story follows Shōyō Hinata, a boy determined to become a great volleyball player despite his small stature."
    },
    {
      name: "Kuroko's Basketball",
      rating: "3/5",
      description:
        "Kuroko's Basketball is a Japanese sports manga series written and illustrated by Tadatoshi Fujimaki. It was serialized in Weekly Shōnen Jump from December 2008 to September 2014, with the individual chapters collected into 30 tankōbon volumes by Shueisha."
    },
    {
      name: "Captain Tsubasa",
      rating: "3.5/5",
      description:
        "An 11-year-old boy who loves soccer is discovered by a former Brazilian star."
    }
  ],
  Thriller: [
    {
      name: "Death Note",
      rating: "5/5",
      description:
        "The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the Death Note"
    },
    {
      name: "Doctor stone",
      rating: "4/5",
      description:
        "Dr. Stone is a Japanese manga series written by Riichiro Inagaki and illustrated by the South Korean artist Boichi."
    },
    {
      name: "Promised Neverland",
      rating: "4.5/5",
      description:
        "The Promised Neverland is a Japanese manga series written by Kaiu Shirai and illustrated by Posuka Demizu. It was serialized in Shueisha's Weekly Shōnen Jump from August 2016 to June 2020, with its chapters collected in twenty tankōbon volumes."
    }
  ]
};

var animes = Object.keys(animeDB);

export default function App() {
  var [display, setDisplay] = useState([]);
  function onClickHandler(item) {
    display = animeDB[item];
    setDisplay(display);
  }
  return (
    <div className="App">
      <header>
        <h1>Anime Recommender</h1>
      </header>
      <h2>Checkout my favorite anime. Select a genre to get started</h2>
      <ul>
        {animes.map((item) => {
          return (
            <button key={item} onClick={() => onClickHandler(item)}>
              {item}
            </button>
          );
        })}
      </ul>
      <div>
        {display.map((item) => {
          return (
            <li key={item}>
              <div>{item.name}</div>
              <div id="text">Rating - {item.rating}</div>
              <div id="description">Description - {item.description}</div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
