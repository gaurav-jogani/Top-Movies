import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Homepage } from './components/homepage/homepage';
import { Movie } from './components/Movie/movie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='*' element={<Navigate to={'/'} replace />} />
      </Routes>
    </div>
  );
}

export default App;
