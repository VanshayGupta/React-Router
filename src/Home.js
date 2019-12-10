import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Pokemon</a>
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"></img>
            Pokémon[a] (English: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/),[1][2][3] also known as Pocket Monsters[b] in Japan, is a media franchise managed by The Pokémon Company, a Japanese company founded and with shares divided between Nintendo, Game Freak, and Creatures.[4] The franchise copyright and Japanese trademark is shared by all three companies,[5] but Nintendo is the sole owner of the trademark in other countries.[6] The franchise was created by Satoshi Tajiri in 1995,[7] and is centered on fictional creatures called "Pokémon", which humans, known as Pokémon Trainers, catch and train to battle each other for sport. The English slogan for the franchise is "Gotta Catch 'Em All".[8][9] Works within the franchise are set in the Pokémon universe.

            The franchise began as Pokémon Red and Green (later released outside of Japan as Pokémon Red and Blue), a pair of video games for the original Game Boy that were developed by Game Freak and published by Nintendo in February 1996. It soon became a media mix franchise adapted into various different media.[10] Pokémon has since gone on to become the highest-grossing media franchise of all time,[11][12][13] with $90 billion in total franchise revenue.[14][15] The original video game series is the second best-selling video game franchise (behind Nintendo's Mario franchise)[16] with more than 346 million copies sold[17] and 1 billion mobile downloads,[18] and it spawned a hit anime television series that has become the most successful video game adaptation[19] with over 20 seasons and 1,000 episodes in 169 countries.[17] In addition, the Pokémon franchise includes the world's top-selling toy brand,[20] the top-selling trading card game[21] with over 28.8 billion cards sold,[17] an anime film series, a live-action film, books, manga comics, music, merchandise, and a theme park. The franchise is also represented in other Nintendo media, such as the Super Smash Bros. series.

            In November 2005, 4Kids Entertainment, which had managed the non-game related licensing of Pokémon, announced that it had agreed not to renew the Pokémon representation agreement. The Pokémon Company International oversees all Pokémon licensing outside Asia.[22] In 2006, the franchise celebrated its tenth anniversary.[23] In 2016, The Pokémon Company celebrated Pokémon's 20th anniversary by airing an ad during Super Bowl 50 in January and issuing re-releases of the 1996 Game Boy games Pokémon Red, Green (only in Japan), and Blue, and the 1998 Game Boy Color game Pokémon Yellow for the Nintendo 3DS on February 26, 2016.[24][25] The mobile augmented reality game Pokémon Go was released in July 2016.[26] The first live-action film in the franchise, Pokémon Detective Pikachu, based on the 2018 Nintendo 3DS spinoff game Detective Pikachu, was released in 2019.[11] The most recently released games, Pokémon Sword and Shield, were released worldwide on the Nintendo Switch on November 15, 2019.[27]
        </div>
    </div>
  );
}

export default Home;
