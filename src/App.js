import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js'
import Characters from './Characters.js'
import CharacterDetails from './CharacterDetails.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/characters" exact component={Characters}></Route>
          <Route path="/characters/:id" component={CharacterDetails}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
