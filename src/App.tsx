import React from 'react';
import Menu from './components/Menu';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from './routes'
import Footer from './components/Footer';

import './styles/global.css'

function App() {
  return (
    <div >
      <Router>
        <Menu/>
        <Routes/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
