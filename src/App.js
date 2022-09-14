import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/Home.page';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/super-heroes' element={<SuperHeroesPage />} />
        <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
