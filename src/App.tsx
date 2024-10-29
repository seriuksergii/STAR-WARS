import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { HeroDetails } from './pages/HeroDetails';
import './App.css';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hero/:heroId" element={<HeroDetails />} />
    </Routes>
  );
};
