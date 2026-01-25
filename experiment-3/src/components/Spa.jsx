import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Homes';
import About from './Abouts';
import Contact from './Contacts';

export default function SinglePageApp() {
  return (
    <BrowserRouter>
      <h1 className="app-headline">SinglePageApp with routing</h1>
      <nav className="main-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}