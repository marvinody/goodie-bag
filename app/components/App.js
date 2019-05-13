import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Root from './/root';
import CandyList from './CandyList';

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="candies">Candies</Link>
      </nav>
      <Route exact path="/" component={Root} />
      <Route exact path="/candies" component={CandyList} />
    </div>
  </Router>
)

export default App

