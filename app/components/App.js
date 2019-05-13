import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Root from './/root';

const App = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="candies">Candies</Link>
      <Route exact path="/" component={Root} />
    </div>
  </Router>
)

export default App

