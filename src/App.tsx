import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HomePage from './components/Pages/HomePage';
import DriftPage from './components/Pages/DriftPage';
import TimeAttackPage from './components/Pages/TimeAttackPage';
import ForzaPage from './components/Pages/ForzaPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
