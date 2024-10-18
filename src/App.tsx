import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Adoption from './components/adoption/page';
import AdoptionProcess from './components/adoption/adoptionprocess';
import PomeranianPage from './pages/pomeranian';
import SerbianHuskyPage from './pages/serbianhusky';
import GoldenRetrieverPage from './pages/goldenretriever';
import FrenchbulldogPage from './pages/frenchbulldog';
import About from './pages/about';
import Contact from './pages/contact';
import Puppies from './pages/puppies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/adoptionprocess" element={<AdoptionProcess />} />
        <Route path="/pomeranian" element={<PomeranianPage />} />
        <Route path="/siberian" element={<SerbianHuskyPage />} />
        <Route path="/french" element={<FrenchbulldogPage />} />
        <Route path="/golden" element={<GoldenRetrieverPage />} />
        <Route path="/puppies" element={<Puppies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
