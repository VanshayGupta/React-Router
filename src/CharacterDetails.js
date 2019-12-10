import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CharacterDetails({match}) {

    useEffect(() => {
        fetchItems();
        console.log(match);
    }, []);

    const[items, setItems]=useState([]);

    const fetchItems= async() => {
        const data=await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
        const items= await data.json();
        setItems(items);

    };

  return (
      console.log(items),
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
        <div id="details">
            <h1>POKEMON DETAILS</h1>
            <img id="image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${items.id}.png`}></img>
        <h2>Name- {items.name}</h2>
            <h2>Base Experience- {items.base_experience}</h2>
            <h2>Weight- {items.weight}</h2>   
            <h2>Order- {items.order}</h2>   
            <h2>Height- {items.height}</h2>   
        </div>
           
   
    </div>
  );
}

export default CharacterDetails;