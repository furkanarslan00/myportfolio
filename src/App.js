import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Music from './Music';
import Picture from './Picture';
import Game from './Game';
import Project from './Project';
import CV from './CV';
import Footer from './Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            {/* Ana sayfa için /myportfolio adresine yönlendirme */}
            <Route path="/" element={<Home />} />
            {/* Diğer sayfalar */}
            <Route path="/myportfolio" element={<Home />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Picture" element={<Picture />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/CV" element={<CV />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
