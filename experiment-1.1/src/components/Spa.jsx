import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Homes';
import About from './Abouts';
import Contact from './Contacts';

export default function SinglePageApp() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}