import React from 'react';
import Menu from './components/Menu';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes} from './routes'
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

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
