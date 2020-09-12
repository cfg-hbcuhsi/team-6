import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './components/Home/HomePage';
import Technology from './components/Home/Technology/TechnologyPage';
import Medicine from './components/Home/Medicine/MedicinePage';
import Engineering from './components/Home/Engineering/EngineeringPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route exact path = '/Medicine'>
          <Medicine/>
        </Route>

        <Route exact path = '/Technology'>
          <Technology/>
        </Route>

        <Route exact path = '/Engineering'>
          <Engineering/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
