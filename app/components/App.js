import React from 'react';
import { HashRouter as Router, NavLink, Route } from 'react-router-dom';
import CandyList from './CandyList';
import Root from './root';

const App = () => (
  <Router>
    <div>
      <nav>
        <NavLink activeClassName="selected" to="/">Home</NavLink>
        <NavLink activeClassName="selected" to="candies">Candies</NavLink>
      </nav>
      <Route exact path="/" component={Root} />
      <Route exact path="/candies" component={CandyList} />
    </div>
  </Router>
)

export default App

