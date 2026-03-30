// src/App.jsx
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <main>
        <Hero />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;



{/* 

git add .
git commit -m "Update"
git push origin main 

npm run deploy

*/}