import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/super-heroes' element={<SuperHeroesPage />} />
        <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
