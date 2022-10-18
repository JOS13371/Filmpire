import { CssBaseline } from '@mui/material';

import { Routes, Route } from 'react-router-dom';

import { MovieInformation, Movies, Actors, Profile, NavBar } from './components';

const App = () => {
  const hey = 'e';
  return (
    <div>
      <CssBaseline />
      <main>
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
};

export default App;
