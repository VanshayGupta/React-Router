import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Characters() {

    useEffect(() => {
        fetchItems();
    }, []);

    const[items, setItems]=useState([]);

    const fetchItems= async() => {
        const data=await fetch('https://pokeapi.co/api/v2/pokemon');
        const items= await data.json();
        setItems(items.results);
    };

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link to="/">
              <a class="navbar-brand">Pokemon</a>
              </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/about">
                        <h3 class="nav-link">About</h3>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact">
                        <h3 class="nav-link">Contact</h3>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/characters">
                        <h3 class="nav-link">Characters</h3>
                    </Link>
                </li>
            </ul>
        </div>
        </nav>
        <div class="text">
        Pokémon executive director Satoshi Tajiri first thought of Pokémon, albeit with a different concept and name, around 1989, when the Game Boy was released. The concept of the Pokémon universe, in both the video games and the general fictional world of Pokémon, stems from the hobby of insect collecting, a popular pastime which Tajiri enjoyed as a child.[30] Players are designated as Pokémon Trainers and have three general goals: to complete the regional Pokédex by collecting all of the available Pokémon species found in the fictional region where a game takes place, to complete the national Pokédex by transferring Pokémon from other regions, and to train a team of powerful Pokémon from those they have caught to compete against teams owned by other Trainers so they may eventually win the Pokémon League and become the regional Champion. These themes of collecting, training, and battling are present in almost every version of the Pokémon franchise, including the video games, the anime and manga series, and the Pokémon Trading Card Game.

In most incarnations of the Pokémon universe, a Trainer who encounters a wild Pokémon is able to capture that Pokémon by throwing a specially designed, mass-producible spherical tool called a Poké Ball at it. If the Pokémon is unable to escape the confines of the Poké Ball, it is considered to be under the ownership of that Trainer. Afterwards, it will obey whatever commands it receives from its new Trainer, unless the Trainer demonstrates such a lack of experience that the Pokémon would rather act on its own accord. Trainers can send out any of their Pokémon to wage non-lethal battles against other Pokémon; if the opposing Pokémon is wild, the Trainer can capture that Pokémon with a Poké Ball, increasing their collection of creatures. In Pokémon Go, and in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, wild Pokémon encountered by players can be caught in Poké Balls, but generally cannot be battled. Pokémon already owned by other Trainers cannot be captured, except under special circumstances in certain side games. If a Pokémon fully defeats an opponent in battle so that the opponent is knocked out ("faints"), the winning Pokémon gains experience points and may level up. Beginning with Pokémon X and Y, experience points are also gained from catching Pokémon in Poké Balls. When leveling up, the Pokémon's battling aptitude statistics ("stats", such as "Attack" and "Speed") increase. At certain levels, the Pokémon may also learn new moves, which are techniques used in battle. In addition, many species of Pokémon can undergo a form of metamorphosis and transform into a similar but stronger species of Pokémon, a process called evolution; this process occurs spontaneously under differing circumstances, and is itself a central theme of the series. Some species of Pokémon may undergo a maximum of two evolutionary transformations, while others may undergo only one, and others may not evolve at all. For example, the Pokémon Pichu may evolve into Pikachu, which in turn may evolve into Raichu, following which no further evolutions may occur. Pokémon X and Y introduced the concept of "Mega Evolution," by which certain fully evolved Pokémon may temporarily undergo an additional evolution into a stronger form for the purpose of battling; this evolution is considered a special case, and unlike other evolutionary stages, it is reversible.
        <h1 id="headingList">LIST OF POKEMON</h1>
        </div>
        <div id="pokeList">
        {
            items.map(item => (
            <h1 key={item.name}>
                <Link to={`/characters/${item.name}`}>
                <h3 id="listItem">{item.name}</h3>
                </Link>
            </h1>
            ))
        }
        </div>
   
    </div>
  );
}

export default Characters;