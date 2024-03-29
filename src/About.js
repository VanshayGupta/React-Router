import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
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
      <p>Pokémon, electronic game series from Nintendo that debuted in Japan in February 1996 as Pokémon Green and Pokémon Red. The franchise later became wildly popular in the United States and around the world. The series, originally produced for the company’s Game Boy line of handheld consoles, was introduced in 1998 to the United States with two titles, known to fans as Red and Blue. In the games, players assume the role of Pokémon trainers, obtaining cartoon monsters and developing them to battle other Pokémon. Pokémon became one of the most successful video game franchises in the world, second only to Nintendo’s Super Mario Bros.</p>
      <p>The original Pokémon is a role-playing game based around building a small team of monsters to battle other monsters in a quest to become the best. Pokémon are divided into types, such as water and fire, each with different strengths. Battles between them can be likened to the simple hand game rock-paper-scissors. For example, to gain an advantage over a Pokémon that cannot beat an opponent’s Charizard character because of a weakness to fire, a player might substitute a water-based Pokémon. With experience, Pokémon grow stronger, gaining new abilities. By defeating Gym Leaders and obtaining Gym Badges, trainers garner acclaim.</p>
      <p>Pikachu, a yellow mouselike creature, is the undisputed face of Pokémon and helped the series become a worldwide phenomenon. Pokémon inspired a cartoon series, movies, books, a toy line, sequels, spin-offs, a clothing line, and a popular trading-card game. In spite of a friendly interface and little violence, Pokémon has not been without controversy, however. In 1999 the parents of two nine-year-old boys sued Nintendo, stating that the Pokémon card game had caused the children to develop gambling problems and likening the trading-card craze to an illegal lottery. Religious groups that discount the theory of evolution also targeted Pokémon, for showing Pokémon evolving into new creatures.
        Beginning in 2006, Pokémon video-game titles were produced exclusively for a new handheld console, the Nintendo DS, instead of the Game Boy, which was soon discontinued. In 2013 Pokémon X and Pokémon Y debuted on the Nintendo 3DS, which employed stereoscopic technology. The mobile application Pokémon GO was a blockbuster success upon its release in 2016. Developed by Niantic Labs, a former division of Google, the game used GPS data and the mobile device’s camera to create an “augmented reality” that allowed users to capture Pokémon from real-life locations.</p>
        </div>
      </div>
  
  );
}

export default About;
