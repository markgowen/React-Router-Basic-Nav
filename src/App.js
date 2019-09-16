import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <nav>
        <Navigation />
    </nav>

    <Route expact path='/' component={Home} />
    <Route exact path='/About' component={About} />
    <Route exact path='/Contact' component={Contact} />

  </div>
);

export default App;
