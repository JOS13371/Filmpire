import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { MovieInformation, Movies, Actors, Profile, NavBar } from '.';

import './App.css';

const App = () => (
  <div className="mai">
    <CssBaseline />
    <main className="content">
      <div className="toolbar" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </main>
  </div>
);
export default App;
