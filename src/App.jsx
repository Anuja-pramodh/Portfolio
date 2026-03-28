import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import './App.css';

function App() {
  return (
    <Router>
      <div className="portfolio-app">
        <Navbar />
        <main>
          <Hero />
          <Education />
          {/* අනිත් components මෙතනට පසුව එක් කරන්න */}
        </main>
      </div>
    </Router>
  );
}

export default App;