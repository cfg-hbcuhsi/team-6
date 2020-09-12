import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from 'react-router-dom';
import Home from './components/Home/HomePage';
import Technology from './components/Home/Technology/TechnologyPage';
import Medicine from './components/Home/Medicine/MedicinePage';
import Engineering from './components/Home/Engineering/EngineeringPage';
import alanBtn from '@alan-ai/alan-sdk-web';
function App() {
  const history = useHistory();

  return (

    useEffect(() => {
      alanBtn({
        key: 'c42c99b8f0b40c9fd73a92f4dd3de6572e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({ command }) => {
          if (command === 'twilight') {
            history.push('/Medicine');
           

          }
        },
      });
    }, []),




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
