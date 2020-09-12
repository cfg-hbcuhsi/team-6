import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './components/Home/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = '/'>
          <Home/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
