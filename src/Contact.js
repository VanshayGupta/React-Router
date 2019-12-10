import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
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
        <form id="form">
            <h3>Email</h3>
            <input type="text" class="form-control" placeholder="Enter your email id"></input>
          <h3>Username</h3>
          <input type="text" class="form-control" placeholder="Enter your username"></input>
          <h3>Query</h3>
          <textarea type="text" class="form-control" placeholder="Enter your query"></textarea>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  );
}

export default Contact;
