import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from 'react-router-dom';
import Home from './components/Home/HomePage';
import Technology from './components/Home/Technology/TechnologyPage';
import Medicine from './components/Home/Medicine/MedicinePage';
import Engineering from './components/Home/Engineering/EngineeringPage';
import Finance from './components/Home/Finance/FinancePage';
import Business from './components/Home/Business/BusinessPage';
import Education from './components/Home/Education/EducationPage';
function App() {
  let history = useHistory();

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

        <Route exact path = '/Finance'>
          <Finance/>
        </Route>

        <Route exact path = '/Business'>
          <Business/>
        </Route>
        
        <Route exact path = '/Education'>
          <Education/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
