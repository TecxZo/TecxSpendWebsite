import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import DataDeletion from './pages/DataDeletion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
