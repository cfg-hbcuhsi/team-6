import React from 'react';
//import logo from './components/Home/';
import './App.css';
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        //Use Browser Router to route to different pages
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    );
}

export default App;
